import { Component, OnInit, Input, ChangeDetectorRef, DoCheck } from '@angular/core';


@Component({
  selector: 'app-track-list-table',
  templateUrl: './track-list-table.component.html',
  styleUrls: ['./track-list-table.component.scss']
})
export class TrackListTableComponent implements OnInit,  DoCheck{

  @Input() tracklist;
  @Input() albumId;

  displayedColumns: string[] = ['position', 'Title', 'Artist', 'Time', 'Released'];
  dataSource;
  restoreAlbumId = null;

  constructor(private cd: ChangeDetectorRef) { 
  }

  ngOnInit() {
    this.dataSource = this.tracklist;
    this.restoreAlbumId = this.albumId;
  }

  ngDoCheck() {
    if (this.restoreAlbumId !== this.albumId) {
        this.dataSource = this.tracklist;
        this.cd.markForCheck();
    }
  }

}
