import { Routes } from '@angular/router';
import { LayoutComponentHome } from './layout/layout-home.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponentHome, // Componente que contiene el menú
    children: [
      { 
        path: 'page1',
        loadComponent: () => import('./page1/page1.component').then(m => m.Page1Component)
      },
      { 
        path: 'page2',
        loadComponent: () => import('./page2/page2.component').then(m => m.Page2Component)
      },
      { 
        path: 'page3',
        loadComponent: () => import('./page3/page3.component').then(m => m.Page3Component)
      },
      { path: '', redirectTo: 'page1', pathMatch: 'full' }
    ]
  }
];