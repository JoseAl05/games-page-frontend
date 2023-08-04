import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsRatingsComponent } from './game-details-ratings.component';

describe('GameDetailsRatingsComponent', () => {
  let component: GameDetailsRatingsComponent;
  let fixture: ComponentFixture<GameDetailsRatingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameDetailsRatingsComponent]
    });
    fixture = TestBed.createComponent(GameDetailsRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
