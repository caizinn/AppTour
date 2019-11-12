import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplosspPage } from './templossp.page';

describe('TemplosspPage', () => {
  let component: TemplosspPage;
  let fixture: ComponentFixture<TemplosspPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplosspPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplosspPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
