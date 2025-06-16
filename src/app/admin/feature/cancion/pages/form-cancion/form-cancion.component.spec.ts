import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCancionComponent } from './form-cancion.component';

describe('FormCancionComponent', () => {
  let component: FormCancionComponent;
  let fixture: ComponentFixture<FormCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCancionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
