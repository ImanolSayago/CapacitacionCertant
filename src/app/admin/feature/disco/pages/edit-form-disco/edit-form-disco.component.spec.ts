import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormDiscoComponent } from './edit-form-disco.component';

describe('EditFormDiscoComponent', () => {
  let component: EditFormDiscoComponent;
  let fixture: ComponentFixture<EditFormDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFormDiscoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFormDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
