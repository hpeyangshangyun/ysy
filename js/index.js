

window.onload=function(){
	rightShow("./web/mine/noForget.html")
}

var config={
	leftNav: true,//左侧导航栏是否显示，默认为true，显示
}

// 左侧导航栏的收起与展开
function leftNav(item){
	console.log($(item).html())
	if(config.leftNav==true){
		// $("#leftNav").addClass("hidden");
		$("#leftNav .col-9").css("width",0)
		$("#leftNav").css("width","2%")
		$("#rightShow").css("width","98%");
		$(item).empty();
		$(item).html("<span>&#9758;</span>");//箭头向右
		$(item).parent().attr("title","点击手型，展开导航栏")
		config.leftNav=false;
	}else{
		$("#leftNav .col-9").css("width","90%");
		$("#leftNav").css("width","20%")
		$("#rightShow").css("width","80%");
		$(item).empty();
		$(item).html("<span>&#9756;</span>");//箭头向左
		$(item).parent().attr("title","点击手型，收回导航栏")
		config.leftNav=true;
	}
}
// 根据左侧的选择进行右侧显示区域的显示
function rightShow(url,item){
	$("#rightShow").load(url);
	changeNav(item);
}
// 左侧导航切换时的样式切换
function changeNav(item){
	$(item).parent().find("div").removeClass("navClick");
	$(item).addClass("navClick");
}