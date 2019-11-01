import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Riodejaneiro4Page } from './riodejaneiro4.page';

describe('Riodejaneiro4Page', () => {
  let component: Riodejaneiro4Page;
  let fixture: ComponentFixture<Riodejaneiro4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Riodejaneiro4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Riodejaneiro4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
