import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsVideosPageComponent } from './tags-videos-page.component';

describe('TagsVideosPageComponent', () => {
  let component: TagsVideosPageComponent;
  let fixture: ComponentFixture<TagsVideosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsVideosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsVideosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
