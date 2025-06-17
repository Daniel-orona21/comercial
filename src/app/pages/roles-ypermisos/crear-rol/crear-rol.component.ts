import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-rol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crear-rol.component.html',
  styleUrl: './crear-rol.component.scss'
})
export class CrearRolComponent {
  constructor(private router: Router) {}

  cancel() {
    this.router.navigate(['/app/roles-y-permisos']);
  }
} 