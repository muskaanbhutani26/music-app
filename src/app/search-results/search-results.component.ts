import { Component, OnInit, Input } from '@angular/core';
import { DreezerMusicService } from '../dreezer-music.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() albumList;
  @Input() selectArtist;
  albumcover;
  trackList = [];
  albumname;
  albumId = null;

  constructor(private dreezerMusicService: DreezerMusicService) { }

  ngOnInit() {
    console.log("frm component");
    console.log(this.albumList);
  }

  getAlbumTrackList(album){
    this.albumcover = album.cover_medium;
    this.albumname = album.title;
    this.albumId =  album.id;
    this.dreezerMusicService.getTrackList(album.id).subscribe((response: any) => {
      console.log("tracklist");
      console.log(response);
      this.trackList= response.data;
    }, (error) => {
      // console.log(error);
    });
  }

}
