import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecasmPage } from './bibliotecasm.page';

describe('BibliotecasmPage', () => {
  let component: BibliotecasmPage;
  let fixture: ComponentFixture<BibliotecasmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecasmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecasmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
