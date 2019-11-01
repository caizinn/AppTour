import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Riodejaneiro2Page } from './riodejaneiro2.page';

describe('Riodejaneiro2Page', () => {
  let component: Riodejaneiro2Page;
  let fixture: ComponentFixture<Riodejaneiro2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Riodejaneiro2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Riodejaneiro2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
