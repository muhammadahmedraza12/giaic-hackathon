document.addEventListener("DOMContentLoaded", () => {
    // Function to handle toggle
    const handleToggle = (button: HTMLElement, sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            if (section.style.display === 'none') {
                section.style.display = 'block';
                button.textContent = 'Hide';
            } else {
                section.style.display = 'none';
                button.textContent = 'Show';
            }
        }
    };

    // toggle buttons and event listeners
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            if (targetId) {
                handleToggle(button as HTMLElement, targetId);
            }
        });
    });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        (section as HTMLElement).style.display = 'block';
    });
});
