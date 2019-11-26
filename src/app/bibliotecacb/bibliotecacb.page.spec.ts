import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecacbPage } from './bibliotecacb.page';

describe('BibliotecacbPage', () => {
  let component: BibliotecacbPage;
  let fixture: ComponentFixture<BibliotecacbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecacbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecacbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
