

$(document).ready(function(){


  AOS.init();
    $('.download_wrapper > label').click(function(e){
        // 화살표를 180도 회전한다 
        $('.menu-icon-svg').toggleClass('open');
        // 리스트를 표시한다
        $('.download_wrapper > ul').toggleClass('open');
    
        

    });



  for (var i =0; i < 3; i++) {
      var card = $('div.items') .clone();
      card.appendTo('.items_container');
  } 

});
/*  */



