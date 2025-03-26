import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tu-componente',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent {
  constructor(
    private router: Router) {

    }
  openOAuthDialog(): void {
    this.router.navigate(['/wizard/steps']);
  }
}