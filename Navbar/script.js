const navslide = () => {
  const burg = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burg.addEventListener('click', () => {
    nav.classList.toggle("nav-active");
  });
  
}

navslide();