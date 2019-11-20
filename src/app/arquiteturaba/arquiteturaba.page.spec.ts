import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquiteturabaPage } from './arquiteturaba.page';

describe('ArquiteturabaPage', () => {
  let component: ArquiteturabaPage;
  let fixture: ComponentFixture<ArquiteturabaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquiteturabaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquiteturabaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
