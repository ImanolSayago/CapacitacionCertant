import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraArtistaComponent } from './muestra-artista.component';

describe('MuestraArtistaComponent', () => {
  let component: MuestraArtistaComponent;
  let fixture: ComponentFixture<MuestraArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuestraArtistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuestraArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
