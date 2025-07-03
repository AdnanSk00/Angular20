import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCycleEvent } from './lcycle-event';

describe('LCycleEvent', () => {
  let component: LCycleEvent;
  let fixture: ComponentFixture<LCycleEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LCycleEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LCycleEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
