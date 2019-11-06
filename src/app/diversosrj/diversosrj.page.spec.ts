import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversosrjPage } from './diversosrj.page';

describe('DiversosrjPage', () => {
  let component: DiversosrjPage;
  let fixture: ComponentFixture<DiversosrjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversosrjPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversosrjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
