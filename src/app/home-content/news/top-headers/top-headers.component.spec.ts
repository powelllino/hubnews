import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadersComponent } from './top-headers.component';

describe('TopHeadersComponent', () => {
  let component: TopHeadersComponent;
  let fixture: ComponentFixture<TopHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
