import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPollDialogComponent } from './add-poll-dialog.component';

describe('AddPollDialogComponent', () => {
  let component: AddPollDialogComponent;
  let fixture: ComponentFixture<AddPollDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPollDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPollDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
