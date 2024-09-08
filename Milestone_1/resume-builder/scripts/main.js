document.addEventListener("DOMContentLoaded", function () {
    // Function to handle toggle
    var handleToggle = function (button, sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            if (section.style.display === 'none') {
                section.style.display = 'block';
                button.textContent = 'Hide';
            }
            else {
                section.style.display = 'none';
                button.textContent = 'Show';
            }
        }
    };
    // Get all toggle buttons and set up event listeners
    var toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var targetId = button.getAttribute('data-target');
            if (targetId) {
                handleToggle(button, targetId);
            }
        });
    });
    // Initialize sections to be visible by default
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.display = 'block';
    });
});
