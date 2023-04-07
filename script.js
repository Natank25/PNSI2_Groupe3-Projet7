// Wait for the animation to complete
document.querySelector('.load-from-left').addEventListener('animationend', function() {
    // Add a class to trigger the zoom-in effect on hover
    this.classList.add('zoom-in');
  });
  