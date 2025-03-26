import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { AppSideLoginComponent } from './pages/side-login/side-login.component';
import { LayoutComponentHome } from './pages/home/layout/layout-home.component';

export const routes: Routes = [
    {
      path: '',
      component: AppSideLoginComponent,
    },
    {
      path: 'wizard',
      component: LayoutComponent,
      children: [
        { 
          path: 'steps', 
          loadComponent: () => import('./pages/form-wizard/form-wizard.component')
            .then(m => m.AppFormWizardComponent) 
        },
        { 
          path: 'login', 
          loadComponent: () => import('./pages/login/login.component')
            .then(m => m.LoginComponent) 
        },
        { path: '', redirectTo: 'steps', pathMatch: 'full' } 
      ]
    },
    { 
      path: 'home',
      loadChildren: () => import('./pages/home/pages.routes').then(m => m.PAGES_ROUTES)
    },
  ];