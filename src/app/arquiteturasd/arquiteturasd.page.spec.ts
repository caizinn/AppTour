import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquiteturasdPage } from './arquiteturasd.page';

describe('ArquiteturasdPage', () => {
  let component: ArquiteturasdPage;
  let fixture: ComponentFixture<ArquiteturasdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquiteturasdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquiteturasdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
