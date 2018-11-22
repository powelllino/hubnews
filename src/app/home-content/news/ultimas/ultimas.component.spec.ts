import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasComponent } from './ultimas.component';

describe('UltimasComponent', () => {
  let component: UltimasComponent;
  let fixture: ComponentFixture<UltimasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
