import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HamburgerMenuComponent } from '../hamburgerMenu/menu.component';
import { TableWithSelectionComponent } from '../../table-select/table.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout-home.component.html',
  imports:[RouterModule, HamburgerMenuComponent, TableWithSelectionComponent],
  standalone:true,
  styleUrls: ['./layout-home.component.scss']
})
export class LayoutComponentHome {}