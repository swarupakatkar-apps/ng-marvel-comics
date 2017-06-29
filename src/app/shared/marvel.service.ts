import { EventDataWrapper } from './../events/shared/event-data-wrapper';
import { StoryDataWrapper } from './../stories/shared/story-data-wrapper';
import { SeriesDataWrapper } from './../series/shared/series-data-wrapper';
import { CreatorDataWrapper } from './../creators/shared/creator-data-wrapper';
import { ComicDataWrapper } from './../comics/shared/comic-data-wrapper';
import { CharacterDataWrapper } from './../characters/shared/character-data-wrapper';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private marvelUrl = 'https://gateway.marvel.com:443/v1/public/';  // URL to web api
  private apikey = 'fcba90451aa99130e5508da5064ad363';

  constructor(private http: Http) { }

  getCharacters(offset: string): Observable<CharacterDataWrapper> {
    let params = new URLSearchParams();
    params.set('offset', offset);
    params.set('apikey', this.apikey);

    return this.http.get(this.marvelUrl + 'characters', { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCharacter(id: number): Observable<CharacterDataWrapper> {
    return this.http.get(this.marvelUrl + 'characters/' + id + '?apikey=' + this.apikey)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getComics(offset: string): Observable<ComicDataWrapper> {
    let params = new URLSearchParams();
    params.set('offset', offset);
    params.set('apikey', this.apikey);

    return this.http.get(this.marvelUrl + 'comics', { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getComic(id: number): Observable<ComicDataWrapper> {
    return this.http.get(this.marvelUrl + 'comics/' + id + '?apikey=' + this.apikey)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCreators(offset: string): Observable<CreatorDataWrapper> {
    let params = new URLSearchParams();
    params.set('offset', offset);
    params.set('apikey', this.apikey);

    return this.http.get(this.marvelUrl + 'creators', { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCreator(id: number): Observable<CreatorDataWrapper> {
    return this.http.get(this.marvelUrl + 'creators/' + id + '?apikey=' + this.apikey)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEvents(offset: string): Observable<EventDataWrapper> {
    let params = new URLSearchParams();
    params.set('offset', offset);
    params.set('apikey', this.apikey);

    return this.http.get(this.marvelUrl + 'events', { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEvent(id: number): Observable<EventDataWrapper> {
    return this.http.get(this.marvelUrl + 'events/' + id + '?apikey=' + this.apikey)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSeries(offset: string): Observable<SeriesDataWrapper> {
    let params = new URLSearchParams();
    params.set('offset', offset);
    params.set('apikey', this.apikey);

    return this.http.get(this.marvelUrl + 'series', { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSingleSeries(id: number): Observable<SeriesDataWrapper> {
    return this.http.get(this.marvelUrl + 'series/' + id + '?apikey=' + this.apikey)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getStories(offset: string): Observable<StoryDataWrapper> {
    let params = new URLSearchParams();
    params.set('offset', offset);
    params.set('apikey', this.apikey);

    return this.http.get(this.marvelUrl + 'stories', { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getStory(id: number): Observable<StoryDataWrapper> {
    return this.http.get(this.marvelUrl + 'stories/' + id + '?apikey=' + this.apikey)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
