import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversoscbPage } from './diversoscb.page';

describe('DiversoscbPage', () => {
  let component: DiversoscbPage;
  let fixture: ComponentFixture<DiversoscbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversoscbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversoscbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
