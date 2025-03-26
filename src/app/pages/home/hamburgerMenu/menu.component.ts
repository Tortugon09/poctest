import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-hamburger-menu', // Selector del componente
  templateUrl: './menu.component.html', // Plantilla HTML
  styleUrls: [ './menu.component.scss'], 
  standalone: true,
  imports: [MaterialModule, RouterModule],
  encapsulation: ViewEncapsulation.None 
})
export class HamburgerMenuComponent {
  
  
}