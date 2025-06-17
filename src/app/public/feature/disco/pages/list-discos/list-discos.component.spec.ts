import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiscosComponent } from './list-discos.component';

describe('ListDiscosComponent', () => {
  let component: ListDiscosComponent;
  let fixture: ComponentFixture<ListDiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDiscosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
