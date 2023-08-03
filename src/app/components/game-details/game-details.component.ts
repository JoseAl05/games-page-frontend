import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetailsProps } from 'src/app/interfaces/game-details.interface';
import { GameDetailsService } from 'src/app/services/game-details.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  game_id: string;
  game_slug: string;
  game_details: GameDetailsProps;
  isLoading: boolean = true;
  metaScore: number;

  faComment = faComment;

  constructor(
    private route: ActivatedRoute,
    private gameDetailsService: GameDetailsService,
    private library: FaIconLibrary,
  ) {
    //ERROR: Type '"threads"' is not assignable to type 'IconName'. This is why I added @ts-ignore
    //@ts-ignore
    library.addIcons(faRedditAlien);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.game_id = params['game_id'];
      this.game_slug = params['game_slug'];
    });
    this.getGameDetails();
  }

  getGameDetails() {
    const game_details = this.gameDetailsService
      .getGameDetails(this.game_id)
      .subscribe({
        next: (game_details) => {
          this.game_details = game_details;
          this.metaScore = parseInt(game_details.metacritic);
          this.isLoading = false;
        },
        error: (e) => console.error(e),
        complete: () => {
          console.log('Completed');
          this.isLoading = false;
        },
      });
  }
}
