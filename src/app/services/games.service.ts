import { Injectable } from '@angular/core';
import { GameProps } from '../interfaces/game.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}
  private apiURL = 'http://localhost:3000';

  getGames(
    page_size: number,
    page: string,
    search?: string,
    genre?: string,
    platform?: string
  ): Observable<GameProps> {
    const params = {
      page_size,
      page,
      search,
      genre,
      platform,
    };
    let httpParams = new HttpParams()
      .set('page', page)
      .set('page_size', page_size)
      .set('search', search ? search : '')
      .set('genre', genre ? genre : '')
      .set('platform', platform ? platform : '');
    return this.http.get<GameProps>(`${this.apiURL}/games`, {
      params: httpParams,
    });
  }
}
