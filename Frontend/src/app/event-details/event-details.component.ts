import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  providers: [EventService]
})
export class EventDetailsComponent implements OnInit {
  events:any;
  constructor(private EventService: EventService) { }

  ngOnInit() {
    this.EventService.getEventList().subscribe(res=>{
      this.events=res;
      console.log("EVENT DETAILS",this.events)
    })
  }

}
