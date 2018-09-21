function topbar() {
  if (window.pageYOffset >= window.innerHeight) {
    navbar.classList.add("show");
    navbar.style.visibility="visible";
  } else {
  	navbar.style.visibility="hidden";
  	navbar.classList.add("show");
  }
}