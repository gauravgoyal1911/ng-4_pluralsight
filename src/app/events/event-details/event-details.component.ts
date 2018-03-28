import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { ISession } from '../shared/session.model';

@Component({
     // tslint:disable-next-line:component-selector
    selector: '',
    templateUrl: 'event-details.component.html',
    styles: [
        `.container{
            padding-left:20px;
            padding-right:20px;
        }
        .event-image{
            height:100px;
        }
        .a{
            cursor:pointer
        }`
    ]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
    addSession() {
        this.addMode = true;
    }
    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    }
}