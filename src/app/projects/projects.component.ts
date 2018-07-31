import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){

    var ProjectName =
        [
            "KTU mobile andriod app",
            "Photography",
            "WEB API",
            "DropShopingas"
        ];

    var ProjectDescription =
        [
            "KTU Mobile – Android app dedicated to students of Kaunas University of Technology, who want to quickly reach everyday functions of KTU Academic Information System & Moodle (view marks, schedule, etc.)",
            "Photography website with blog, contact form, admin panel, and two way authorization. Created with ASP.NET CORE 2.0.",
            ".NET API",
            "ASP.NET Enterprise Store"

        ];

    var ProjectDetails =
        [
          ["<li>Xamarin Android Native</li>", "<li>Android support library & Material design</li>", "<li>NET Standart Library (BackEnd)</li>", "<li>Kaunas University of Technology system integration</li>"],
            ["<li>CSS/HTML from scratch</li>","<li>JavaScript (jQuery)</li>","<li>ASP.NET CORE 2.0</li>","<li>Bootstrap</li>"],
            ["<li>ASP.NET WEB API</li>"],
            ["<li>CSS/HTML from scratch</li>", "<li>React</li>", "<li>ASP.NET CORE 2.0</li>", "<li>Bootstrap</li>", "<li>Webpack</li>"]
        ];

    var ProjectImage =
        [
            "././assets/img/KTU_Mobile_app.jpg",
            "././assets/img/PhotoGraphy.png",
            "././assets/img/api.png",
            "https://media.discordapp.net/attachments/448176795615756301/471220950331949057/unknown.png?width=1062&height=677"
        ];

    var ProjectNameText = $("#ProjectNameText");
    var ProjectDesriptionText = $("#projectDescription");
    var ProjectDetailsText = $("#ProjectDetailsText");
    var ProjectImgText = $("#ProjectImgText");

    var a = 0;
    function ProjectChange(a) {
        ProjectNameText.html(ProjectName[a]);
        ProjectDesriptionText.html(ProjectDescription[a]);
        ProjectDetailsText.html(ProjectDetails[a]);
        ProjectImgText.attr('src', ProjectImage[a]);
        $("html, body").animate({ scrollTop: 0 }, "slow");
    };

    ProjectChange(a);

    $(".ProjectID").on("click", function () {

            var index = $(this).attr('id');
            ProjectChange(index);
    });

  });
  }

}
