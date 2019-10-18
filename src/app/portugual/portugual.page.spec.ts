import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortugualPage } from './portugual.page';

describe('PortugualPage', () => {
  let component: PortugualPage;
  let fixture: ComponentFixture<PortugualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortugualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortugualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
