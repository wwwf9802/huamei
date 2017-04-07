function openNew(url) {
	if(!mui.os.plus) {
		location.href = url;
		return;
	}

	var webview = plus.webview.create(url, url);
	webview.addEventListener("titleUpdate", function() {
		setTimeout(function() {
			webview.show("pop-in", 200);
		}, 10);
	});
}
