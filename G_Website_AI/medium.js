document.getElementById('menuButton').addEventListener('click', toggleMenu);

// Function to toggle the menu visibility
function toggleMenu() {
  var menuItems = document.getElementsByClassName('items');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('show');
  }
}