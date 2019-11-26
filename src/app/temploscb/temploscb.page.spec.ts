import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemploscbPage } from './temploscb.page';

describe('TemploscbPage', () => {
  let component: TemploscbPage;
  let fixture: ComponentFixture<TemploscbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemploscbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemploscbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
