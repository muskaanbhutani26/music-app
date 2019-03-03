import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListTableComponent } from './track-list-table.component';
import { MatTableModule } from '@angular/material';
import { CommonModule } from '@angular/common';

describe('TrackListTableComponent', () => {
  let component: TrackListTableComponent;
  let fixture: ComponentFixture<TrackListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackListTableComponent ],
      imports : [  CommonModule, MatTableModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
