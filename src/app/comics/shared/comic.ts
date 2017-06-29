import { SeriesSummary } from './../../series/shared/series-summary';
import { SeriesList } from './../../series/shared/series-list';
import { EventList } from './../../events/shared/event-list';
import { StoryList } from './../../stories/shared/story-list';
import { ComicList } from './comic-list';
import { CharacterList } from './../../characters/shared/character-list';
import { Url } from './../../shared/url';
import { Image } from './../../shared/image';

export class Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: string;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    urls: Url[];
    thumbnail: Image;
    images: Image;
    //creators: CreatorList;
    characters: CharacterList;
    stories: StoryList;
    events: EventList;
    series: SeriesSummary;
}
