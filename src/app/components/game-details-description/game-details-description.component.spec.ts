import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsDescriptionComponent } from './game-details-description.component';

describe('GameDetailsDescriptionComponent', () => {
  let component: GameDetailsDescriptionComponent;
  let fixture: ComponentFixture<GameDetailsDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameDetailsDescriptionComponent]
    });
    fixture = TestBed.createComponent(GameDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
