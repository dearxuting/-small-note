	var obj=JSON.parse(localStorage.getItem("f"));
	     	
	           var s=[];
	     	    for(var i=0;i<obj.length;i++){
	     	   
	     	     s+="<li>"+obj[i].time+"<span>"+obj[i].txt+"</span>"+"</li>";	
	     	    }
	     	    var html=$(".slist").html();
	     	    html=html+s;
	     	    $(".slist").html(html);
	 