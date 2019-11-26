import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversosptPage } from './diversospt.page';

describe('DiversosptPage', () => {
  let component: DiversosptPage;
  let fixture: ComponentFixture<DiversosptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversosptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversosptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
