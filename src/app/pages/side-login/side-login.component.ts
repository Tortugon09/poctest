import { Component, Pipe, PipeTransform } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './side-login.component.html',
})


export class AppSideLoginComponent {

 

  constructor(
    private router: Router, 
    private dialog: MatDialog) {

    }

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
   
  }
  openOAuthDialog(): void {
    this.router.navigate(['/wizard/login']);
  }
}
