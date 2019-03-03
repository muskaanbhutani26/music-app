import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatAutocompleteModule, MatFormFieldModule, MatProgressSpinnerModule, MatCardModule, MatDividerModule, MatTableModule, MatInputModule } from '@angular/material';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { TrackListTableComponent } from '../track-list-table/track-list-table.component';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxComponent, SearchResultsComponent, TrackListTableComponent ],
      imports : [  BrowserAnimationsModule, CommonModule, ReactiveFormsModule, MatIconModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatDividerModule, MatTableModule],
      providers : [ HttpClientModule, HttpClient, HttpHandler, {provide: APP_BASE_HREF, useValue: '/'} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
