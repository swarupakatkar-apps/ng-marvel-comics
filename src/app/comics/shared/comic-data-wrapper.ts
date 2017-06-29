import  { ComicDataContainer } from './comic-data-container';

export class ComicDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: ComicDataContainer;
    etag: string;
}
