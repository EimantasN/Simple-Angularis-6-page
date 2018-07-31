import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      $(document).ready(function(){
      var Images = [
        [
            '././assets/img/c.png',
            '././assets/././assets/img/csharp.png',
            '././assets/img/js.png',
            '././assets/img/ps.png',
            '././assets/img/sql.png',
            '././assets/img/bash.png',
            '././assets/img/linux.png',
            '././assets/img/java.png',
            '././assets/img/python.png',
            '././assets/img/net.png'],
        [   '././assets/img/css.png',
            '././assets/img/html.png',
            '././assets/img/net.png',
            '././assets/img/java.png',
            '././assets/img/csharp.png',
            '././assets/img/xamarin.png',
            '././assets/img/db.png',
            '././assets/img/js.png',
            '././assets/img/php.png',
            '././assets/img/android.png',
            '././assets/img/linux.png'],
        ['././assets/img/csharp.png',
            '././assets/img/java.png',
            '././assets/img/sql.png',
            '././assets/img/js.png',
            '././assets/img/html.png',
            '././assets/img/linux.png'],
        ['././assets/img/linux.png',
            '././assets/img/csharp.png',
            '././assets/img/sql.png',
            '././assets/img/java.png',
            '././assets/img/net.png',
            '././assets/img/ps.png',
            '././assets/img/css.png',
            '././assets/img/html.png']
    ];

      var CodeLanguages = $(".CodeLanguages");


      var Quote = [
        "Because creating anti-virus in VB.NET is not right at all.",
        "The more complicated code gets, the more I'm interested in it.",
        "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
        "I get segmentation faults during exams."
    ];
      var Names = [
        "Lukas Jokubauskas",
        "Eimantas Noreika",
        "Renaldas Štilpa",
        "Žilvinas Norinkevičius"
      ];
      var Duty = [
        "Main Backend developer, Database & Security engineering",
          "Full Stack developer",
          "Big data & Frontend framework engineering",
          "Main Frontend developer, PhotoShop master, UI/UX"
      ];

      var active = false;

      var asmuo = 0;

      ChangeMemeberData($(".two"));

      $(".bubble").on("click", function () {

          $("#memberInfo").fadeIn(500);
          var data = $(this);
          // var myId = data.attr('class');
          // alert(myId);
          active = true;

          ChangeMemeberData(data);
          ChangeMember();
          data.addClass("ActiveMember");
      });

      function ChangeMemeberData(data)
      {
        asmuo = data.attr('name');
        $(".activeFoto").attr("src", data.attr('src')).fadeIn(500);
        $("#Quotetext").html(Quote[asmuo]);
        $("#MemberName").html(Names[asmuo]);
        $("#MemberDuty").html(Duty[asmuo]);
        codeLanguageChange(asmuo);
        $("html, body").animate({ scrollTop: 0 }, "slow");
      };

      function ChangeMember()
      {
          $( ".bubble" ).each(function() {
            $(this).removeClass("ActiveMember");
        });
      };

      function codeLanguageChange(index) {
        CodeLanguages.html("");
        for(var i = 0; i < Images[index].length; i++)
        {
          CodeLanguages.append("<div class=\"iconCode\" style=\"float: left; width: 30px\"> <img width=\"30px\" height=\"30px\" src="+Images[index][i]+" /></div>");
        }
      //scope.$apply();
      }
    });
  };
}
