const menuItems = document.querySelectorAll('.filter-item');
const items = document.querySelectorAll('.project');

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