// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("小姐姐再考虑一下呗");
	   }else if(Dianji==2){
		   		alert("你是我见过的最帅气善良可爱的女孩");
		   		
	   }else if(Dianji==3){
		   		alert("一生一世爱你");
		   		
	   }else if(Dianji==4){
		   		alert("家务我全干");
		   		
	  }else if(Dianji==5){
		   		alert("不藏私房钱");
	  }else if(Dianji==6){
		   		alert("我还会做饭");
	  }else if(Dianji==7){
		   		alert("工资全上交");
		  		Dianji=1;
	  }
	  let data = {
	  	TA_action_on : 0,//为1时显示交互面板
	  	TA_title : "Ta不同意",//下行消息标题
	  	TA_content : "Ta不同意,要不你再努努力?",//下行消息内容，支持Markdown语法
	  }
	  $.post("../ftqq.php",data,function(rsp){
	  });

	}
	hao.onclick=function(){
		/* **方糖推送信息
		* 
		 */
		let data = {
			TA_action_on : 0,//为1时显示交互面板
			TA_title : "Ta答应你了",//下行消息标题
			TA_content : "恭喜!Ta在你发给Ta的页面答应了你,你们可能要在一起了~",//下行消息内容，支持Markdown语法
		}
		$.post("../ftqq.php",data,function(rsp){
			alert("小姐姐终于同意了，我爱你");
		});
		
	}
	

}