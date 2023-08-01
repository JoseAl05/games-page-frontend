import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() qGames: number;
  @Input() currentPage: string;
  @Input() total: number = 0;
  itemsPerPage:number = 10;

  @Output() goTo: EventEmitter<string> = new EventEmitter<string>();
  @Output() next: EventEmitter<string> = new EventEmitter<string>();
  @Output() previous: EventEmitter<string> = new EventEmitter<string>();
  constructor(private route: ActivatedRoute, private router: Router) {}

  public pages: string[] = [];

  goNext(page: string): void {

    const parsedPage = parseInt(page);
    const nextPage = parsedPage + 1;

    if (nextPage >= 1 && nextPage <= this.total) {
      this.router.navigate(['.'],{relativeTo:this.route,queryParams:{...this.route.snapshot.queryParams,page:nextPage.toString()}})
    }
  }

  goBack(page: string): void {

    const parsedPage = parseInt(page);
    const nextPage = parsedPage - 1;

    if (nextPage >= 1 && nextPage <= this.total) {
      this.router.navigate(['.'],{relativeTo:this.route,queryParams:{...this.route.snapshot.queryParams,page:nextPage.toString()}})
    }
  }

  goToPage(page: string): void {

    const parsedPage = parseInt(page);

    if (parsedPage >= 1 && parsedPage <= this.total) {
      this.router.navigate(['.'],{relativeTo:this.route,queryParams:{...this.route.snapshot.queryParams,page:parsedPage.toString()}})
    }
  }

  get visibleItems(): string[] {
    const parsedCurrentPage = parseInt(this.currentPage);
    const numPageLinksToShow = 10;
    const halfPageLinks = Math.floor(numPageLinksToShow / 2);

    const startPage = Math.max(parsedCurrentPage - halfPageLinks, 1);
    const endPage = Math.min(startPage + numPageLinksToShow - 1, this.total);

    const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => (startPage + i).toString());
    return visiblePages;
  }

  isDisabled(currentPage:string):boolean{
    const parsedCurrentPage = parseInt(currentPage);
    if(parsedCurrentPage === 1){
      return true;
    }
    return false;
  }
}
