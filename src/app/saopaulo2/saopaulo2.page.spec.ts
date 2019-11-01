import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saopaulo2Page } from './saopaulo2.page';

describe('Saopaulo2Page', () => {
  let component: Saopaulo2Page;
  let fixture: ComponentFixture<Saopaulo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saopaulo2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saopaulo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
