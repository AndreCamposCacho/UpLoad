import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllthemesComponent } from './allthemes.component';

describe('AllthemesComponent', () => {
  let component: AllthemesComponent;
  let fixture: ComponentFixture<AllthemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllthemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllthemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
