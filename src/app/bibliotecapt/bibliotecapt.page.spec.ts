import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaptPage } from './bibliotecapt.page';

describe('BibliotecaptPage', () => {
  let component: BibliotecaptPage;
  let fixture: ComponentFixture<BibliotecaptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecaptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
