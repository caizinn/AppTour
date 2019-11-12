import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversossdPage } from './diversossd.page';

describe('DiversossdPage', () => {
  let component: DiversossdPage;
  let fixture: ComponentFixture<DiversossdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversossdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversossdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
