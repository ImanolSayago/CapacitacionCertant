import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDiscoComponent } from './detalle-disco.component';

describe('DetalleDiscoComponent', () => {
  let component: DetalleDiscoComponent;
  let fixture: ComponentFixture<DetalleDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDiscoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
