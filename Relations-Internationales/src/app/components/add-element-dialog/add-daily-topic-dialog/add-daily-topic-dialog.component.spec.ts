import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyTopicDialogComponent } from './add-daily-topic-dialog.component';

describe('AddDailyTopicDialogComponent', () => {
  let component: AddDailyTopicDialogComponent;
  let fixture: ComponentFixture<AddDailyTopicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyTopicDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyTopicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
