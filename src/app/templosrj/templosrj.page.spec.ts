import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplosrjPage } from './templosrj.page';

describe('TemplosrjPage', () => {
  let component: TemplosrjPage;
  let fixture: ComponentFixture<TemplosrjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplosrjPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplosrjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
