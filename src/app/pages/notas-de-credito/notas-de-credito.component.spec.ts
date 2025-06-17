import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasDeCreditoComponent } from './notas-de-credito.component';

describe('NotasDeCreditoComponent', () => {
  let component: NotasDeCreditoComponent;
  let fixture: ComponentFixture<NotasDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasDeCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
