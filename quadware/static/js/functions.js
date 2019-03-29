function borrardiv(){
  var x = document.getElementById("fixed");
  if (x.hasAttribute("class")) {
    x.removeAttribute("class");

  }
  else{
    x.setAttribute("class", "navbar-fixed")
  }
}
