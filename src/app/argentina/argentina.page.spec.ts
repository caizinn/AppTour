import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgentinaPage } from './argentina.page';

describe('ArgentinaPage', () => {
  let component: ArgentinaPage;
  let fixture: ComponentFixture<ArgentinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgentinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgentinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
