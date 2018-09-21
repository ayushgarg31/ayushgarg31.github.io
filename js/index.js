function topbar() {
  if (window.pageYOffset >= window.innerHeight) {
    navbar.style.visibility="visible";
  } else {
  	navbar.style.visibility="hidden";
  }
}