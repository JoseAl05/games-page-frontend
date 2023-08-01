import { Injectable } from '@angular/core';
import { GameProps } from '../interfaces/game.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GenreProps } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) {}
  private apiURL = 'http://localhost:3000';

  getGenres():Observable<GenreProps> {
    return this.http.get<GenreProps>(`${this.apiURL}/genre`);
  }
}
