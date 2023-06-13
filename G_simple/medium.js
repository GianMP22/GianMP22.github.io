const menuItems = document.querySelectorAll('.menu-item');
const items = document.querySelectorAll('.item');
const logo = document.getElementById('logo');
const pageOverlay = document.getElementById('page-overlay');

logo.addEventListener('click', () => {
  pageOverlay.classList.toggle('active');
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