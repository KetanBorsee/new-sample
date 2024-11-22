//about section//////////////////

document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector('.image-content');
    const secondaryImage = document.querySelector('.secondary-image');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(mainImage);
    observer.observe(secondaryImage);
  });
  
  