var viewportWidth, divWidth, tb;
	$(function() {
		
		viewport = $('#container').innerWidth();
		tb = $('#thumbs');
		divWidth = tb.outerWidth() +200;
    
		$('#container').mousemove(function(e)
		{
      tb.css({left: ((viewport - divWidth)*((e.pageX / viewport).toFixed(3))).toFixed(1) +"px" });
         });
    

    $('.history-block').click(function() {
        var clicks = $(this).data('clicks');
        if (!clicks) {

            $(this).siblings().css('width', '300px');
      $(this).siblings().find('.title').css('width', '260px');
       $(this).siblings().find('.timeline').hide(300);
        $(this).css('width', '600px');
        $(this).find('.title').css('width', '500px');
       $(this).find('.timeline').show(200);
     
       $('#container').mousemove(function(e)
		{
      tb.css({left: ((viewport - divWidth)*((e.pageX / viewport).toFixed(3))).toFixed(1) +"px" });
         });
           // odd clicks
        } else {
            $(this).css('width', '300px');
            $(this).find('.title').css('width', '260px');
            $(this).find('.timeline').hide(20);
           
         $('#container').mousemove(function(e)
         {
           tb.css({left: ((viewport - divWidth-300)*((e.pageX / viewport).toFixed(3))).toFixed(1) + 300 + "px" });
           });

           // even clicks
        }
        $(this).data("clicks", !clicks);
      });

   
    
    
});