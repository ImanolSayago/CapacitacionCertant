import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoInformacionComponent } from './disco-informacion.component';

describe('DiscoInformacionComponent', () => {
  let component: DiscoInformacionComponent;
  let fixture: ComponentFixture<DiscoInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
