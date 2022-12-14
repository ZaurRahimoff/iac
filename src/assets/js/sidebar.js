var drpDown = $(".event__select");
var drpToggle = drpDown.find("button");
var drpArrow = drpDown.find("button:after");

if (drpToggle.hasClass("show")) {
	drpArrow.css({"background-color": "yellow", "font-size": "200%", "translate": "rotate(-90deg)"});
	console.log(drpArrow);
}
