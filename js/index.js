function topbar() {
  if (window.pageYOffset >= 1.03*window.innerHeight) {
    navbar.style.visibility="visible";
  } else {
  	navbar.style.visibility="hidden";
  }
}