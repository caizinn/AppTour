import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquiteturaptPage } from './arquiteturapt.page';

describe('ArquiteturaptPage', () => {
  let component: ArquiteturaptPage;
  let fixture: ComponentFixture<ArquiteturaptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquiteturaptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquiteturaptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
