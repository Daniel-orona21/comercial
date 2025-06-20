import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto-de-venta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-de-venta.component.html',
  styleUrl: './punto-de-venta.component.scss'
})
export class PuntoDeVentaComponent {
  activeTab: string = 'ventas';

  selectTab(tabName: string) {
    this.activeTab = tabName;
  }
}
