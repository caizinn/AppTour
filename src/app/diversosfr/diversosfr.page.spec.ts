import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversosfrPage } from './diversosfr.page';

describe('DiversosfrPage', () => {
  let component: DiversosfrPage;
  let fixture: ComponentFixture<DiversosfrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversosfrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversosfrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
