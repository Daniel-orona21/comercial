import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntradasComponent {

} 