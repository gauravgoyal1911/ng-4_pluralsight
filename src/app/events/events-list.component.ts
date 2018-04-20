import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import {IEvent} from './shared/index';

//Here We are Passing Event1 Object from EVent List to Thumbnail Component
@Component({
    selector: 'events-list',
    templateUrl: 'events-list.component.html',
    styles: [
        `
    `
    ]
})

export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService) {

    }
    ngOnInit() {
       this.eventService.getEvents().subscribe(events => { this.events = events })
    }
}
