// Select the Skills section, Toggle button, and the skills list
const skillsSection = document.getElementById('skills');
const toggleSkillsButton = document.getElementById('toggle-skills-btn');
const addSkillButton = document.getElementById('add-skill-btn');
const skillsList = document.getElementById('skills-list');

// Array of skills to be added
const defaultSkills = ["Communication", "Problem Solving", "Leadership"];

// Function to add default skills
const addDefaultSkills = () => {
    if (skillsList) {
        // Clear existing skills before adding
        skillsList.innerHTML = '';
        defaultSkills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    }
};

// Event listener for toggling visibility of Skills section
toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection) {
        // Toggle visibility of the skills section
        const isHidden = skillsSection.style.display === 'none';
        skillsSection.style.display = isHidden ? 'block' : 'none';

        // Change button text based on the visibility
        toggleSkillsButton.textContent = isHidden ? 'Hide Skills' : 'Show Skills';
    }
});

// Event listener for adding default skills
addSkillButton?.addEventListener('click', () => {
    addDefaultSkills();
});
