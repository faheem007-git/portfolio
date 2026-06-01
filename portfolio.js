// SKILLS SECTION

const skills = document.querySelectorAll('.skill-item');

const skillTitle = document.getElementById('skill-title');

const skillDescription = document.getElementById('skill-description');

const skillContent = document.getElementById('skill-content');

const defaultContent = document.getElementById('default-content');

skills.forEach(skill => {

    skill.addEventListener('click', () => {

        skills.forEach(item => item.classList.remove('active'));

        skill.classList.add('active');

        const title = skill.getAttribute('data-title');

        const description = skill.getAttribute('data-description');

        skillTitle.innerText = title;

        skillDescription.innerText = description;

        defaultContent.style.display = 'none';

        skillContent.style.display = 'block';

    });

});