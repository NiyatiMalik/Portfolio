import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInterestsComponent } from './other-interests.component';

describe('OtherInterestsComponent', () => {
  let component: OtherInterestsComponent;
  let fixture: ComponentFixture<OtherInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherInterestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
