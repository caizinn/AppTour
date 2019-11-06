import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplossdPage } from './templossd.page';

describe('TemplossdPage', () => {
  let component: TemplossdPage;
  let fixture: ComponentFixture<TemplossdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplossdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplossdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
