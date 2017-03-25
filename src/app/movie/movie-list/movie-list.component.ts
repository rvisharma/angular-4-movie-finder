import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Output() loadMore = new EventEmitter();
  @Output() selectMovie = new EventEmitter<string>();

  @Input() movies: any[];
  @Input() showLoadMore: boolean;

  constructor() { }

  onMovieSelect = movie => this.selectMovie.emit(movie);

  onLoadMore = () => {
    this.loadMore.emit();
  }
}
