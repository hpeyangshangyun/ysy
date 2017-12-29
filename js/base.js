//页面加载时，加载
window.onload=function(){
	
}



//jquery正则表达式解析url，通过url获取参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

// 打开新的窗口
function openWin(url){
	window.open(url)
}
