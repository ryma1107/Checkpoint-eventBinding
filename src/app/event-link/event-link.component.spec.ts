import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLinkComponent } from './event-link.component';

describe('EventLinkComponent', () => {
  let component: EventLinkComponent;
  let fixture: ComponentFixture<EventLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
