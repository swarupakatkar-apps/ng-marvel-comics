import { StoryDataWrapper } from './../shared/story-data-wrapper';
import { MarvelService } from './../../shared/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  errorMessage: string;
  dataWrapper: StoryDataWrapper;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MarvelService
  ) { }

  ngOnInit() {
    this.getList();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  getList() {
    this.route.queryParams
      .switchMap((params: Params) => this.service.getStories(params['offset']))
      .subscribe(
      dataWrapper => this.dataWrapper = dataWrapper,
      error => this.errorMessage = <any>error
      );
  }

  getNext() {
    let offset = this.dataWrapper.data.offset + this.dataWrapper.data.limit;
    if (offset <= this.dataWrapper.data.total) {
      this.router.navigate(['stories'], { queryParams: { offset: offset } });
    }
    return false;
  }

  getPrevious() {
    let offset = this.dataWrapper.data.offset - this.dataWrapper.data.limit;
    if (offset > 0) {
      this.router.navigate(['stories'], { queryParams: { offset: offset } });
    } else {
      this.router.navigate(['stories']);
    }
    return false;
  }

}
