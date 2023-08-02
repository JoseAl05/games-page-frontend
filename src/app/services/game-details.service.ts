import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GameDetailsProps } from '../interfaces/game-details.interface';


@Injectable({
  providedIn: 'root'
})
export class GameDetailsService {

  constructor(private http: HttpClient) {}
  private apiURL = 'http://localhost:3000';

  getGameDetails(game_id:string):Observable<GameDetailsProps>{
    return this.http.get<GameDetailsProps>(`${this.apiURL}/gameDetails/${game_id}`);
  }
}
