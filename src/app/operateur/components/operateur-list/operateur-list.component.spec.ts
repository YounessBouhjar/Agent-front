import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateurListComponent } from './operateur-list.component';

describe('OperatorListComponent', () => {
  let component: OperateurListComponent;
  let fixture: ComponentFixture<OperateurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
