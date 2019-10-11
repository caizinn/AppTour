import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saopaulo1Page } from './saopaulo1.page';

describe('Saopaulo1Page', () => {
  let component: Saopaulo1Page;
  let fixture: ComponentFixture<Saopaulo1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saopaulo1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saopaulo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
