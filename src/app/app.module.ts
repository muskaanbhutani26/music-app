import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatCardModule, MatTableModule, MatAutocompleteModule, MatProgressSpinnerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TrackListTableComponent } from './track-list-table/track-list-table.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    TrackListTableComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatCardModule, MatTableModule,  HttpClientModule]
})
export class AppModule { }
