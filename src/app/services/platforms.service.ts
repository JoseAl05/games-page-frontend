import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PlatformProps } from '../interfaces/platforms.interface';

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {

  constructor(private http: HttpClient) {}
  private apiURL = 'http://localhost:3000';

  getPlatforms():Observable<PlatformProps> {
    return this.http.get<PlatformProps>(`${this.apiURL}/platform`);
  }
}
