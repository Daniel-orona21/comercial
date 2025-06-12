import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ordenes-de-compra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ordenes-de-compra.component.html',
  styleUrls: ['./ordenes-de-compra.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrdenesDeCompraComponent {

}
