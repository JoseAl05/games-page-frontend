import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-details-description',
  templateUrl: './game-details-description.component.html',
  styleUrls: ['./game-details-description.component.css'],
})
export class GameDetailsDescriptionComponent {
  @Input() description: string;
  @Input() released: string;
  @Input() playtime: number;
  @Input() website: string;
  @Input() redditWebsite: string;
  @Input() metacriticWebsite: string;
  @Input() achievements: number;

  faComment = faComment;

  constructor(private library: FaIconLibrary) {
    //ERROR: Type '"threads"' is not assignable to type 'IconName'. This is why I added @ts-ignore
    //@ts-ignore
    library.addIcons(faRedditAlien);
  }
}
