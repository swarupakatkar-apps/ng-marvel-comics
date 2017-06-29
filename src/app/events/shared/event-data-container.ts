import { Event } from './event';

export class EventDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Event[];
}
