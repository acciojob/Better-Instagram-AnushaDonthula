//your code here
const draggables = document.querySelectorAll('.draggable');
const container = document.getElementById('container');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        e.target.classList.add('dragging');
        e.dataTransfer.setData('backgroundImage', e.target.style.backgroundImage);
    });

    draggable.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
});

container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
        container.appendChild(draggable);
    } else {
		const afterElementBg = afterElement.style.backgroundImage;
        afterElement.style.backgroundImage = e.dataTransfer.getData('backgroundImage');
        draggable.style.backgroundImage = afterElementBg;
        container.insertBefore(draggable, afterElement);
    }
});