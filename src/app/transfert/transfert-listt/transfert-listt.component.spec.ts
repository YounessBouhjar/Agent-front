import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertListtComponent } from './transfert-listt.component';

describe('TransfertListtComponent', () => {
  let component: TransfertListtComponent;
  let fixture: ComponentFixture<TransfertListtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfertListtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertListtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
