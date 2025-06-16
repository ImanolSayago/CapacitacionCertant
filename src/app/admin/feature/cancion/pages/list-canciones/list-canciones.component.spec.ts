import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCancionesComponent } from './list-canciones.component';

describe('ListCancionesComponent', () => {
  let component: ListCancionesComponent;
  let fixture: ComponentFixture<ListCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCancionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
