import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLoadLogoComponent } from './up-load-logo.component';

describe('UpLoadLogoComponent', () => {
  let component: UpLoadLogoComponent;
  let fixture: ComponentFixture<UpLoadLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpLoadLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpLoadLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
