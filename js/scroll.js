$(document).ready(function(){
	$(window).scroll(function(){ 
	  var top = $(window).scrollTop(); 
		 
	  if(top > 480){ 
		 
		  $(".seta").show(); 
	  }else{
		  $(".seta").hide();
	  }
	}); 
});