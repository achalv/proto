// Cache queries 
var btn_group_large = $(".btn-group");
var btn_group_small = $(".btn-group-small");
var btn_small       = $(".small");
var compose_btn     = $(".btn-compose");

// Reversing the order of the .small nodes so we can animate up and down on hover
var btn_small_reverse = $((btn_small).get().reverse());

$(document).ready(function(){
    btn_group_large.on('mouseenter', function(){
        btn_small_reverse.each(function(i){
          var button = $(this);
          setTimeout(function() {
              button.addClass('animated');
          },50*i);
        });
    });
    
    btn_group_large.on('mouseleave', function(){
        btn_small.each(function(i){
          var button = $(this);
          setTimeout(function() {
              button.removeClass('animated');
          },50*i);
        });
    });                
});
