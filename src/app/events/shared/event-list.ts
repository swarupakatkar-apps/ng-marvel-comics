import { EventSummary } from './event-summary';

export class EventList {
    available: number;
    returned: number;
    collectionURI: string;
    items: EventSummary[];
}
