$(document).ready(function(){
	$("#sticker").sticky({topSpacing:0});
});

// scrolling animation
$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});

var progresshappened = false	// whether or not progress bars have been animated already
var hamburger = false	// whether or not the menu is hamburger collapsed

var aboutTop = $('#about').offset().top;
var experienceTop = $('#experience').offset().top;
var projectsTop = $('#projects').offset().top;
var contactTop = $('#contact').offset().top;

// change navbar color depending on secgion
$(window).scroll(function() {
	var s = $(window).scrollTop() + 30;
	
	if (!hamburger) {
		if (s >= aboutTop && s < experienceTop) {
			$("#myNavbar a").css("color", "#000");
			$("#myNavbar a:hover").css("color", "#000");
			$("#myNavbar .active a").css("color", "#2980B9");
			$(".navbar-default .navbar-toggle .icon-bar").attr("style", "background-color: #fff!important");
		} else if (s > contactTop) {
			$("#myNavbar a").css("color", "#fff");
			$("#myNavbar a:hover").css("color", "#000");
			$("#myNavbar .active a").css("color", "#2980B9");
			$(".navbar-default .navbar-toggle .icon-bar").attr("style", "background-color: #fff!important");
		} else {
			$("#myNavbar a").css("color", "#000");
			$("#myNavbar a:hover").css("color", "#000");
			$("#myNavbar .active a").css("color", "#2980B9");
			$(".navbar-default .navbar-toggle .icon-bar").attr("style", "background-color: #000!important");
			if ((s >= experienceTop && s < projectsTop) && (progresshappened == false)) {
				progressbaranim();
				progresshappened = true;
			}
		}
	}
});

// reset the top of each section when resizing window
$(window).resize(function(){
	aboutTop = $('#about').offset().top;
	experienceTop = $('#experience').offset().top;
	projectsTop = $('#projects').offset().top;
	contactTop = $('#contact').offset().top;
});

// animate all of the progress bars
function progressbaranim() {
    progressbarindiv(document.getElementById("cplusplus-bar"), 90);
    progressbarindiv(document.getElementById("python-bar"), 85);
	progressbarindiv(document.getElementById("php-bar"), 60);
	progressbarindiv(document.getElementById("html-bar"), 90);
	progressbarindiv(document.getElementById("rust-bar"), 80);
}

// start individual progress bars
function progressbarindiv(elem, finalwidth) {
	var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= finalwidth) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

// hamburger menu background color changes
$('#hamburger-menu').click(function () {
	if ($(this).hasClass("hamburger")) {	// if menu is open
		hamburger = true;
		$(".navbar").css("background-color", "#fff");
		$(this).removeClass("hamburger");
		$("#myNavbar a").css("color", "#000");
		$("#myNavbar a:hover").css("color", "#EF106D");
		$("#myNavbar .active a").css("color", "#EF106D");
		$(".navbar-default .navbar-toggle .icon-bar").attr("style", "background-color: #000!important");
    } else {
		hamburger = false;
		$(this).addClass("hamburger");
		setTimeout(function(){
			$(".navbar").css("background-color", "transparent");
		}, 200);
	}
});
