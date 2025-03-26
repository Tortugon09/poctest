import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormArray
} from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { AppBarChartComponent } from '../chart-bar/bar-charts.component';
import { AppBarChartComponentVertical } from '../chart-bar-horizontal/bar-charts-v.component';
import { TableWithSelectionComponent } from '../table-select/table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-wizard',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule, AppBarChartComponent, AppBarChartComponentVertical, TableWithSelectionComponent ],
  templateUrl: './form-wizard.component.html',
  styleUrl: './form-wizard.component.scss'
})
export class AppFormWizardComponent {
  firstFormGroup: any;
  secondFormGroup: any;
  selectedOption: string | null = null;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    // Se crea un FormGroup vacío que se actualizará dinámicamente
    this.secondFormGroup = this._formBuilder.group({});
  }
  // Función que se llama para agregar más grupos si es necesario
  agregarGrupo() {
    this.grupos.push({ textareas: ['', '', ''] });
  }
  
  createGrupo(): FormGroup {
    return this._formBuilder.group({
      textarea1: ['', Validators.required],
      textarea2: ['', Validators.required],
      textarea3: ['', Validators.required]
    });
  }
  get grupos(): FormArray {
    return this.secondFormGroup.get('grupos') as FormArray;
  }
  selectOption(option: string) {
    this.selectedOption = option;

    // Resetear el FormGroup y definir nuevos controles dependiendo de la opción
    if (option === 'opcion1') {
      this.secondFormGroup = this._formBuilder.group({
        grupos: this._formBuilder.array([
          this.createGrupo(), // Primer grupo
          this.createGrupo(), // Segundo grupo
          this.createGrupo()  // Tercer grupo
        ])
      });
    }else if (option === 'opcion2') {
      this.secondFormGroup = this._formBuilder.group({
        email: ['', ],
        phone: ['', ]
      });
    }
  }
  redirectToHome() {
    this.router.navigate(['/home']); // Navega a la ruta home
  }

  constructor(private _formBuilder: FormBuilder, private router: Router) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
