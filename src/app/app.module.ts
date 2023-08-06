import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { GamesComponent } from './components/games/games.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FiltersComponent } from './components/filters/filters.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameDetailsRatingsComponent } from './components/game-details-ratings/game-details-ratings.component';
import { GameDetailsDescriptionComponent } from './components/game-details-description/game-details-description.component';
import { GameDetailsRequirementsComponent } from './components/game-details-requirements/game-details-requirements.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    GamesComponent,
    PaginationComponent,
    FiltersComponent,
    GameDetailsComponent,
    GameDetailsRatingsComponent,
    GameDetailsDescriptionComponent,
    GameDetailsRequirementsComponent,
    ImageGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
