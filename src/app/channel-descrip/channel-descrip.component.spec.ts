import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDescripComponent } from './channel-descrip.component';

describe('ChannelDescripComponent', () => {
  let component: ChannelDescripComponent;
  let fixture: ComponentFixture<ChannelDescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelDescripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
