! function(t) {
	"use strict";
	! function(e) {
		var n = window,
			s = document,
			i = t,
			r = "".concat("https:" === s.location.protocol ? "https://" : "http://", "sdk.51.la/js-sdk-pro.min.js"),
			c = s.createElement("script"),
			o = s.getElementsByTagName("script")[0];
		c.type = "text/javascript", c.setAttribute("charset", "UTF-8"), c.async = !0, c.src = r, c.id = "LA_COLLECT", i
			.d = c;
		var a = function() {
			n.LA.ids.push(i)
		};
		n.LA ? n.LA.ids && a() : (n.LA = t, n.LA.ids = [], a()), o.parentNode.insertBefore(c, o)
	}()
}({
	id: "JfXLqaE7jjMvnMIm",
	ck: "JfXLqaE7jjMvnMIm"
}),
function(t, e, n, s) {
	var i = e.createElement("script"),
		r = e.getElementsByTagName("script")[0];
	i.type = "text/javascript", i.crossorigin = !0, i.onload = function() {
		(new t[s].Monitor).init({
			id: "JjyTlfI2KkqlOVNL"
		})
	}, r.parentNode.insertBefore(i, r), i.src = n
}(window, document, "https://sdk.51.la/perf/js-sdk-perf.min.js", "LingQue");
