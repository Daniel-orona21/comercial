import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesYpermisosComponent } from './roles-ypermisos.component';

describe('RolesYpermisosComponent', () => {
  let component: RolesYpermisosComponent;
  let fixture: ComponentFixture<RolesYpermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesYpermisosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesYpermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
