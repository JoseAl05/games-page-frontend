import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetailsProps } from 'src/app/interfaces/game-details.interface';
import { GameDetailsService } from 'src/app/services/game-details.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { ScreenshotsService } from 'src/app/services/screenshots.service';
import { ScreenshotProps } from 'src/app/interfaces/screenshot.interface';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  game_id: string;
  game_slug: string;
  game_details: GameDetailsProps;
  screenshots: ScreenshotProps;
  isLoading: boolean = true;
  isLoadingImages: boolean = true;
  metaScore: number;

  constructor(
    private route: ActivatedRoute,
    private gameDetailsService: GameDetailsService,
    private screenshotsService: ScreenshotsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.game_id = params['game_id'];
      this.game_slug = params['game_slug'];
    });
    this.getGameDetails();
    this.getScreenshots();
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

  getScreenshots() {
    const screenshots = this.screenshotsService
      .getScreenshots(this.game_id)
      .subscribe({
        next: (screenshots) => {
          this.screenshots = screenshots;
          this.isLoadingImages = false;
        },
        error: (e) => console.error(e),
        complete: () => {
          console.log('Completed');
          this.isLoading = false;
        },
      });
  }
}
