//---------location tabs
$(document).ready(function() {
  var open = false;
  $('.circle-bg').on('click', function() {
    if(open === false)
      {
       $(this).animate({
          height: '+=10px',
          width: '+=10px'
       }, 300);
        
     $('.outer-icons').animate({
         opacity: 1
        }, 1000);
        
     $('.icon').fadeOut();
     $(this).html("<i class = 'icon fa fa-times' style='display: none'> </i>");
     $('.icon').fadeIn();
        
        open = true;
      }
    
    else {
      $(this).animate({
        height: '-=10px',
        width: '-=10px'
      }, 200);
    
    $('.outer-icons').animate({
        opacity: 0
      }, 300);
      
    $('.icon').fadeOut();
     $(this).html("<i class = 'icon fas fa-share-alt' style='display: none'> </i>");
     $('.icon').fadeIn();
      
      open = false;
  } 
    
 });
  
});    
//---------End location tabs




//=========counter inview========
function inviewExample() {
     var $example = $('#inview-example');
     var inview;
     if ($example.length) {
       inview = new Waypoint.Inview({
         element: $('#inview-example')[0],
         entered: function(direction) {
        	 $('.timer').each(function () {
          	   var $this = $(this);
          	   var val = $(this).data('count');
          	   jQuery({ Counter: 0 }).animate({ Counter: val }, {
          	     duration: 1000,
          	     easing: 'swing',
          	     step: function () {
          	       $this.text(Math.ceil(this.Counter));
          	     }
          	   });
          	 });
         }
       })
     }
 }
$(window).on('load', function() {
	inviewExample();
});

//=========End counter inview========








    
 
    
    














    