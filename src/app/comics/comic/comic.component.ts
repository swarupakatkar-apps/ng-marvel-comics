import { ComicDataWrapper } from './../shared/comic-data-wrapper';
import { MarvelService } from './../../shared/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  errorMessage: string;
  dataWrapper: ComicDataWrapper

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marvelService: MarvelService
  ) {
  }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.marvelService.getComic(+params['id']))
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
