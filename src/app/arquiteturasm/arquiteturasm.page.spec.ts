import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquiteturasmPage } from './arquiteturasm.page';

describe('ArquiteturasmPage', () => {
  let component: ArquiteturasmPage;
  let fixture: ComponentFixture<ArquiteturasmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquiteturasmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquiteturasmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
