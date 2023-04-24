//Navbar stick on Scroll
window.onscroll = function () { myFunction() };


var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function changecolor() {
  var ch = document.getElementById("container_head");
  ch.classList.toggle("c-h");
  var cl = document.getElementById("container_leg");
  cl.classList.toggle("c-l");
  var nb = document.getElementById("navbar");
  nb.classList.toggle("nb");
  var bam = document.getElementById("box_aboutme");
  bam.classList.toggle("bam");
  var btnam = document.getElementById("button_aboutme");
  btnam.classList.toggle("btnam");
  var prj = document.getElementById("project");
  prj.classList.toggle("prj");
  var prj1 = document.getElementById("project1");
  prj1.classList.toggle("prj1");
  var prj2 = document.getElementById("project2");
  prj2.classList.toggle("prj2");
  var prj3 = document.getElementById("project3");
  prj3.classList.toggle("prj3");
  var pf = document.getElementById("platform");
  pf.classList.toggle("pf");
  var sf = document.getElementById("support_footer");
  sf.classList.toggle("sf");
  var sm = document.getElementById("social_media");
  sm.classList.toggle("sm");
  var apb = document.getElementById("allprojectbutton");
  apb.classList.toggle("apb");
  var fsvg = document.getElementById("footer_svg");
  fsvg.classList.toggle("fsvg");
  var fsg = document.getElementById("firstSVG");
  fsg.classList.toggle("fsg");
  var ssvg = document.getElementById("secondSVG");
  ssvg.classList.toggle("ssvg");
  document.body.classList.toggle('bdy');
}