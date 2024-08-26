$(document).ready(function(){
$( ".sopen a").click(function() {
$( ".srchtoggle").fadeToggle("slow");
});	
$(".news .toggle").click(function(){
$(".vticker ul").toggleClass("scroll");
});	
$('table').wrap('<div class="table-responsive">');	
$("table").addClass("table table-bordered table-striped")
$(".removetblclass table").removeClass("table table-bordered table-striped")	
$("ul.entender").addClass("newsscroll")
$(".sitemap ul").removeClass("nav navbar-nav")
$(".sitemap li").removeClass("dropdown")
$(".sitemap li").removeClass("dropdown-submenu")
$(".sitemap li a").removeClass("dropdown-toggle")
$(".sitemap ul ul").removeClass("dropdown-menu")
$(".sitemap ul").removeAttr("id","menu")
$(".menu ul").removeClass("nav navbar-nav")
$(".menu > ul").addClass("righ-menu")
$(".menu li").removeClass("dropdown")
$(".menu li a").removeClass("dropdown-toggle has-submenu")
$(".menu li a").removeAttr("id")
$(".menu li a").removeAttr("aria-haspopup")
$(".menu li a").removeAttr("aria-expanded")
$(".menu li a").removeAttr("aria-controls")
$(".menu ul").removeAttr("id")
$(".menu ul").removeAttr("data-smartmenus-id")
$(".menu ul").removeAttr("aria-labelledby")
$(".menu ul").removeAttr("aria-expanded")
$(".menu ul ul").removeClass("dropdown-menu")
$(".menu ul ul").removeAttr("role","group")
$(".menu ul ul").removeAttr("aria-hidden","true")
$(".menu ul li a").removeClass("dropdown-toggle has-submenu") 

if($.cookie("css")) {
$("#MSS").attr("href",$.cookie("css"));
}
$(".defTheme").click(function() { 
$("#MSS").attr("href",$(this).attr('href'));
$.cookie("css",$(this).attr('href'));
return false;
});	
$(".hi-btn").click(function () {
        var cfrm = confirm("आपको नवीन ओखला औद्योगिक विकास प्राधिकरण, उत्तर प्रदेश सरकार, भारत की वेबसाइट के हिंदी संस्करण पर हस्तानांतरित किया जा रहा है");
        if (cfrm == true) {
            window.location(this.window.url + "/hi");
            return true;
        }
        else if (cfrm == false) {
            return false;
        }
        //alert(crm);
    });

    var comp = new RegExp(location.host);
    $('a').each(function () {
        if (comp.test($(this).attr('href'))) {
            // a link that contains the current host 
            $(this).addClass('local');
        }
        else {
            // a link that does not contain the current host
            $(this).addClass('external');
        }
    });

    $('a').filter(function () {
        return this.hostname && this.hostname !== location.hostname;
    })
    .click(function () {
        $(this).attr('target', '_blank');
        var x = window.confirm('You are about to leave the website of  New Okhla Industrial Development Authority, Uttar Pradesh, India and view the content of an external website..');
        var val = false;
        if (x)
            val = true;
        else
            val = false;
        return val;
    });



});
    var cmsResponsiveImages = function() {
		var $content = $(".inner-body");
		$content.find("img").addClass("img-responsive");
	};
$(window).scroll(function() {
var height = $(window).scrollTop();
if(height  > 132) {
$(".top-nav").addClass("menuFxd");
}
if(height  < 132) {
$(".top-nav").removeClass("menuFxd");
}

var height = $(window).scrollTop();
if(height  > 561) {
$(".profilemenu ").addClass("leftFxd");
}
if(height  < 561) {
$(".profilemenu").removeClass("leftFxd");
}
});
//////////////////////////////
 


//////////////////

 $(document).ready(function () {
$('.governorpic a .item a, footer a ').each(function(){
   $(this).attr('title',$(this).text());  //or use $.trim($(this).text()) to remove white spaces.
});
});

$(".thumbbtn").click(function(){
  $(".c-order").removeClass("univ-list");
  $(".c-order").addClass("univ-thumb");
});
$(".listbtn").click(function(){
  $(".c-order").removeClass("univ-thumb");
  $(".c-order").addClass("univ-list");
});
 
 //// Date Time Function
	
tday=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
tmonth=new Array("January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
if(nyear<1000) nyear+=1900;
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('datetime').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}

/////////// END HERE




$(".grid-stack img").each(function() {
var imageCaption = $(this).attr("title");
if (imageCaption != '') {
var imgWidth = $(this).width();
var imgHeight = $(this).height();
var position = $(this).position();
var positionTop = (position.top + imgHeight - 26);
$("<span class='title-caption'><em class='italic-none'>"+imageCaption+"</em></span>")
.css({})
.insertAfter(this);
}
});



//$(".title-caption em").each(function() {
//var num = $(this).html();
//var mnum = num.indexOf("/");
//var title = num.substr(mnum+1, num.length)
//$(this).html(title)
//});


$(".title-caption em").each(function() {
var num = $(this).html();
var mnum = num.indexOf("/");
var title = num.substr(0, mnum)
$(this).html(title)
});

