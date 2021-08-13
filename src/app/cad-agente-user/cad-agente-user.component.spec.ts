import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAgenteUserComponent } from './cad-agente-user.component';

describe('CadAgenteUserComponent', () => {
  let component: CadAgenteUserComponent;
  let fixture: ComponentFixture<CadAgenteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadAgenteUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadAgenteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
