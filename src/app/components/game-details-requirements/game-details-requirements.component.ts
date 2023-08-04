import { Component, Input } from '@angular/core';
import { PlatformsProps } from 'src/app/interfaces/game-details.interface';

@Component({
  selector: 'app-game-details-requirements',
  templateUrl: './game-details-requirements.component.html',
  styleUrls: ['./game-details-requirements.component.css'],
})
export class GameDetailsRequirementsComponent {
  @Input() platforms: PlatformsProps[];
  pcRequirements:any;
  noRequirements:string = '';

  ngOnInit() {
    this.pcRequirements = this.platforms.filter(p => p.platform.name === 'PC');
    if(Object.keys(this.pcRequirements[0].requirements).length === 0){
      this.noRequirements = 'No requirements data.'
    }
    console.log(this.pcRequirements);
  }
}
