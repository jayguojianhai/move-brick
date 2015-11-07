/**
 * index.js
 * @authors tammy (http://tammylights.com)
 * @date    2015-11-06 16:03:47
 * @version 1.0
 */
window.onload = function () {
	var client = new ZeroClipboard(document.getElementById("clickMe"), {
		moviePath: "ZeroClipboard.swf"
	});

	client.on("load", function (client) {
		client.on("complete", function (client, args) {
			console.log(client);
			console.log(args);
			alert(args.text);
		});
	});
};