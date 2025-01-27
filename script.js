const nav = document.querySelector('nav');

if (nav) {
  const navHeight = nav.offsetHeight;
  let isScrolled = false;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > navHeight;
    if (scrolled !== isScrolled) {
      nav.classList[scrolled ? 'add' : 'remove']('scrolled');
      isScrolled = scrolled;
    }
  });
} else {
  console.error('nav element not found!');
}


