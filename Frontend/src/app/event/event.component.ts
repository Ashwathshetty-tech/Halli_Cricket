import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { EventService } from '../shared/event.service';
import {Events} from '../shared/event.model';
declare var M: any;
import { FormGroup, FormControl,FormBuilder } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [EventService]
})
export class EventComponent implements OnInit {
  events:any=[];
  serchTerm:any=[];
  fileToUpload:File=null;
  base64textString:string;
  imageData:string;
  file:any;
  eventForm = this.fb.group ({
    name:[''],
    place:[''],
    organizer:[''],
    contact:[''],
    poster: new FormControl(null),
    picker:Date
  });
  constructor(private eventService: EventService,private route:Router,private fb: FormBuilder) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.eventService.selectedEvent = {
      _id:"",
      name: "",
      place: "",
      organizer: '',
      contact: '',
      poster:null,
      picker:''
    }
  }

  onSubmit() {
    console.log("forms",this.eventForm.value);
    console.log("forms",this.eventForm.value);
    if(this.eventForm.valid){


      this.eventService.postEvent(this.eventForm.value).subscribe( (res) => {
        this.route.navigate(['/login']);
      });


    }
    else
{    M.toast({ html: 'Please fill all the required fields', classes: 'rounded' });
  }


  }
  Back(){
    this.route.navigate(['./login']);
  }
  handleFileInput(files: Event) {
    const file = (files.target as HTMLInputElement).files[0];
    console.log("files",file);
    this.eventForm.value.poster=file;
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
}

}
