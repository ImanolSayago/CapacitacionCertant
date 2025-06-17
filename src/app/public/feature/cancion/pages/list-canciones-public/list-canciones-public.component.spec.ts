import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCancionesPublicComponent } from './list-canciones-public.component';

describe('ListCancionesPublicComponent', () => {
  let component: ListCancionesPublicComponent;
  let fixture: ComponentFixture<ListCancionesPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCancionesPublicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCancionesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
