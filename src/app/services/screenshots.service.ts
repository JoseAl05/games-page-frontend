import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ScreenshotProps } from '../interfaces/screenshot.interface';

@Injectable({
  providedIn: 'root'
})
export class ScreenshotsService {

  constructor(private http: HttpClient) {}
  private apiURL = 'http://localhost:3000';

  getScreenshots(game_id:string):Observable<ScreenshotProps>{
    return this.http.get<ScreenshotProps>(`${this.apiURL}/screenshot/${game_id}`)
  }
}
