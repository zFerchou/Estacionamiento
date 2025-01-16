import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url:string = "https://www.googleapis.com/youtube/v3/search"
  private api_key:string = "AIzaSyA9YDFeqIFIwQXB4XUXI9yMMNTN8vJX_u8"
  private canal: string = "UC10NDlA3YNbsbS8HI6G2Asw"
  constructor(private _http:HttpClient) { }

  obtenerVideos(){
    const parametros = new HttpParams().set('part', 'snippet').set('channelId', this.canal).set('maxResult', '10').set('key', this.api_key)
    let vinculo = `${this.url}`;
    return this._http.get(vinculo, {params:parametros}).pipe(map(resp => resp));
  }
}



