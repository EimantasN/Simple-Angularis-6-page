import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  left = "contact";
  right = "team";

  constructor() { }

  ngOnInit() {

    var typed = new Typed("#hello", {
      strings: [
          "NAMASTE",
          "SALAAM",
          "ZDRAS-TVUY-TE",
          "KONNICHIWA",
          "AHN-YOUNG-HA-SE-YO",
          "MERHABA",
          "SAIN BAINUU",
          "SALEMETSIZ BE",
          "SZIA",
          "MARHABA",
          "SALAMA ALEIKUM",
          "HABARI",
          "NI HAU",
          "HALO",
          "NAY HOH"
      ],
      typeSpeed: 150,
      backSpeed: 150,
      smartBackspace: true, // Default value
      showCursor: false,
      loop: true
  });

  }

}
