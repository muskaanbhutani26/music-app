import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { MatDividerModule, MatCardModule, MatTableModule, MatFormFieldModule } from '@angular/material';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { TrackListTableComponent } from '../track-list-table/track-list-table.component';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent, TrackListTableComponent ],
      imports : [  CommonModule, MatDividerModule, MatCardModule, MatTableModule, MatFormFieldModule],
      providers : [ HttpClientModule, HttpClient, HttpHandler, {provide: APP_BASE_HREF, useValue: '/'} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
