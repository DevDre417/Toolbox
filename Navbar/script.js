

const navSlide = () => {
  const burg = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links')

  burg.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
  });
  
}

navSlide();