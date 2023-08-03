import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllthemespageComponent } from './allthemespage.component';

describe('AllthemespageComponent', () => {
  let component: AllthemespageComponent;
  let fixture: ComponentFixture<AllthemespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllthemespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllthemespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
