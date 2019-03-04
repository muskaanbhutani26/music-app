import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, tap, switchMap, finalize, distinctUntilChanged } from 'rxjs/operators';
import { DreezerMusicService } from '../dreezer-music.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  filteredArtists;
  filteredAlbums;
  searchForm: FormGroup;
  isLoading = false;
  selectedArtist;
  album = null;
  trackList = [];
  constructor(private fb: FormBuilder, private dreezerMusicService: DreezerMusicService) { }

  ngOnInit() {

    this.searchForm = this.fb.group({
      searchInput: new FormControl('')
    });

    this.searchForm.get('searchInput').valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((data) => {
        this.isLoading = true;
        this.album = null;
        this.searchArtists(data);
        if(data == ''){
          this.selectedArtist= null;
        }
    }, (error) => {
      // console.log(error);
    });
    

  }

  searchArtists(data){
    this.dreezerMusicService.searchArtist(data).subscribe((response: any) => {
      this.isLoading = false;
      this.filteredArtists = response.data;
    }, (error) => {
      // console.log(error);
    });
  }

  displayFn(artist) {
    if (artist) { return artist ? artist.name : undefined; }
  }

  loadAlbums(artistName){
    this.dreezerMusicService.searchAlbum(artistName).subscribe((response: any) => {
      this.selectedArtist = artistName;
      this.filteredAlbums = response.data;
    }, (error) => {
      // console.log(error);
    });
  }

  getAlbumID(album){
    this.album = album;
    this.getTrackListByAlbum();
  }

  getTrackListByAlbum(){
    this.dreezerMusicService.getTrackList(this.album.id).subscribe((response: any) => {
      this.trackList= response.data;
    }, (error) => {
      // console.log(error);
    });
  }

}
