// Allow dropping elements
function allowDrop(event) {
    event.preventDefault();
}

// Start dragging an element
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Drop an element into a box
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggableElement = document.getElementById(data);
    var targetBox = event.target.closest('.box');
    if (targetBox) {
        targetBox.appendChild(draggableElement);
    }
}

// Return an element back to options
function returnToOptions(event) {
    var targetBox = event.target.closest('.box');
    if (targetBox) {
        var optionBox;
        if (targetBox.id === 'healthy') {
            optionBox = document.getElementById('healthy-options');
        } else {
            optionBox = document.getElementById('junk-options');
        }
        optionBox.appendChild(targetBox.removeChild(event.target));
    }
}

// Add double click event to return option
var boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('dblclick', returnToOptions);
});

// Start dragging an option back
var options = document.querySelectorAll('.option');
options.forEach(option => {
    option.setAttribute('draggable', true);
    option.addEventListener('dragstart', drag);
});
