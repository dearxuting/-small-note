$("#one")[0].addEventListener("touchstart",function(ev){
				ev.preventDefault();
			})
			$(function(){
				var n=0;
				var size=$("#list").find("li").length;
				var w=$(window).width();
					$("#one").on("swipeLeft",function(){
						n++;
						if(n>=size){
							n=size-1;
						}
						$("#list").css("-webkit-transform","translate3d("+(-n*w)+"px,0,0)");
					})
					
						$("#one").on("swipeRight",function(){
				               n--;
				              if(n<=0){
					             n=0;}
				$("#list").css("-webkit-transform","translate3d("+(-n*w)+"px,0,0)");
			})
						$("button").on("tap",function(){
							location.href="index.html";
						})
			 
			})
			