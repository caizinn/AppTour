import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplosbaPage } from './templosba.page';

describe('TemplosbaPage', () => {
  let component: TemplosbaPage;
  let fixture: ComponentFixture<TemplosbaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplosbaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplosbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
