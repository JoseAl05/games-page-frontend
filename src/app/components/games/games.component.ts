import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { GameProps } from 'src/app/interfaces/game.interface';
import { GamesService } from 'src/app/services/games.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent {
  faArrowRight = faArrowRight;
  query: string = '';
  listGames: GameProps;
  page: number = 1;
  page_size: number = 10;
  current_page: string = '1';
  search = '';
  genre = '';
  platform = '';
  isLoading: boolean = true;
  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.current_page = params['page'];
      this.search = params['search'] ? params['search'] : undefined;
      this.genre = params['genre'] ? params['genre'] : undefined;
      this.platform = params['platform'] ? params['platform'] : undefined;
      this.getGames();
    });
  }

  getGames() {
    const games = this.gamesService
      .getGames(
        this.page_size,
        this.current_page,
        this.search,
        this.genre,
        this.platform
      )
      .subscribe({
        next: (games) => {
          this.listGames = games;
          this.isLoading = false;
        },
        error: (e) => console.error(e),
        complete: () => {
          console.log('Completed');
          this.isLoading = false;
        },
      });
    return games;
  }
}
