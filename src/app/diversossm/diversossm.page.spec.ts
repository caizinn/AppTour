import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversossmPage } from './diversossm.page';

describe('DiversossmPage', () => {
  let component: DiversossmPage;
  let fixture: ComponentFixture<DiversossmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversossmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversossmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
