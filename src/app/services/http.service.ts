import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUrl } from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private API_URL = environment.API_URL;
  
  constructor( 
    private _http: HttpClient
  ) { }

  public getShortUrl(longUrl: string): Observable<IUrl> {
    return this._http.post<IUrl>(`${this.API_URL}/shorten`, {longUrl})
  }
}
