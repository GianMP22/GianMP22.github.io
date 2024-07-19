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

//LOADING DIV WAITING TILL PAGE HAS ACTUALLY LOADED - DOESNT SEEM TO QUITE WORK WITH VIDEOS AND GIFS
  document.addEventListener("DOMContentLoaded", function() {
  var loadingDiv = document.getElementById('loading');

  // Show the loading div when the page is unloading
  window.addEventListener('beforeunload', function() {
      loadingDiv.style.display = 'flex';
  });


  // Hide the loading div after the entire page has loaded
  window.onload = function() {
      loadingDiv.style.display = 'none';
  };
});
function showLoading() {
  var loadingDiv = document.getElementById('loading');
  loadingDiv.style.display = 'flex';
}

//LOADING DIV FOR 3 SEC ALWAYS
// document.addEventListener("DOMContentLoaded", function() {
//   var loadingDiv = document.getElementById('loading');

//   // Hide the loading div after a fixed delay
//   setTimeout(function() {
//       loadingDiv.style.display = 'none';
//   }, 3000); // 3000 milliseconds = 3 seconds
// });

// function showLoading() {
//   var loadingDiv = document.getElementById('loading');
//   loadingDiv.style.display = 'flex';

//   // Hide the loading div after a fixed delay
//   setTimeout(function() {
//       loadingDiv.style.display = 'none';
//   }, 3000); // 3000 milliseconds = 3 seconds
// }

function adjustTitle() {
  const titleElement = document.querySelector('.title');
  if (window.innerWidth < 600) {
      titleElement.innerHTML = "Gian's<br>Portfolio"; // Use innerHTML to include <br>
  } else {
      titleElement.innerHTML = "Gian Morris-Perez's Portfolio"; // Use innerHTML to include <br>
  }
}

// Initial check
adjustTitle();

// Adjust title on window resize
window.addEventListener('resize', adjustTitle);


//menu filter mobile phone vs desktop issue
// document.addEventListener('DOMContentLoaded', () => {
//   const hoverSelectors = ['.filter-item', '.menu-item', '#logoButton', 'a']; // Add all selectors that use :hover

//   hoverSelectors.forEach(selector => {
//       const elements = document.querySelectorAll(selector);

//       elements.forEach(element => {
//           element.addEventListener('click', (event) => {
//               event.preventDefault();
//               // Toggle active class on the clicked element
//               if (element.classList.contains('hover')) {
//                   element.classList.remove('hover');
//               } else {
//                   elements.forEach(el => el.classList.remove('hover'));
//                   element.classList.add('hover');
//               }
//           });

//           element.addEventListener('touchstart', (event) => {
//               event.preventDefault();
//               if (element.classList.contains('hover')) {
//                   element.classList.remove('hover');
//               } else {
//                   elements.forEach(el => el.classList.remove('hover'));
//                   element.classList.add('hover');
//               }
//           });
//       });
//   });
// });