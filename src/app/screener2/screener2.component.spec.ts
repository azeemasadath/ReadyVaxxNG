import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screener2Component } from './screeener2.component';

describe('Screener2Component', () => {
  let component: Screener2Component;
  let fixture: ComponentFixture<Screener2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screener2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screener2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
