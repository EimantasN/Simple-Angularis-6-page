import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {
  public href: string = "";

  constructor() { }

  ngOnInit() {

    var ArrowText = [

      ["Check out our Projects", "2"],
      ["Meet the Team", "3"],
      ["Contact us", "0"],
      ["Home", "1"]
    ];

    var Redirection = [
      "/contact",
      "/header",
      "/projects",
      "/team"
    ];

        $(document).ready(function(){
          //alert(window.location.href);

          var left = $("#left");
          var right = $("#right");

          var arrowLeft = $("#leftArrowTextspan");
          var arrowRight = $("#rightArrowTextspan");

          var Url = window.location.href;

          if(Url.indexOf("projects") != -1){
            right.attr("href", Redirection[0]);
            left.attr("href", Redirection[3]);
            ArrowTextChange(2);
          }
          else if(Url.indexOf("team") != -1){
            right.attr("href", Redirection[2]);
            left.attr("href", Redirection[1]);
            ArrowTextChange(1);
          }
          else if(Url.indexOf("contact") != -1){
            right.attr("href", Redirection[1]);
            left.attr("href", Redirection[2]);
            ArrowTextChange(3);
          }
          else{
            right.attr("href", Redirection[3]);
            left.attr("href", Redirection[0]);
            ArrowTextChange(0);
          }

          $("#rightArrowText").on({
              mouseenter: function() {
                  $("#rightArrowTextspan").fadeIn(500);
              },
              mouseleave: function() {
                  $("#rightArrowTextspan").fadeOut(500);
              }
          });
    
          $("#leftArrowText").on({
      
              mouseenter: function() {
                  $("#leftArrowTextspan").fadeIn(500);
              },
              mouseleave: function() {
                  $("#leftArrowTextspan").fadeOut(500);
              }
          });
    
        function ArrowTextChange(a) {
            switch (a) {
                case 0:
                    arrowLeft.html(ArrowText[2][0]);
                    arrowRight.html(ArrowText[1][0]);
                    break;
                case 1:
                    arrowLeft.html(ArrowText[3][0]);
                    arrowRight.html(ArrowText[0][0]);
                    break;
                case 2:
                    arrowLeft.html(ArrowText[1][0]);
                    arrowRight.html(ArrowText[2][0]);
                    break;
                case 3:
                    arrowLeft.html(ArrowText[0][0]);
                    arrowRight.html(ArrowText[3][0]);
                    break;
                default:
                    break;
            }
        }
        });
  }

}
