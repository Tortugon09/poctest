import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';


export interface Element {
  name: string;
  position: number;
}

@Component({
  selector: 'app-table-with-selection',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [MaterialModule, CommonModule]
})
export class TableWithSelectionComponent {
    displayedColumns: string[] = ['position', 'name', 'select'];
    dataSource: Element[] = [
      { position: 1, name: 'Hydrogen' },
      { position: 2, name: 'Helium' },
      { position: 3, name: 'Lithium' },
      { position: 4, name: 'Beryllium' },
      { position: 5, name: 'Boron' }
    ];
    selectedElements: Element[] = [];
  
    selectElement(element: Element): void {
      if (this.selectedElements.length < 3 && !this.selectedElements.includes(element)) {
        this.selectedElements.push(element);
      } else if (this.selectedElements.includes(element)) {
        this.removeElement(element); // Permite deseleccionar el elemento
      }
    }
  
    removeElement(element: Element): void {
      this.selectedElements = this.selectedElements.filter(e => e !== element);
    }
  }