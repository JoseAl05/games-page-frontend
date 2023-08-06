export interface ScreenshotProps {
    count:number;
    next: string | null;
    previous: string | null;
    results:ScreenshotDataProps[];
}

export interface ScreenshotDataProps {
    id:number;
    image:string;
    width:number;
    height:number;
    is_deleted:boolean;
}