import { DeveloperProps } from './developer.interface';
import { GenreDataProps } from './genre.interface';
import { PlatformDataProps, PlatformProps } from './platforms.interface';
import { PublisherProps } from './publisher.interface';
import { StoreProps } from './store.interface';
import { TagProps } from './tag.interface';

export interface GameDetailsProps {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: string;
  metacritic_platforms: MetacriticPlatformsProps[];
  released: string;
  tba: boolean;
  updated: Date;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: RatingsProps[];
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game: string | null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: ParentPlatformsProps[];
  platforms: PlatformsProps[];
  stores: StoreProps[];
  developers: DeveloperProps[];
  genres: GenreDataProps[];
  tags: TagProps[];
  publishers: PublisherProps[];
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  clip: string | null;
  description_raw: string;
}
export interface MetacriticPlatformsProps {
  metascore: number;
  url: string;
  platform: {
    platform: number;
    name: string;
    slug: string;
  };
}
export interface RatingsProps {
  id: number;
  title: string;
  count: number;
  percent: number;
}
export interface ParentPlatformsProps {
  id: number;
  name: string;
  slug: string;
}

export interface PlatformsProps {
  platform: {
    id: number;
    name: string;
    slug: string;
    image: string | null;
    year_end: number | null;
    year_start: number;
    games_count: number;
    image_background: string;
  },
  released_at: string,
  requirements: {}
}

