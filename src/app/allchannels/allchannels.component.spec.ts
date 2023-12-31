import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchannelsComponent } from './allchannels.component';

describe('AllchannelsComponent', () => {
  let component: AllchannelsComponent;
  let fixture: ComponentFixture<AllchannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllchannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllchannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
