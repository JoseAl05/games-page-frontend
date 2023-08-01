export interface PlatformProps {
    count:number;
    next:string;
    results:PlatformDataProps[];
}

export interface PlatformDataProps {
    id:number;
    name:string;
    slug:string;
    games_count:number;
    image_background:string;
    image:string | null;
    year_start:string | null;
    year_end:string | null;
}