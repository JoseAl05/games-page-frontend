export interface GenreProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: GenreDataProps[];
}

export interface GenreDataProps {
    id:number;
    name:string;
    slug:string;
    games_count:number;
}
