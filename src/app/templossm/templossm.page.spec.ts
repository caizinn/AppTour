import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplossmPage } from './templossm.page';

describe('TemplossmPage', () => {
  let component: TemplossmPage;
  let fixture: ComponentFixture<TemplossmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplossmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplossmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
