import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from 'app/models/movie';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  totalResults: number;
  showLoadMore: boolean;
  pageNo = 1;
  selectedMovie: Movie;
  movies: Movie[] = [];

  title = '';

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  setLoadMoreState = () => {
    this.showLoadMore = this.totalResults !== this.movies.length;
  }

  getMovie = (title, pageNo) => {
    return this.http.get(`http://www.omdbapi.com/?s=${title}&page=${pageNo}`)
      .map(res => res.json());
  }

  resetList = () => {
    this.pageNo = 1;
    this.selectedMovie = undefined;
    this.showLoadMore = true;
  }

  searchMovie = title => {
    this.resetList();
    this.title = title;
    this.getMovie(title, this.pageNo)
      .subscribe(res => {
        if (res.Error) {
          console.log(res.Error);
        } else {
          this.movies = res.Search;
          this.totalResults = Number(res.totalResults);
          this.setLoadMoreState();
        }
      });
  }


  onLoadMore = () => {
    this.pageNo++;
    this.getMovie(this.title, this.pageNo)
      .subscribe(res => {
        if (res.Error) {
          console.log(res.Error);
        } else {
          this.movies = this.movies.concat(res.Search);
          this.setLoadMoreState();
        }
      });
  }

  onMovieSelect = movie => this.selectedMovie = movie;

}
