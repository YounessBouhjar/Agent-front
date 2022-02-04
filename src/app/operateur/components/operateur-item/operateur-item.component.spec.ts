import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateurItemComponent } from './operateur-item.component';

describe('OperatorItemComponent', () => {
  let component: OperateurItemComponent;
  let fixture: ComponentFixture<OperateurItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateurItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateurItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
