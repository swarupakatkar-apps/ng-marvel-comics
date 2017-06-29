import { Series } from './series';

export class SeriesDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Series[];
}
