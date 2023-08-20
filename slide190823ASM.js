let slideIndices = [1, 1, 1, 1, 1]; // Keep track of slide index for each container

function showSlides(containerIndex, n) {
  const slides = document.querySelectorAll('.slideshow-container')[containerIndex].querySelectorAll('.slide');
  
  if (n > slides.length) {
    slideIndices[containerIndex] = 1;
  } else if (n < 1) {
    slideIndices[containerIndex] = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndices[containerIndex] - 1].style.display = 'block';
}

function changeSlide(n, containerIndex) {
  showSlides(containerIndex, slideIndices[containerIndex] += n);
}

function autoSlide(containerIndex) {
  changeSlide(1, containerIndex);
  setTimeout(() => autoSlide(containerIndex), 3000); // Change image every 3 seconds
}

for (let i = 0; i < slideIndices.length; i++) {
  showSlides(i, slideIndices[i]);
  autoSlide(i);
}
