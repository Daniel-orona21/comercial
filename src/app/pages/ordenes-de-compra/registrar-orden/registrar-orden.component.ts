import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registrar-orden',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './registrar-orden.component.html',
  styleUrls: ['./registrar-orden.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrarOrdenComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/app/ordenes']);
  }
} 