import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-orden',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './editar-orden.component.html',
  styleUrl: './editar-orden.component.scss'
})
export class EditarOrdenComponent {
  activeTab: string = 'surtir';

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/app/ordenes']);
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
} 