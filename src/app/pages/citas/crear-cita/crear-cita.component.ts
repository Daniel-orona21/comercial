import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-cita',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.scss']
})
export class CrearCitaComponent implements OnInit {
  @Input() selectedDate: Date | null = null;
  @Input() currentView: string = 'dayGridMonth';
  @Input() selectedResourceId: string | null = null;
  @Input() resources: any[] = [];
  @Input() slotMinTime: string = '08:00:00';
  @Input() slotMaxTime: string = '20:00:00';
  @Input() slotDuration: string = '00:15:00';
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  citaForm: FormGroup;
  timeSlots: string[] = [];

  constructor(private fb: FormBuilder) {
    this.citaForm = this.fb.group({
      cliente: ['', Validators.required],
      servicio: ['', Validators.required],
      resourceId: ['', Validators.required],
      fecha: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.selectedDate) {
      const formattedDate = this.selectedDate.toISOString().split('T')[0];
      this.citaForm.patchValue({ fecha: formattedDate });

      if (this.currentView !== 'dayGridMonth') {
        const hours = this.selectedDate.getHours().toString().padStart(2, '0');
        const minutes = this.selectedDate.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        
        this.citaForm.patchValue({ 
          horaInicio: formattedTime
        });
      }
    }
    
    if (this.selectedResourceId) {
      this.citaForm.patchValue({ resourceId: this.selectedResourceId });
    }

    this.generateTimeSlots();
  }

  generateTimeSlots(): void {
    const slots = [];
    const [startHour, startMinute] = this.slotMinTime.split(':').map(Number);
    const [endHour, endMinute] = this.slotMaxTime.split(':').map(Number);
    const [durationHour, durationMinute] = this.slotDuration.split(':').map(Number);
    
    const intervalMinutes = durationHour * 60 + durationMinute;
    if (intervalMinutes === 0) return;

    let currentMinutes = startHour * 60 + startMinute;
    const endMinutes = endHour * 60 + endMinute;

    while (currentMinutes < endMinutes) {
      const hours = Math.floor(currentMinutes / 60);
      const minutes = currentMinutes % 60;
      slots.push(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
      currentMinutes += intervalMinutes;
    }
    
    this.timeSlots = slots;
  }

  onSave(): void {
    if (this.citaForm.valid) {
      const formValue = this.citaForm.value;
      
      const startDateTime = new Date(`${formValue.fecha}T${formValue.horaInicio}`);
      const endDateTime = new Date(`${formValue.fecha}T${formValue.horaFin}`);

      const newEvent = {
        title: `${formValue.cliente}\n${formValue.servicio}`,
        start: startDateTime,
        end: endDateTime,
        resourceId: formValue.resourceId
      };

      this.save.emit(newEvent);
      this.close.emit();
    }
  }

  onCancel(): void {
    this.close.emit();
  }
} 