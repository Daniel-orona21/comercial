import { Component, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { CommonModule } from '@angular/common';
import esLocale from '@fullcalendar/core/locales/es';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';

// Professional color palette
const appointmentColors = {
  valoracion: '#a3c4f3', // Pastel Blue
  depilacion: '#90ee90', // Light Green
  relleno: '#d3aed6',    // Pastel Purple
  comida: '#e0e0e0',      // Grey
  default: '#f4a261'     // Default Orange
};

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, CrearCitaComponent],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})
export class CitasComponent implements AfterViewInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  currentView: 'dayGridMonth' | 'timeGridWeek' | 'resourceTimeGridDay' = 'dayGridMonth';
  calendarTitle: string = '';
  showCrearCitaModal = false;
  selectedDate: Date | null = null;
  selectedResourceId: string | null = null;

  calendarOptions: CalendarOptions = {
    plugins: [
      resourceTimelinePlugin,
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin,
      resourceTimeGridPlugin
    ],
    dateClick: this.handleDateClick.bind(this),
    headerToolbar: false,
    initialView: 'dayGridMonth',
    nowIndicator: true,
    editable: true,
    eventResizableFromStart: true,
    droppable: true,
    allDaySlot: false,
    slotMinTime: '08:00:00',
    slotMaxTime: '20:00:00',
    slotDuration: '00:15:00',
    slotLabelInterval: '01:00',
    fixedWeekCount: false,
    showNonCurrentDates: true,
    locale: esLocale,
    firstDay: 0,
    dayHeaderContent: (args) => {
      const days = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D'];
      return days[args.date.getDay()];
    },
    
    views: {
      resourceTimeGridDay: {
        slotLabelFormat: {
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short'
        }
      }
    },

    resourceLabelContent: (arg) => {
      return {
        html: `
          <div class="resource-header">
            <img class="resource-avatar" src="${arg.resource.extendedProps['imageUrl']}" />
            <div class="resource-name">${arg.resource.title}</div>
          </div>
        `
      }
    },
    resources: [
      { id: 'a', title: 'Miriam López', imageUrl: 'https://i.pravatar.cc/150?u=a' },
      { id: 'b', title: 'Mary Sanchez', imageUrl: 'https://i.pravatar.cc/150?u=b' },
      { id: 'c', title: 'Luisa López', imageUrl: 'https://i.pravatar.cc/150?u=c' },
      { id: 'd', title: 'Irma Bejar', imageUrl: 'https://i.pravatar.cc/150?u=d' },
      { id: 'e', title: 'Brenda Rios', imageUrl: 'https://i.pravatar.cc/150?u=e' },
      { id: 'f', title: 'Isabel Carlos', imageUrl: 'https://i.pravatar.cc/150?u=f' },
      { id: 'g', title: 'Araceli Diaz', imageUrl: 'https://i.pravatar.cc/150?u=g' }
    ],
    events: this.getEventsForDate(new Date()),
  };

  getArrayResources(): any[] {
    const resources = this.calendarOptions.resources;
    if (Array.isArray(resources)) {
      return resources;
    }
    return [];
  }

  handleDateClick(arg: DateClickArg) {
    this.selectedDate = arg.date;
    
    if (this.currentView === 'resourceTimeGridDay') {
      this.selectedResourceId = arg.resource?.id || null;
    } else {
      this.selectedResourceId = null;
    }

    this.showCrearCitaModal = true;
  }

  openCrearCitaModal() {
    this.selectedDate = new Date(); // Default to today if opened from '+' button
    this.showCrearCitaModal = true;
  }

  onCloseModal() {
    this.showCrearCitaModal = false;
  }

  onSaveCita(newEvent: any) {
    const eventWithColor = {
      ...newEvent,
      color: appointmentColors.default
    };
    this.calendarApi?.addEvent(eventWithColor);
    this.showCrearCitaModal = false;
  }

  citasDeHoy = [
    { name: 'Luisa Peréz', time: '08:00 - 09:00', service: 'Valoración' },
    { name: 'Yessica Ríos', time: '08:00 - 09:00', service: 'Depilación' },
    { name: 'Karina González', time: '08:00 - 09:00', service: 'Valoración' },
    { name: 'Sabrina Ríos', time: '09:00 - 10:00', service: 'Depilación' },
    { name: 'Karla González', time: '09:00 - 11:00', service: 'Relleno' },
  ];

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.updateCalendarTitle();
    this.cd.detectChanges();
  }

  get calendarApi(): Calendar | null {
    return this.calendarComponent?.getApi() ?? null;
  }

  updateCalendarTitle() {
    if (this.calendarApi) {
      const date = this.calendarApi.getDate();
      const month = date.toLocaleString('es-ES', { month: 'long' });
      const year = date.getFullYear();
      this.calendarTitle = `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
    }
  }

  changeView(view: 'dayGridMonth' | 'timeGridWeek' | 'resourceTimeGridDay') {
    this.currentView = view;
    this.calendarApi?.changeView(view);
    this.updateCalendarTitle();
  }

  next() {
    this.calendarApi?.next();
    this.updateCalendarTitle();
  }

  prev() {
    this.calendarApi?.prev();
    this.updateCalendarTitle();
  }

  getEventsForDate(date: Date): any[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return [
      { id: '1', resourceId: 'c', start: new Date(year, month, day, 8, 0), end: new Date(year, month, day, 9, 0), title: '2325 Lucia Perez\nValoración (2561)', color: appointmentColors.valoracion },
      { id: '2', resourceId: 'c', start: new Date(year, month, day, 9, 0), end: new Date(year, month, day, 10, 0), title: '2392 Sabrina Rios\nDepilacion (1254)', color: appointmentColors.depilacion },
      { id: '3', resourceId: 'c', start: new Date(year, month, day, 11, 0), end: new Date(year, month, day, 12, 0), title: '2389 Rocio Salas\nDepilacion (1254)', color: appointmentColors.valoracion },
      { id: '4', resourceId: 'c', start: new Date(year, month, day, 14, 0), end: new Date(year, month, day, 15, 0), title: '2326 Maria Perez\nValoración (2561)', color: appointmentColors.valoracion },

      { id: '5', resourceId: 'd', start: new Date(year, month, day, 8, 0), end: new Date(year, month, day, 9, 0), title: '2391 Yessica Rios\nDepilacion (1254)', color: appointmentColors.depilacion },
      { id: '6', resourceId: 'd', start: new Date(year, month, day, 13, 0), end: new Date(year, month, day, 14, 0), title: '2391 Yessica Rios\nDepilacion (1254)', color: appointmentColors.relleno },
      
      { id: '7', resourceId: 'e', start: new Date(year, month, day, 9, 0), end: new Date(year, month, day, 11, 0), title: '231 Karla Gonzalez\nRelleno (2865)', color: appointmentColors.relleno },
      { id: '8', resourceId: 'e', start: new Date(year, month, day, 11, 0), end: new Date(year, month, day, 13, 0), title: '2326 Maria Perez\nRelleno (2865)', color: appointmentColors.relleno },
      { id: '9', resourceId: 'e', start: new Date(year, month, day, 13, 0), end: new Date(year, month, day, 14, 0), title: 'COMIDA', color: appointmentColors.comida },

    ];
  }
}
