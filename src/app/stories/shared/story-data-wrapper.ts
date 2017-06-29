import  { StoryDataContainer } from './story-data-container';

export class StoryDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: StoryDataContainer;
    etag: string;
}
