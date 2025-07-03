import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAPI } from './resource-api';

describe('ResourceAPI', () => {
  let component: ResourceAPI;
  let fixture: ComponentFixture<ResourceAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceAPI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceAPI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
