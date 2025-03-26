import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    MatToolbar,
    MatIconModule,
    MatButtonModule,
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Aquí puedes agregar lógica si necesitas interacción en el header
}
