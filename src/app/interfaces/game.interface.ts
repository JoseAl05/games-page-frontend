export interface GameProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: GameDataProps[];
}

export interface GameDataProps {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  raing: number;
  rating_top: number;
  ratings: any;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: any;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  tags: any;
  genres: any;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  } | null;
  platforms: [
    platform: any,
    released_at: string | null,
    requirements: {
      minimum: string;
      recommended: string;
    } | null
  ];
}
