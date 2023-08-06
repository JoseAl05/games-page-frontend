import { Component, Input, OnInit } from '@angular/core';
import { ScreenshotProps } from 'src/app/interfaces/screenshot.interface';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent implements OnInit {
  @Input() screenshots: ScreenshotProps;
  @Input() isLoadingImages: boolean;

  images: GalleryItem[];

  ngOnInit() {
    if(this.screenshots){
      const imagesUrl = this.screenshots.results.map(screenshot => {
        return new ImageItem({src:screenshot.image,thumb:screenshot.image});
      });
      this.images = imagesUrl;
    }
    console.log(this.images);
  }
}
