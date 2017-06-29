import { MarvelService } from './../../shared/marvel.service';
import { CharacterDataWrapper } from './../shared/character-data-wrapper';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  errorMessage: string;
  dataWrapper: CharacterDataWrapper

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
      .switchMap((params: Params) => this.service.getCharacters(params['offset']))
      .subscribe(
      dataWrapper => this.dataWrapper = dataWrapper,
      error => this.errorMessage = <any>error
      );
  }

  getNext() {
    let offset = this.dataWrapper.data.offset + this.dataWrapper.data.limit;
    if (offset <= this.dataWrapper.data.total) {
      this.router.navigate(['characters'], { queryParams: { offset: offset } });
    }
    return false;
  }

  getPrevious() {
    console.log('here');
    let offset = this.dataWrapper.data.offset - this.dataWrapper.data.limit;
    console.log(offset);
    if (offset > 0) {
      this.router.navigate(['characters'], { queryParams: { offset: offset } });
    } else {
      this.router.navigate(['characters']);
    }
    return false;
  }

}
