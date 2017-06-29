import { SeriesDataWrapper } from './../shared/series-data-wrapper';
import { MarvelService } from './../../shared/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  errorMessage: string;
  dataWrapper: SeriesDataWrapper;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marvelService: MarvelService
  ) {
  }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.marvelService.getSingleSeries(+params['id']))
      .subscribe(
      dataWrapper => this.dataWrapper = dataWrapper,
      error => this.errorMessage = <any>error
      );

  }

  navigateToItem(resourceType: string, resourceURI: string) {
    let resourceId = resourceURI.split('/').pop();
    this.router.navigate([resourceType, resourceId]);
  }

}
