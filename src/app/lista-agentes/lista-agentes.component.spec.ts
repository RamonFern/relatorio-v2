import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAgentesComponent } from './lista-agentes.component';

describe('ListaAgentesComponent', () => {
  let component: ListaAgentesComponent;
  let fixture: ComponentFixture<ListaAgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAgentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
