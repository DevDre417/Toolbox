const nav = document.querySelector('#nav-links')
const burg = document.getElementById('burger');
burg.onclick = () => {
document.body.style = "overflow-x: none";
nav.style = "transform: translateX(0%); "
}