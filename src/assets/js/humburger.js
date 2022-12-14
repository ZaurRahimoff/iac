var hamburgerTog = $("[data=hamburger-menu]");
var Line1 = hamburgerTog.find(".line:nth-child(1)");
var Line2 = hamburgerTog.find(".line:nth-child(2)");
var Line3 = hamburgerTog.find(".line:nth-child(3)");

hamburgerTog.click(function () {
  $(this).toggleClass("active");

  if (hamburgerTog.hasClass("active")) {
    Line1.velocity({ top: "50%" }, { duration: 200, easing: "swing" });
    Line3.velocity({ top: "50%" }, { duration: 200, easing: "swing" })
      .velocity({ rotateZ: "90deg" }, { duration: 800, delay: 200, easing: [500, 20] });
    hamburgerTog.velocity({ rotateZ: "135deg" }, { duration: 800, delay: 200, easing: [500, 20] });
  } else {
    hamburgerTog.velocity("reverse");
    Line3.velocity({ rotateZ: "0deg" }, { duration: 800, easing: [500, 20] })
      .velocity({ top: "100%" }, { duration: 200, easing: "swing" });
    Line1.velocity("reverse", { delay: 800 });
  }
});
