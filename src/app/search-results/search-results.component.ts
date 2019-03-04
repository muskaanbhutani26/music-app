import { Component, OnInit, Input, ChangeDetectorRef, DoCheck, Output, EventEmitter } from '@angular/core';
import { DreezerMusicService } from '../dreezer-music.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() albumList;
  @Input() selectArtist;

  @Output() albumChange = new EventEmitter();

  constructor(private dreezerMusicService: DreezerMusicService) { }

  ngOnInit() {
  }

  getAlbumTrackList(album){
    this.albumChanged(album);
  }


  albumChanged(album) { // You can give any function name
    this.albumChange.emit(album);
  }

}
