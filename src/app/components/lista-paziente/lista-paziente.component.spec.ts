import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPazienteComponent } from './lista-paziente.component';

describe('ListaPazienteComponent', () => {
  let component: ListaPazienteComponent;
  let fixture: ComponentFixture<ListaPazienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPazienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPazienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
