document.addEventListener('DOMContentLoaded', function() {
  const contactUsButton = document.querySelector('.contact-us');
  const contactFormPopup = document.getElementById('contact-form-popup');
  const contactForm= document.getElementById('contact-form');

  contactUsButton.addEventListener('click', function(event) {
      event.stopPropagation();
      contactFormPopup.style.display = 'block'; // Show the pop-up
  });

  document.addEventListener('click', function(event) {
      if (!contactForm.contains(event.target) && !contactUsButton.contains(event.target)) {
          contactFormPopup.style.display = 'none'; // Hide the pop-up when clicking outside
      }
  });

  // Prevent closing popup when clicking inside the form
  contactForm.addEventListener('click', function(event) {
      event.stopPropagation();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = slider.children;
  const numVisible = 4;
  const slideWidth = slides[0].offsetWidth + 15;
  const totalSlides = slides.length;
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let slideInterval;

  function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[Math.floor(currentIndex / numVisible)].classList.add('active');
  }

  function moveToNextSlide() {
    currentIndex += numVisible;
    if (currentIndex + 5 >= totalSlides) {
      currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateDots();
  }

  function startSlideInterval() {
    slideInterval = setInterval(moveToNextSlide, 3000);
  }

  // Start sliding animation initially
  startSlideInterval();

  // Stop sliding animation when mouse enters slider
  slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  // Restart sliding animation when mouse leaves slider
  slider.addEventListener('mouseleave', () => {
    startSlideInterval();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      currentIndex = e.target.getAttribute('data-index') * numVisible;
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      updateDots();
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const myLink = document.getElementById('myLink');

  myLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of anchor tag
    window.open('https://www.fylehq.com/', '_blank'); 
  });
});

function changeImage(imageSrc) {
  document.getElementById('project-image').src = imageSrc;
}

function changeContent(element, imageSrc) {
  // Change the image
  changeImage(imageSrc);

  // Remove active class from all content elements
  var contents = document.getElementsByClassName('content');
  for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove('active');
  }

  // Add active class to the clicked content
  element.classList.add('active');
}
