import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expediente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExpedienteComponent {
  activeTab: string = 'registro';

  // Data for Historia Clínica
  historiaClinicaItems: any[] = [
    {
      sucursal: 'CDMX',
      direccion: 'PRIVADA UNION 10, COL. AGRICOLA PANTITLAN, IZTACALCO, 08100.',
      pEncargado: 'JOEL RUIZ',
      fecha: '05/06/2025',
      documentoAdjunto: 'HC_CDMX_AHERRERA.pdf<br>HOJA_PRESUPUESTO.pdf<br>CONSENTIMIENTO.pdf'
    }
  ];

  newHistoriaItem: any = {
    sucursal: 'CDMX',
    direccion: 'PRIVADA UNION 10, COL. AGRICOLA PANTITLAN, IZTACALCO, 08100.',
    pEncargado: 'JOEL RUIZ',
    fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    tipoDocumento: 'Seleccionar',
    documentoAdjunto: ''
  };

  documentos: File[] = [];

  // Data for Tratamientos
  tratamientosItems: any[] = [
    {
      id: 21,
      estatus: 'Pagado',
      sucursal: 'CDMX',
      direccion: 'PRIVADA UNION 10, COL. AGRICOLA PANTITLAN, IZTACALCO, 08100, CIUDAD DE MEXICO, CDMX, MEXICO.',
      fecha: '22/05/2025',
      pEncargado: 'JOEL RUIZ',
      cliente: 'IRMA BEJAR',
      tratamiento: 'FACIAL',
      documentosAdjuntos: 'PROTOCOLO.pdf<br>HOJA DE SEGURIMIENTO.pdf',
      selected: false
    },
    {
      id: 24,
      estatus: 'Activo',
      sucursal: 'CDMX',
      direccion: 'PRIVADA UNION 10, COL. AGRICOLA PANTITLAN, IZTACALCO, 08100, CIUDAD DE MEXICO, CDMX, MEXICO.',
      fecha: '05/06/2025',
      pEncargado: 'JOEL RUIZ',
      cliente: 'IRMA BEJAR',
      tratamiento: 'FACIAL',
      documentosAdjuntos: 'PROTOCOLO.pdf<br>HOJA DE SEGURIMIENTO.pdf',
      selected: false
    }
  ];
  newTratamientoItem: any = {
    id: null,
    estatus: 'Activo',
    sucursal: 'CDMX',
    direccion: 'PRIVADA UNION 10, COL. AGRICOLA PANTITLAN, IZTACALCO, 08100, CIUDAD DE MEXICO, CDMX, MEXICO.',
    fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    pEncargado: 'JOEL RUIZ',
    cliente: 'IRMA BEJAR',
    tratamiento: 'FACIAL',
    documentosAdjuntos: '',
    selected: false
  };
  tratamientoDocumentos: File[] = [];

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.documentos.push(files[i]);
      }
      this.updateDocumentoAdjunto();
    }
  }

  removeDocumento(index: number): void {
    this.documentos.splice(index, 1);
    this.updateDocumentoAdjunto();
  }

  updateDocumentoAdjunto(): void {
    this.newHistoriaItem.documentoAdjunto = this.documentos.map(f => f.name).join('<br>');
  }

  addHistoriaItem(): void {
    if (this.newHistoriaItem.documentoAdjunto) {
      this.historiaClinicaItems.push({ ...this.newHistoriaItem });
      this.documentos = [];
      this.newHistoriaItem.documentoAdjunto = '';
      this.newHistoriaItem.tipoDocumento = 'Seleccionar';
    }
  }

  onTratamientoFileSelected(event: any): void {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.tratamientoDocumentos.push(files[i]);
      }
      this.updateTratamientoDocumentoAdjunto();
    }
  }

  removeTratamientoDocumento(index: number): void {
    this.tratamientoDocumentos.splice(index, 1);
    this.updateTratamientoDocumentoAdjunto();
  }

  updateTratamientoDocumentoAdjunto(): void {
    this.newTratamientoItem.documentosAdjuntos = this.tratamientoDocumentos.map(f => f.name).join('<br>');
  }

  addTratamientoItem(): void {
    if (this.newTratamientoItem.tratamiento) {
      this.newTratamientoItem.id = this.tratamientosItems.length + 26;
      this.tratamientosItems.push({ ...this.newTratamientoItem });
      
      this.tratamientoDocumentos = [];
      this.newTratamientoItem.documentosAdjuntos = '';
      this.newTratamientoItem.descripcion = '';
    }
  }
}
