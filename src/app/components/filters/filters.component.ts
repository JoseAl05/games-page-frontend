import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GenreProps } from 'src/app/interfaces/genre.interface';
import { PlatformProps } from 'src/app/interfaces/platforms.interface';
import { GenresService } from 'src/app/services/genres.service';
import { PlatformsService } from 'src/app/services/platforms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  searchGame = new FormControl('');
  current_page: string = '1';
  isLoadingGenres: boolean = true;
  isLoadingPlatforms: boolean = true;
  listGenres: GenreProps;
  listPlatforms: PlatformProps;
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private genresService: GenresService,
    private platformsService: PlatformsService
  ) {}

  filterForm = this.fb.group({
    sortByGenre: '',
    sortByPlatform: '',
  });

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.current_page = params['page'];
    });
    this.getGenres();
    this.getPlatforms();
  }

  getGenres() {
    const genres = this.genresService.getGenres().subscribe({
      next: (genres) => {
        this.listGenres = genres;
        this.isLoadingGenres = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoadingGenres = false;
      },
      complete: () => {
        console.log('Completed');
        this.isLoadingGenres = false;
      },
    });
    return genres;
  }

  getPlatforms() {
    const platforms = this.platformsService.getPlatforms().subscribe({
      next: (platforms) => {
        this.listPlatforms = platforms;
        this.isLoadingPlatforms = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoadingPlatforms = false;
      },
      complete: () => {
        console.log('Completed');
        this.isLoadingPlatforms = false;
      },
    });
    return platforms;
  }

  setSearchValue() {
    this.router.navigate(['/games'], {
      relativeTo: this.route,
      queryParams: { search: this.searchGame.value, page: this.current_page },
    });
  }

  formatQueryParam(genre: any) {
    const firstBlankSpace = genre.indexOf(' ');
    if (firstBlankSpace !== -1) {
      return genre.slice(firstBlankSpace + 1);
    }
    return genre;
  }

  /* SET VALUES FOR QUERY PARAMS */

  setGenre(e: any) {
    const formattedGenre = this.formatQueryParam(e.target.value);
    this.genre?.setValue(formattedGenre, {
      onlySelf: true,
    });
  }

  setPlatform(e: any) {
    const formattedPlatform = this.formatQueryParam(e.target.value);
    this.platform?.setValue(formattedPlatform, {
      onlySelf: true,
    });
  }

  /* ----------------------------*/

  /* FORM GETTERS */
  get genre() {
    return this.filterForm.get('sortByGenre');
  }
  get platform() {
    return this.filterForm.get('sortByPlatform');
  }
  /* ----------------*/

  setFilters(): void {
    console.log(this.filterForm.value);
    this.router.navigate(['/games'], {
      relativeTo: this.route,
      queryParams: {
        genre: this.filterForm.value['sortByGenre'],
        platform: this.filterForm.value['sortByPlatform'],
        page: this.current_page,
      },
    });
  }

  clearFilters() {
    const params = { ...this.route.snapshot.queryParams };
    if (params['search']) {
      delete params['search'];
    }
    if (params['genre']) {
      delete params['genre'];
    }
    if (params['platform']) {
      delete params['platform'];
    }
    this.router.navigate([], { queryParams: params });
  }
}
