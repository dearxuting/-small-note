$(function(){
	   $("#add").click(function(){
	   $(this).next().slideToggle();
	    })
	   
	   $("#show").click(function(){
	     			$("#person").animate({height:582+"px"});
	     			
	     		}); 
	     		$("section").click(function(){
	     			$("#person").animate({height:0});
	     		})
	  })