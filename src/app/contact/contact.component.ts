import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  lat: number = 54.903411;
  lng: number = 23.960320;

  constructor() { }

    ngOnInit() {
    }
}
