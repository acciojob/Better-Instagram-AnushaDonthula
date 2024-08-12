//your code here
const divs = document.querySelectorAll('.draggable');

// Store the dragged element
let draggedElement = null;

// Add event listeners to each div for drag-and-drop
divs.forEach(div => {
    // When dragging starts
    div.addEventListener('dragstart', (e) => {
        draggedElement = e.target;
        e.target.style.opacity = '0.5';
    });

    // When dragging ends
    div.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1';
    });

    // When an element is dragged over another
    div.addEventListener('dragover', (e) => {
        e.preventDefault(); // Necessary for the drop event to work
    });

    // When an element is dropped on another
    div.addEventListener('drop', (e) => {
        e.preventDefault();

        // Swap the background images of the dragged and dropped elements
        if (draggedElement !== e.target) {
            let temp = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = temp;
        }
    });
});