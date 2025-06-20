import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDiscoComponent } from './vista-disco.component';

describe('VistaDiscoComponent', () => {
  let component: VistaDiscoComponent;
  let fixture: ComponentFixture<VistaDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaDiscoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
