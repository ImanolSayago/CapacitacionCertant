import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraCancionComponent } from './muestra-cancion.component';

describe('MuestraCancionComponent', () => {
  let component: MuestraCancionComponent;
  let fixture: ComponentFixture<MuestraCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuestraCancionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuestraCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
