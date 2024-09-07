// Select the Skills section, Toggle button, and the skills list
var skillsSection = document.getElementById('skills');
var toggleSkillsButton = document.getElementById('toggle-skills-btn');
var addSkillButton = document.getElementById('add-skill-btn');
var skillsList = document.getElementById('skills-list');
// Array of skills to be added
var defaultSkills = ["Communication", "Problem Solving", "Leadership"];
// Function to add default skills
var addDefaultSkills = function () {
    if (skillsList) {
        // Clear existing skills before adding
        skillsList.innerHTML = '';
        defaultSkills.forEach(function (skill) {
            var li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    }
};
// Event listener for toggling visibility of Skills section
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection) {
        // Toggle visibility of the skills section
        var isHidden = skillsSection.style.display === 'none';
        skillsSection.style.display = isHidden ? 'block' : 'none';
        // Change button text based on the visibility
        toggleSkillsButton.textContent = isHidden ? 'Hide Skills' : 'Show Skills';
    }
});
// Event listener for adding default skills
addSkillButton === null || addSkillButton === void 0 ? void 0 : addSkillButton.addEventListener('click', function () {
    addDefaultSkills();
});
