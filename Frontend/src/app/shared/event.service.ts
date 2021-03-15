import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Login} from './login.model';
import {Events} from './event.model';
import { Subject } from "rxjs";

@Injectable()
export class EventService {
  selectedEvent: Events;
  events: Events[];
  login:Login[];
  selectedLogin:Login;
  readonly loginURL = 'http://localhost:3000/login';
  readonly eventURL='http://localhost:3000/events';
  constructor(private http: HttpClient) { }
  LoggedInAdmin(loginData){
    console.log("LoginData",loginData);
    return this.http.post(this.loginURL,loginData);
  }
  isAuthenticated(){
   return !!window.localStorage.getItem('current user');
   }
   postEvent(event: Events) {
     console.log("emp",event);
     const eventData = new FormData();
     const datestr = (new Date(event.picker)).toDateString();
     eventData.append("name", event.name);
     eventData.append("place", event.place);
     eventData.append("organizer", event.organizer);
     eventData.append("contact", event.contact);
     eventData.append("image", event.poster, event.name);
     eventData.append("picker",datestr);
     console.log("event data", eventData);
     return this.http.post(this.eventURL,eventData);
  }

  getEventList() {
    return this.http.get(this.eventURL);
  }
}
