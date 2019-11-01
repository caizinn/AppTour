import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Riodejaneiro3Page } from './riodejaneiro3.page';

describe('Riodejaneiro3Page', () => {
  let component: Riodejaneiro3Page;
  let fixture: ComponentFixture<Riodejaneiro3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Riodejaneiro3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Riodejaneiro3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
