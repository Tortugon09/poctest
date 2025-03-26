import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { HamburgerMenuComponent } from '../home/hamburgerMenu/menu.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports:[HeaderComponent, RouterModule, HamburgerMenuComponent],
  standalone:true,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {}