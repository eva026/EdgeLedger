const navbar = document.getElementById('navbar');
let scrolled = false;

// Navbar background transparent or not
window.onscroll = function () {
  if (this.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = true;
  }
};
