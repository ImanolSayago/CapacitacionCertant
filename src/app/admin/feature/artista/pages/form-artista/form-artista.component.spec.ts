import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArtistaComponent } from './form-artista.component';

describe('FormArtistaComponent', () => {
  let component: FormArtistaComponent;
  let fixture: ComponentFixture<FormArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArtistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
