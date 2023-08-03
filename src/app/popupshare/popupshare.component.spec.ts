import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupshareComponent } from './popupshare.component';

describe('PopupshareComponent', () => {
  let component: PopupshareComponent;
  let fixture: ComponentFixture<PopupshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupshareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
