import { Component, OnInit, Input, ChangeDetectorRef, DoCheck } from '@angular/core';
import { DreezerMusicService } from '../dreezer-music.service';

@Component({
  selector: 'app-track-list-table',
  templateUrl: './track-list-table.component.html',
  styleUrls: ['./track-list-table.component.scss']
})
export class TrackListTableComponent implements OnInit, DoCheck{

  @Input() selectedAlbum;
  @Input() tracks;

  displayedColumns: string[] = ['position', 'Title', 'Artist', 'Time', 'Released'];
  dataSource;
  restoreAlbumId = null;

  constructor(private dreezerMusicService: DreezerMusicService, private cd: ChangeDetectorRef) { 
  }

  ngOnInit() {
    this.dataSource = this.tracks;
  }

 ngDoCheck() {
    if (this.restoreAlbumId !== this.selectedAlbum.id) {
        this.dataSource = this.tracks;
        this.cd.markForCheck();
    } 
 }

}
