const projectList = [
    {
        title: 'ReTrove',
        description: 'A second-hand hub for UofT students.',
        tools: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        date: '2024-12-06',
        image: '/assets/img/retrove.png',
        githubLink: 'https://github.com/fuyamaoka',
    },
    {
        title: 'AI Instrument Identifier in Music',
        description: 'An AI model used to Identify Instrumments in music.',
        tools: ['Python (Pytorch)'],
        date: '2024-08-14',
        image: '/assets/img/project-music-player.png',
        githubLink: 'https://github.com/fuyamaoka/APS360-Project',
    },
    {
        title: 'Navigational Map',
        description: 'An interactive map with many features.',
        tools: ['C++'],
        date: '2024-04-18',
        image: '/assets/img/navigational-map.png',
        githubLink: 'https://github.com/fuyamaoka',
    },
    {
        title: 'Drawing Animator',
        description: 'A NIOS II program for drawing and animating.',
        tools: ['C', 'Assembly'],
        date: '2024-04-01',
        image: '/assets/img/drawing-animator.png',
        githubLink: 'https://github.com/BasilAwwad1/ECE243-Project',
    },
    {
        title: 'Maze Game',
        description: 'Fully controlled maze puzzle game.',
        tools: ['Verilog', 'Quartus'],
        date: '2023-12-05',
        image: '/assets/img/maze-game.png',
        githubLink: 'https://github.com/BasilAwwad1/ECE243-Project',
    }
];

// Sort projects by date, most recent first
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

// Select the projects container in the HTML
const projectContainer = document.getElementById('projects-container');
const loadMore = document.getElementById('load-more');

// Function to generate project HTML
function generateProjectHTML(project) {
    return `
      <div class="col s12 m6 l4">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img alt="${project.title}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
            <p>${project.description}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
            <ul>
              <li><b>Tools:</b> ${project.tools.join(', ')}</li>
            </ul>
            <div class="card-action">
              <a aria-label="Visit the GitHub repo for project" href="${project.githubLink}" target="_blank" data-position="top" data-tooltip="View Source" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
}

projectContainer.innerHTML = generateProjectHTML(projects[0]);

function loadMoreProjects() {
    for (let i = 1; i < projects.length; i++) {
        projectContainer.innerHTML += generateProjectHTML(projects[i]);
    }

    loadMore.style.display = 'none';
}

loadMore.addEventListener('click', loadMoreProjects);