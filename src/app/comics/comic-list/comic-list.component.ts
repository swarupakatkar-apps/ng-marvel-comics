import { MarvelService } from './../../shared/marvel.service';
import { ComicDataWrapper } from './../shared/comic-data-wrapper';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

  errorMessage: string;
  dataWrapper: ComicDataWrapper;

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
      .switchMap((params: Params) => this.service.getComics(params['offset']))
      .subscribe(
      dataWrapper => this.dataWrapper = dataWrapper,
      error => this.errorMessage = <any>error
      );
  }

  getNext() {
    let offset = this.dataWrapper.data.offset + this.dataWrapper.data.limit;
    if (offset <= this.dataWrapper.data.total) {
      this.router.navigate(['comics'], { queryParams: { offset: offset } });
    }
    return false;
  }

  getPrevious() {
    console.log('here');
    let offset = this.dataWrapper.data.offset - this.dataWrapper.data.limit;
    console.log(offset);
    if (offset > 0) {
      this.router.navigate(['comics'], { queryParams: { offset: offset } });
    } else {
      this.router.navigate(['comics']);
    }
    return false;
  }

}
