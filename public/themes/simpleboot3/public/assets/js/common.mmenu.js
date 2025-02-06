/**
 * Created by Administrator on 2016/6/17.
 */
$(document).ready(function () {

  var h = $(window).height() - $(".navbar").height() - $(".banner").height() - $(".crumbs").height() - $(".footer").height() - 70 - 45;
  $(".main").css("min-height", h);
});






function validate_required(field, alerttxt) {
  with (field) {
    if (value == null || value == "") { alert(alerttxt); return false }
    else { return true }
  }
}


function validate_email(field, alerttxt) {
  with (field) {
    apos = value.indexOf("@")
    dotpos = value.lastIndexOf(".")
    if (apos < 1 || dotpos - apos < 2) { alert(alerttxt); return false }
    else { return true }
  }
}

function validate_content(field, alerttxt) {
  with (field) {
    var patt1 = new RegExp("");
    if (patt1.test(value)) { alert(alerttxt); return false }
    else { return true }
  }
}


function validate_form(thisform) {
  with (thisform) {
    if (validate_required(name, "Please input the right name!") == false) { name.focus(); return false }
    if (validate_email(email, "Please input a valid e-mail address!") == false) { email.focus(); return false }

    if (validate_required(content, "Please input the message!") == false) { content.focus(); return false }
    if (validate_content(content, "Please input the right message!") == false) { content.focus(); return false }
  }
}




function dosubmit(formobj) {
  var name = $(formobj).find("[name='name']").val();
  var email = $(formobj).find("[name='email']").val();
  var lytext = $(formobj).find("[name='lytext']").val();
  var phone = $(formobj).find("[name='mycall']").val();
  var country = $(formobj).find("[name='country']").val();
  var antspm = $(formobj).find("[name='antspm']").val();

  if (name == "") {
    alert('Please input the right name!'); formobj.name.focus();
    return false;
  } else if (!antspm.match(new Date().getFullYear())) {
    alert("Please input a valid col address!");
    return false;
  } else if (!email.match(/[^\s\n]+\@[^\s\n]+\.(\w{2,4})$/)) {
    alert("Please input a valid email address!"); formobj.email.focus();
    return false;
  } else if (lytext == "") {
    alert('Please input the Messgge!'); formobj.lytext.focus();
    return false;
  } else if (lytext.match(/<(.*)>(.*)<\/(.*)>|<(.*)\/>/)) {
    alert('Please input the right messgge!'); formobj.lytext.focus();
    return false;
  }
  else if (lytext.match(/\[url=http:(\S*?)[^>]*\].*?|\[\/url\]/)) {
    alert('Please input the right messgge!'); formobj.lytext.focus();
    return false;
  }
  else if (lytext.match(/\[link=http:(\S*?)[^>]*\].*?|\[\/link\]/)) {
    alert('Please input the right messgge!'); formobj.lytext.focus();
    return false;
  } else {
    return true;
  }

}

$(document).ready(function () {
  var newUrl = '/e/admin/member/SendEmail-TEST.php'
  $("#mbt").attr('action', newUrl);
  $("#proform").attr('action', newUrl);
  $("#hinquiry").click(function () {
    $("#inquiry").fadeIn(200);
  });

  $("#sendinquiry").click(function () {
    $("#inquiry").fadeIn(200);
  });
  $("#sendinquiry2").click(function () {
    $("#inquiry").fadeIn(200);
  });
  $("#sendwechat").click(function () {
    $("#Bywechat").fadeIn(200);
  });
  $("span.closefilter").click(function () {
    $(".filterbox").fadeOut(200);
  });
});

/*产品下拉*/
$(function () {
  var pull_bgh = $(".container").height() - $(".pull_nav h2").height() + 20;
  $(".pull_nav_bg").css("height", pull_bgh + 'px');

  $(document).on("click", ".pull_nav h2 a", function () {
    var answer = $(this).parent().next("ul");
    if (answer.is(":hidden")) {
      answer.stop(true, true).slideDown();
      $(".icon-jiantou_x").hide();
      $(".icon-jiantou_s").show();
      $(".pull_nav_bg").show();
    }
  });
  $('body').click(function () {
    $(".pull_nav ul").stop(true, true).slideUp();
    $(".icon-jiantou_x").show();
    $(".icon-jiantou_s").hide();
    $(".pull_nav_bg").hide();
  });
});

$(function () {
  /*菜单*/
  $(function () {
    $('nav#menu').mmenu({

      "extensions": [
        "pageshadow",
        "effect-panels-zoom"
      ],
      "offCanvas": {
        "position": "right"
      },
      slidingSubmenus: false
    }
    );
    var h = $(window).height();
    $(".mm-page").css("height", h);
  });
  $("#menu .sideMenu .side h3 em").each(function () {
    $(this).click(function () {
      $(this).toggleClass("on").closest(".side").siblings().find("em").removeClass("on");
      $(this).closest(".side").find("ul").slideToggle(500).parent().siblings().find("ul").slideUp(500);
    });
  });

  $(".sideMenu ul").each(function () {
    $(this).find("li:eq(0)").find("a").css("background", "none");
  });


  /*产品手风琴*/
  $(".advantage .panel h2").click(function () {
    $(this).toggleClass("active").parent().siblings().find("h2").removeClass("active");
    $(this).siblings(".panel_con").stop(true, true).slideToggle(500).parent().siblings().find(".panel_con").stop(true, true).slideUp(500);

    var navH = $(".advantage .panel:first-child h2").offset().top;
    var zkh = $(".panel_con").height();
    var headh = $(".header").height();
    var positionh = $(".bannerBox").height();
    var positionh2 = $(".info_left_box").height();
    var positionh3 = $(".info_right_box").height();
    var positionh4 = $(".related_products").height();
    var toph = headh + positionh + positionh2 + positionh3 + positionh4;
    if (zkh == 1) {
      $('body,html').animate({ scrollTop: navH - 18 }, 300);
    } else {
      $('body,html').animate({ scrollTop: toph + 10 }, 300);

    }
  });

});

