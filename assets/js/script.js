$(document).ready(function() {
  "use strict";
  // Scroll to top
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Smooth scroll
  $('a.scroll-to').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 700);
    event.preventDefault();
  });

  $('.site-background-item').on('mouseenter', function(){
    $('.site-background-item').addClass('inactive');
    $(this).removeClass('inactive').addClass('active');
  });
  $('.site-background-item').on('mouseleave', function(){
    $('.site-background-item').removeClass('inactive');
    $('.site-background-item').removeClass('active');
  });

  // About Me Skillbar Animation
	$('.skill h3').waypoint({
		handler: function (direction) {
			if (direction == "up") {
				$('.skillbar').each(function () {
					$(this).find('.skillbar-bar').css("width", "0");
				});
			} else if (direction == "down") {
				$('.skillbar').each(function () {
					$(this).find('.skillbar-bar').animate({
						width: jQuery(this).attr('data-percent')
					}, 2000);
				});
			}
		},
		offset: 'bottom-in-view'
	});
});

$(window).on('scroll', function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $('.site-navigation').addClass('nav-bg');
  } else {
    $('.site-navigation').removeClass('nav-bg');
  }
});

var vh = $(window).height();
if (navigator.userAgent.indexOf('Opera Mini') != -1) {
  // Setting Fun Facts Value Immediately 
  work.start();
  happyClient.start();
  projects.start();
  coffee.start();
  // Setting Skillbar Value Immediately
  $('.skillbar').each(function () {
    $(this).find('.skillbar-bar').animate({
      width: jQuery(this).attr('data-percent')
    }, 0);
  });
  // Removing Bootstrap Class and Re-Style Input
  $("input").removeClass("form-control");
  $("input").css({
    "width": "100%",
    "height": "50px",
    "background": "#fff"
  });
  // Removing Full-Screen Nav
  $(".navigation-icon").css("display", "none");
}

// Code For UC Browser
if (navigator.userAgent.indexOf('UCBrowser') != -1) {
  // Removing Full-Screen Nav
  $(".navigation-icon").css("display", "none");
  $(".fun-facts").css({
    "display": "table",
    "margin": "auto"
  });
  // Setting Fun Facts Value Immediately 
  work.start();
  happyClient.start();
  projects.start();
  coffee.start();
  // Setting Skillbar Value Immediately
  $('.skillbar').each(function () {
    $(this).find('.skillbar-bar').animate({
      width: jQuery(this).attr('data-percent')
    }, 0);
  });
}
