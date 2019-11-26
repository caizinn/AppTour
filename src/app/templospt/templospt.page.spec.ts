import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplosptPage } from './templospt.page';

describe('TemplosptPage', () => {
  let component: TemplosptPage;
  let fixture: ComponentFixture<TemplosptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplosptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplosptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
