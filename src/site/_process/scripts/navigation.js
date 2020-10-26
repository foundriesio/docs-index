{
  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      const button = this,
        menu = document.getElementById(button.dataset.target);

      button.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }
}

const matchCantHover = matchMedia('(hover: none)');
const matchDesktopSize = matchMedia('(min-width: 1024px)');

// Configures 'click' action instead of hover for touch devices
const navbar = document.querySelector('.navbar');
navbar.addEventListener('click', e => {
  if (
    matchCantHover.matches === true
    && matchDesktopSize.matches === true
    && e.target.closest('.navbar-item').classList.contains('has-dropdown')
  ) {
    e.preventDefault();
  }
});
