import  { EventDataContainer } from './event-data-container';

export class EventDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: EventDataContainer;
    etag: string;
}
