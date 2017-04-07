function openNew(url) {
	if(!mui.os.plus) {
		location.href = url;
		return;
	}
	if(plus.webview.getWebviewById(url)){
		return;
	}else{
		var webview = plus.webview.create(url, url);
		webview.addEventListener("titleUpdate", function() {
		setTimeout(function() {
			webview.show("pop-in", 200);
		}, 10);
		});
	}
}
