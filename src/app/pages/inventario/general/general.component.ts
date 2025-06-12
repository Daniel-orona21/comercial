import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeneralComponent {

} 