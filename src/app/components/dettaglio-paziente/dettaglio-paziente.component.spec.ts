import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioPazienteComponent } from './dettaglio-paziente.component';

describe('DettaglioPazienteComponent', () => {
  let component: DettaglioPazienteComponent;
  let fixture: ComponentFixture<DettaglioPazienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioPazienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioPazienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
