import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatAutocompleteModule, MatFormFieldModule, MatProgressSpinnerModule } from '@angular/material';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        SearchBoxComponent
      ],
      imports : [  CommonModule, ReactiveFormsModule, MatIconModule, MatAutocompleteModule, MatFormFieldModule, MatProgressSpinnerModule],
      providers : [ HttpClientModule, HttpClient, HttpHandler, {provide: APP_BASE_HREF, useValue: '/'} ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
