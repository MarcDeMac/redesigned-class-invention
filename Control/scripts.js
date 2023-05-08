// Get all the shape elements
const shapes = document.querySelectorAll('.shape');

// Loop through the shape elements and add event listeners for drag and drop
shapes.forEach(shape => {
  // Set the starting X and Y coordinates
  let startX = 0, startY = 0;

  // Add event listener for mouse down event
  shape.addEventListener('mousedown', e => {
    // Get the current mouse position
    startX = e.clientX;
    startY = e.clientY;

    // Set the element as being dragged
    shape.classList.add('dragging');
  });

  // Add event listener for mouse up event
  shape.addEventListener('mouseup', e => {
    // Remove the dragging class from the element
    shape.classList.remove('dragging');
  });

  // Add event listener for mouse move event
  shape.addEventListener('mousemove', e => {
    // If the element is being dragged
    if (shape.classList.contains('dragging')) {
      // Calculate the distance moved
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // Get the current element position
      const left = parseInt(window.getComputedStyle(shape).getPropertyValue('left'));
      const top = parseInt(window.getComputedStyle(shape).getPropertyValue('top'));

      // Set the new element position
      shape.style.left = `${left + dx}px`;
      shape.style.top = `${top + dy}px`;

      // Update the starting coordinates
      startX = e.clientX;
      startY = e.clientY;
    }
  });
});
