import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagosComponent {

}
