import { Component, OnInit, Inject} from '@angular/core';
import { EventService } from '../shared/event.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Login } from '../shared/login.model';
import { element } from 'protractor';


declare var M: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[EventService]
})
export class LoginComponent implements OnInit {
model=new Login();
login:any= {};
employees:any=[];
countPassword=0;
countName=0;
loggedEmployee:any;
isLoggedIn:boolean=false;

  constructor(private eventService: EventService,private route:Router) { }

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form)
     form.reset();
    this.model = {
      name:  '',
      password: ''
    }
  }

  onSubmit(form:NgForm) {
    this.eventService.LoggedInAdmin(form.value).subscribe(
      res =>{
        console.log("result in login",res);
        if(res){
          // this.g.user = res;
          this.loggedEmployee = res;
          this.isLoggedIn = true;
          console.log("result in login",res);
           this.route.navigate(['./event']);
           window.localStorage.setItem('current user',JSON.stringify(this.loggedEmployee));
        }
        else{
           alert("user is not there");
        }
      },
      err =>console.log('Error is data fetching',err)
    );
  }
    // signUp(){
    //   this.route.navigate(['./employee']);
    // }
   }


