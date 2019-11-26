import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquiteturacbPage } from './arquiteturacb.page';

describe('ArquiteturacbPage', () => {
  let component: ArquiteturacbPage;
  let fixture: ComponentFixture<ArquiteturacbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquiteturacbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquiteturacbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
