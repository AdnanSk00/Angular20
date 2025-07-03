import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bolt } from './bolt';

describe('Bolt', () => {
  let component: Bolt;
  let fixture: ComponentFixture<Bolt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bolt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bolt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
