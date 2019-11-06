import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortugalPage } from './portugal.page';

describe('PortugalPage', () => {
  let component: PortugalPage;
  let fixture: ComponentFixture<PortugalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortugalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortugalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
