import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saopaulo4Page } from './saopaulo4.page';

describe('Saopaulo4Page', () => {
  let component: Saopaulo4Page;
  let fixture: ComponentFixture<Saopaulo4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saopaulo4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saopaulo4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
