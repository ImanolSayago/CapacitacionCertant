import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtistaComponent } from './list-artista.component';

describe('ListArtistaComponent', () => {
  let component: ListArtistaComponent;
  let fixture: ComponentFixture<ListArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListArtistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
