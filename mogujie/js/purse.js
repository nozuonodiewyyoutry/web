
$(document).ready(function(){
      $(".wallet_icon").mouseenter(function() {
          $(".widget_mtip").fadeIn(1000);
      }); 
      $(".widget_mtip").mouseleave(function() {
          $(".widget_mtip").fadeOut(1000);
      }); 
      $(".icon_close").click(function(){
          $(".pur_main_top").fadeOut();
          $(".pur_main_top").slideUp("fast")
      })  
      setInterval(function() {
            var now = (new Date()).toLocaleString();
            $('#current_time').text(now);
        }, 1000);
});
