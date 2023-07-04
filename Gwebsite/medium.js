const menuItems = document.querySelectorAll('.menu-item');
const items = document.querySelectorAll('.item');
const logo = document.getElementById('logo');
const mainpageOverlay = document.getElementById('main-page-overlay');
// const pageOverlay = document.getElementById('page-overlay');

// pageOverlay.addEventListener('click', () => {
//   pageOverlay.classList.toggle('active');
// });
const coll = document.getElementsByClassName("arrow");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
      // content.style.flexFlow = "row";
    } else {
      content.style.display = "flex";
    }
  });
}


logo.addEventListener('click', () => {
  mainpageOverlay.classList.toggle('active');
});


menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    menuItem.classList.toggle('active');

    const activeTags = Array.from(menuItems)
      .filter(item => item.classList.contains('active'))
      .map(item => item.dataset.filter);

    items.forEach(item => {
      const itemTags = item.dataset.tags.split(' ');
      if (activeTags.length === 0 || activeTags.some(tag => itemTags.includes(tag))) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});