import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { GamesComponent } from './components/games/games.component';

const routes: Routes = [
  {
    path:'', component: HeroComponent
  },
  {
    path:'games', component:GamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
