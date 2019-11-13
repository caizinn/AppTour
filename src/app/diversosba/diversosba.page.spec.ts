import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversosbaPage } from './diversosba.page';

describe('DiversosbaPage', () => {
  let component: DiversosbaPage;
  let fixture: ComponentFixture<DiversosbaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversosbaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversosbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
