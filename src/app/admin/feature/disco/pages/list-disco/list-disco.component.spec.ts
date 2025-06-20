import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiscoComponent } from './list-disco.component';

describe('ListDiscoComponent', () => {
  let component: ListDiscoComponent;
  let fixture: ComponentFixture<ListDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDiscoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
