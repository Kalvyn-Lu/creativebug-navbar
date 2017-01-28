const bigLogoLink = '<a href="/"><img src="/ui/images/homev2/logo-red.png" alt="Creativebug"></img></a>';
const miniLogoLink = '<a href="/"><img src="/ui/images/homev2/mini-logo.jpg" class="mini-logo" alt="Creativebug"></img></a>';

const navStates = {SMALL:0, LARGE:1};

var navState = navStates.LARGE;

$(document).ready(function(){
  $('#mini-search').appendTo('.subjects');


  var scrollPosition = $(this).scrollTop();
  var offset = $('body').offset();
  if(scrollPosition > offset.top) shrinkNav();
  $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        if(navState != navStates.SMALL) {
          shrinkNav();
          navState = navStates.SMALL;
        }
       } else {
          if(navState != navStates.LARGE) {
            expandNav();
            navState = navStates.LARGE;
          }
       }
   });
});

function shrinkNav() {
  $('#topnav_search').addClass('hidden');
  $('#header').addClass('thin');
  $('#logo').html(miniLogoLink);
  $('#mini-search').removeClass('hidden');
}

function expandNav() {
  $('#topnav_search').removeClass('hidden');
  $('#header').removeClass('thin');
  $('#logo').html(bigLogoLink);
  $('#mini-search').addClass('hidden');
}