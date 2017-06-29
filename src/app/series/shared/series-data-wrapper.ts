import  { SeriesDataContainer } from './series-data-container';

export class SeriesDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: SeriesDataContainer;
    etag: string;
}
