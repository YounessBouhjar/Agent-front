import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateurFormComponent } from './operateur-form.component';

describe('OperatorFormComponent', () => {
  let component: OperateurFormComponent;
  let fixture: ComponentFixture<OperateurFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateurFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
