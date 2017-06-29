import { Comic } from './comic';

export class ComicDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
}
