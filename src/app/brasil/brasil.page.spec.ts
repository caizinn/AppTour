import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasilPage } from './brasil.page';

describe('BrasilPage', () => {
  let component: BrasilPage;
  let fixture: ComponentFixture<BrasilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
