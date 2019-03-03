import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Content-Type': 'application/json'
});
const options = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class DreezerMusicService {

  constructor(private httpClient: HttpClient) { }

  searchArtist(data){
    const originatorListUrl = 'api/search/artist?q=' + data;
    return this.httpClient.get(originatorListUrl, options);
  }
  searchAlbum(artistName){
    const originatorListUrl = 'api/search/album?q=' + artistName;
    return this.httpClient.get(originatorListUrl, options);
  }
  getTrackList(albumId){
    const trackListUrl = 'api/album/'+ albumId + '/tracks';
    return this.httpClient.get(trackListUrl, options);
  }
}
