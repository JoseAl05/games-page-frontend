import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsRequirementsComponent } from './game-details-requirements.component';

describe('GameDetailsRequirementsComponent', () => {
  let component: GameDetailsRequirementsComponent;
  let fixture: ComponentFixture<GameDetailsRequirementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameDetailsRequirementsComponent]
    });
    fixture = TestBed.createComponent(GameDetailsRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
