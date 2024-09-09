console.log("Welcome to CodePen Clone");
const sidebar = document.querySelector('.sidebar');
const navButtons = document.querySelectorAll('.nav-buttons button');

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
});