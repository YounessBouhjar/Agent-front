import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestituerComponent } from './restituer.component';

describe('RestituerComponent', () => {
  let component: RestituerComponent;
  let fixture: ComponentFixture<RestituerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestituerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestituerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
