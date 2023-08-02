import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetailsProps } from 'src/app/interfaces/game-details.interface';
import { GameDetailsService } from 'src/app/services/game-details.service';

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

  constructor(
    private route: ActivatedRoute,
    private gameDetailsService: GameDetailsService
  ) {}

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
