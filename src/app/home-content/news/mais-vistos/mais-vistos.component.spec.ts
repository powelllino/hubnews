import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisVistosComponent } from './mais-vistos.component';

describe('MaisVistosComponent', () => {
  let component: MaisVistosComponent;
  let fixture: ComponentFixture<MaisVistosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisVistosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisVistosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
