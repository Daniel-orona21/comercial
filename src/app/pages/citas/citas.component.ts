import { Component, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { CommonModule } from '@angular/common';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})
export class CitasComponent implements AfterViewInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  currentView: 'dayGridMonth' | 'timeGridWeek' | 'resourceTimelineDay' = 'dayGridMonth';
  calendarTitle: string = '';

  calendarOptions: CalendarOptions = {
    plugins: [
      resourceTimelinePlugin,
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin
    ],
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
      const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
      return days[args.date.getDay()];
    },
    
    views: {
      resourceTimelineDay: {
        slotLabelFormat: {
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short'
        }
      }
    },

    resourceAreaHeaderContent: 'Personal',
    resources: [
      { id: 'a', title: 'Miriam López' },
      { id: 'b', title: 'Mary Sanchez' },
      { id: 'c', title: 'Luisa López' },
      { id: 'd', title: 'Irma Bejar' },
      { id: 'e', title: 'Brenda Rios' },
      { id: 'f', title: 'Isabel Carlos' },
      { id: 'g', title: 'Araceli Diaz' }
    ],
    events: this.getEventsForDate(new Date()),
  };

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

  changeView(view: 'dayGridMonth' | 'timeGridWeek' | 'resourceTimelineDay') {
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
      { id: '1', resourceId: 'c', start: new Date(year, month, day, 8, 0), end: new Date(year, month, day, 9, 0), title: '2325 Lucia Perez\nValoración (2561)', color: '#FFC0CB' },
      { id: '2', resourceId: 'c', start: new Date(year, month, day, 9, 0), end: new Date(year, month, day, 10, 0), title: '2392 Sabrina Rios\nDepilacion (1254)', color: '#00FFFF' },
      { id: '3', resourceId: 'c', start: new Date(year, month, day, 11, 0), end: new Date(year, month, day, 12, 0), title: '2389 Rocio Salas\nDepilacion (1254)', color: '#FFC0CB' },
      { id: '4', resourceId: 'c', start: new Date(year, month, day, 14, 0), end: new Date(year, month, day, 15, 0), title: '2326 Maria Perez\nValoración (2561)', color: '#FFC0CB' },

      { id: '5', resourceId: 'd', start: new Date(year, month, day, 8, 0), end: new Date(year, month, day, 9, 0), title: '2391 Yessica Rios\nDepilacion (1254)', color: '#00FFFF' },
      { id: '6', resourceId: 'd', start: new Date(year, month, day, 13, 0), end: new Date(year, month, day, 14, 0), title: '2391 Yessica Rios\nDepilacion (1254)', color: '#ADFF2F' },
      
      { id: '7', resourceId: 'e', start: new Date(year, month, day, 9, 0), end: new Date(year, month, day, 11, 0), title: '231 Karla Gonzalez\nRelleno (2865)', color: '#ADFF2F' },
      { id: '8', resourceId: 'e', start: new Date(year, month, day, 11, 0), end: new Date(year, month, day, 13, 0), title: '2326 Maria Perez\nRelleno (2865)', color: '#ADFF2F' },
      { id: '9', resourceId: 'e', start: new Date(year, month, day, 13, 0), end: new Date(year, month, day, 14, 0), title: 'COMIDA', color: '#D3D3D3' },

    ];
  }
}
