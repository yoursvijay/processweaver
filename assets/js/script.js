//video popup
 $(".ss-popup").click(function () {
    $("#video-view").show();
    var $this = $(this);
  var autoplay = "&amp;autoplay=1"
    var $iframe = $("<iframe>").attr("src", ($this.data("link") + autoplay)).css({"width": 695, "height": 400});
    var $title = $("<h1>").text($this.data("title"));
    $("#video-view").append($iframe);
    $iframe.wrap("<div class='class-video'>");
    });

   $(".close-video").click(function () {
	$("#video-view").hide();
  $("#video-view iframe").attr("src", "");
});

$("#video-view .overlay").click(function () {
	$("#video-view").hide();
});
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("shadowHeader");
    }
    else {
        $("#header").removeClass("shadowHeader");
    }
});
$(document).ready(function () {
   $(document).on('click', '.MenuIconWidth', function () {
       $(this).toggleClass('menuIconActive');
       if($(this).hasClass('menuIconActive')){
       $('.MenuIconToggle').css("width","25px");
       }
       else{
            $('.MenuIconToggle').css("width","20px");
       }
   })
});