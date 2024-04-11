window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var headerOffset = header.offsetTop;
    var headerContent = header.querySelector('.header-content');
    var headerMenu = header.querySelector('.header-menu');

    if (window.pageYOffset > headerOffset) {
      header.classList.add('header-horizontal');
      headerContent.style.transform = 'skewY(0deg)';
      setTimeout(function() {
        headerMenu.style.display = 'block';
        headerMenu.style.opacity = '1';
      }, 500); // Show the menu with delay after header becomes horizontal
    } else {
      header.classList.remove('header-horizontal');
      headerContent.style.transform = 'skewY(10deg)';
      headerMenu.style.display = 'none';
      headerMenu.style.opacity = '0';
    }
  });