/* 
 Titu Mollick
 https://titumallick.com/  
 jQuary Plugin Website  
   */
jQuery(document).ready(function($) {
  // Start Header Section> SnazzyMenu initialize Js 
  jQuery('.snazzymenu').snazzyMenu({
    sticky: true,
    theme: 'dark',
    phoneBtn: '888-888-8888',
    locationBtn: 'https://goo.gl/maps/r67upT9SLPFjGNbbA',
    colClasses: true,
  });
  
  // Add custom images Header Section 
  jQuery('.column-1').prepend('<img src="assets/images/tech1.jpg">');
  jQuery('.column-2').prepend('<img src="assets/images/tech2.jpg">');
  jQuery('.column-3').prepend('<img src="assets/images/tech3.jpg">');
  jQuery('.column-4').prepend('<img src="assets/images/tech4.jpg">');
  jQuery('.column-5').prepend('<img src="assets/images/nature1.jpg">');
  jQuery('.column-6').prepend('<img src="assets/images/nature2.jpg">');
  jQuery('.column-7').prepend('<img src="assets/images/nature3.jpg">');
  jQuery('.column-8').prepend('<img src="assets/images/nature4.jpg">');
  jQuery('.column-9').prepend('<img src="assets/images/nature5.jpg">');
  jQuery('.column-10').prepend('<img src="assets/images/nature6.jpg">');
  jQuery('.column-11').prepend('<img src="assets/images/nature7.jpg">');
  jQuery('.column-12').prepend('<img src="assets/images/nature8.jpg">');
  jQuery('.column-13').append('<img src="assets/images/nature7.jpg">');
  jQuery('.column-14').append('<img src="assets/images/tech1.jpg">');
  jQuery('.column-15').append('<img src="assets/images/nature4.jpg">');
  // Add image responsive class
  jQuery('.column-title img').addClass('img-resp');

  // homeBtn: '<svg xmlns="http://www.w3.org/" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>'
});
  jQuery('#year').text(new Date().getFullYear());
// End Header Section> SnazzyMenu initialize Js 

$(document).ready(function(){
  // Start Hero Part> Infinite Automatic Scroller Js 
  $('.scroll6').infiniteslide({
    // up/down/left/right
    'direction': 'left',
    'speed': 100,
    'pauseonhover': true,
    'responsive': true, // default: false
    'clone': 1
  });
  // End Hero Part> Infinite Automatic Scroller Js 

  // Start About Part> Fade Slide Scrolling Js 
  $('#rightToLeft').fuwatto({ 
    // default: 2000
    duration: 3000 ,
    slide: 'left-right',
    distance: 600,
    adjustment: {
      top: 0,
      left: 0,
    },
  });
  $('#leftToRight').fuwatto({ 
    // default: 2000
    duration: 3000 ,
    slide: 'right-left',
    distance: 600,
    adjustment: {
      top: 0,
      left: 0,
    },
  });
  // End About Part> Fade Slide Scrolling Js 

  // Start Portfolio Part>  Js 
  jQuery(function() {
    jQuery('ul.da-thumbs > li').hoverdir();
  });
  // Start Testimonial Part> Responsive Testimonials for jQuery

})

  // Start Services Part> Circle Progress Bar Js 
  function Circlle(el){
    $(el).circleProgress({fill: {color: '#019F9A'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
      $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
    });
  };
  Circlle('.round');
  // End Services Part> Circle Progress Bar Js 

/* 
 Titu Mollick
 https://titumallick.com/  
 jQuary Plugin Website  
 */

