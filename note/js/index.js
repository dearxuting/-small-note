 $(function(){
	     	   	
	     	   	 var obj=JSON.parse(localStorage.getItem("f"));
	           var s="";
	     	    for(var i=0;i<obj.length;i++){
	     	    	if(s){
	     	    		  s+="<li>"+obj[i].time+"<span>"+obj[i].txt+"</span>"+"</li>";
	     	    	}
	     	    	else{s="<li>"+obj[i].time+"<span>"+obj[i].txt+"</span>"+"</li>";}
	     	    }
	     	    var html=$(".slist").html();
	     	    html=html+s;
	     	    $(".slist").html(html);
	     	    $(".slist li").on("tap",function(){
	     	    	var n=$(this).index();
	     	    	obj.splice(n,1);
	     	     if(confirm("是否删除？")){
	     	     localStorage.setItem("f",JSON.stringify(obj));
	     	     location.href="intro.html";
	     	     }
	     	    })
	     	    
 
   })