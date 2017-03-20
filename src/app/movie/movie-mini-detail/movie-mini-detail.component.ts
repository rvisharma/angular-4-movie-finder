import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'app/models/movie';

@Component({
  selector: 'app-movie-mini-detail',
  templateUrl: './movie-mini-detail.component.html',
  styleUrls: ['./movie-mini-detail.component.sass']
})
export class MovieMiniDetailComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor() { }

  ngOnInit() {
    console.log(this.movie);
  }

  isValidUrl = url => {
    return url !== 'N/A';
  }

}
