 var Time=document.getElementById("Time");
		   var thing=document.getElementById("thing");
    	   function t() {
				var today=new Date();
				var month=today.getMonth()+1;
				var year, date;
				var week=new Array();
				week[0]="星期天 ";
				week[1]="星期一 ";
				week[2]="星期二 ";
				week[3]="星期三 ";
				week[4]="星期四 ";
				week[5]="星期五 ";
				week[6]="星期六 ";
				year=today.getFullYear();
				date=today.getDate();
				timeString="今天是："+year+"年"+month+"月"+date+"日 "+week[today.getDay()];
				Time.innerHTML= timeString;
				window.setTimeout("t()", 1000);
				}
				window.onload = t;