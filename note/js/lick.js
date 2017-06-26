$(function(){
	$("#server").click(function(){
		var timetxt=$("#timetxt").val();
		var txt=$("#txt").val(); 
		if(timetxt!=""&&txt!=""){
			if(localStorage.getItem("f")){
					 var obj=JSON.parse(localStorage.getItem("f"));
					 obj.push({time:timetxt,txt:txt});
					 localStorage.setItem("f",JSON.stringify(obj));
		} else{
			var arr=[{time:timetxt,txt:txt}];
			localStorage.setItem("f",JSON.stringify(arr));
		}
		window.location.href="index.html";
		}
		
	})
	
})
