import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Riodejaneiro1Page } from './riodejaneiro1.page';

describe('Riodejaneiro1Page', () => {
  let component: Riodejaneiro1Page;
  let fixture: ComponentFixture<Riodejaneiro1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Riodejaneiro1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Riodejaneiro1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
