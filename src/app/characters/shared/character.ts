import { SeriesList } from './../../series/shared/series-list';
import { EventList } from './../../events/shared/event-list';
import { StoryList } from './../../stories/shared/story-list';
import { ComicList } from './../../comics/shared/comic-list';
import { Image } from './../../shared/image';
import { Url } from './../../shared/url';

export class Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: Url[];
    thumbnail: Image;
    comics: ComicList;
    stories: StoryList;
    events: EventList;
    series: SeriesList;
}
