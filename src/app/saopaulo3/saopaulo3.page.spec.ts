import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saopaulo3Page } from './saopaulo3.page';

describe('Saopaulo3Page', () => {
  let component: Saopaulo3Page;
  let fixture: ComponentFixture<Saopaulo3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saopaulo3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saopaulo3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
