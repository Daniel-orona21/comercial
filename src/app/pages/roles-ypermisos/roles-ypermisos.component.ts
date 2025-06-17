import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-ypermisos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles-ypermisos.component.html',
  styleUrl: './roles-ypermisos.component.scss'
})
export class RolesYpermisosComponent {
  constructor(private router: Router) {}

  newRole() {
    this.router.navigate(['/app/roles-y-permisos/crear']);
  }
}
