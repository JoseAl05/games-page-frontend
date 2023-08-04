import { Component, Input } from '@angular/core';
import { MetacriticPlatformsProps, RatingsProps } from 'src/app/interfaces/game-details.interface';

@Component({
  selector: 'app-game-details-ratings',
  templateUrl: './game-details-ratings.component.html',
  styleUrls: ['./game-details-ratings.component.css']
})
export class GameDetailsRatingsComponent {

  @Input() metaScore:number;
  @Input() metacritic:string;
  @Input() ratings: RatingsProps[];
  @Input() metacriticPlatforms: MetacriticPlatformsProps[];

}
