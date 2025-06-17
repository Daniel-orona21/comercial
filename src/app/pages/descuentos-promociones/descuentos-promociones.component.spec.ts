import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosPromocionesComponent } from './descuentos-promociones.component';

describe('DescuentosPromocionesComponent', () => {
  let component: DescuentosPromocionesComponent;
  let fixture: ComponentFixture<DescuentosPromocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescuentosPromocionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescuentosPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
