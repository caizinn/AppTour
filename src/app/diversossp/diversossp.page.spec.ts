import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversosspPage } from './diversossp.page';

describe('DiversosspPage', () => {
  let component: DiversosspPage;
  let fixture: ComponentFixture<DiversosspPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversosspPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversosspPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
