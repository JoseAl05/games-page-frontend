import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { GamesComponent } from './components/games/games.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';

const routes: Routes = [
  {
    path:'', component: HeroComponent
  },
  {
    path:'games', component:GamesComponent
  },
  {
    path:'games/:game_id/:game_slug', component:GameDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
