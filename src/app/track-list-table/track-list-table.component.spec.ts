import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListTableComponent } from './track-list-table.component';
import { MatTableModule, MatCardModule } from '@angular/material';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('TrackListTableComponent', () => {
  let component: TrackListTableComponent;
  let fixture: ComponentFixture<TrackListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackListTableComponent ],
      imports : [  CommonModule, MatTableModule, MatCardModule],
      providers : [ HttpClientModule, HttpClient, HttpHandler, {provide: APP_BASE_HREF, useValue: '/'} ],
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
