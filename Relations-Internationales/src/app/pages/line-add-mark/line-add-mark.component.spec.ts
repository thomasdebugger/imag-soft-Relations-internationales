import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAddMarkComponent } from './line-add-mark.component';

describe('LineAddMarkComponent', () => {
  let component: LineAddMarkComponent;
  let fixture: ComponentFixture<LineAddMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineAddMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineAddMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
