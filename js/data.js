const projects = [
    {
        name: "TaskFlow Pro",
        category: "web-app",
        image: "assets/project-images/1.png",
        description: "A collaborative project management tool...",
        technologies: ["Rails 7", "Hotwire", "PostgreSQL", "Stimulus JS"],
        liveDemo: "#",
        githubLink: "#",
        caseStudy: "case-study-1"
    },
    {
        name: "RESTful API Platform",
        category: "api",
        image: "assets/project-images/2.png",
        description: "A comprehensive API platform...",
        technologies: ["Rails API", "JWT", "Redis", "RSpec"],
        liveDemo: "#",
        githubLink: "#",
        caseStudy: "case-study-2"
    },
    {
        name: "ArtisanMarket",
        category: "e-commerce",
        image: "assets/project-images/3.png",
        description: "A marketplace platform for artisans...",
        technologies: ["Rails 6", "Stripe", "Elasticsearch", "AWS S3"],
        liveDemo: "#",
        githubLink: "#",
        caseStudy: "case-study-3"
    }
];

// Projects
const projectsContainer = document.getElementById("projectsContainer");
function displayProjects() {
    projectsContainer.innerHTML = "";

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.setAttribute("data-category", project.category);

        projectCard.innerHTML = `
      <div class="project-image">
        <div class="image-placeholder">
          <img src="${project.image}" alt="${project.name}">
        </div>
      </div>
      <div class="project-content">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.caseStudy ? `<button class="btn btn-small btn-case-study" data-modal="${project.caseStudy}">
            <i class="fas fa-file-alt"></i> Case Study
          </button>` : ""}
        </div>
      </div>
    `;
        projectsContainer.appendChild(projectCard);
    });
}
displayProjects();

// Projects Case Study Modals
const modalsContainer = document.getElementById("modalsContainer");
function generateCaseStudyModals() {
    projects.forEach(project => {
        if (project.caseStudy) {
            const modal = document.createElement("div");
            modal.id = project.caseStudy;
            modal.classList.add("case-study-modal");

            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="case-study-header">
                        <h2>${project.name}</h2>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
                        </div>
                    </div>
                    <div class="case-study-body">
                        <div class="case-study-image">
                            <div class="image-placeholder">
                                <img src="${project.image}" alt="${project.name}">
                            </div>
                        </div>
                        <div class="case-study-details">
                            <h3>Project Overview</h3>
                            <p>${project.description}</p>
                        </div>
                    </div>
                    <div class="case-study-footer">
                        <div class="project-links">
                            <a href="${project.liveDemo}" class="btn"><i class="fas fa-eye"></i> Live Demo</a>
                            <a href="${project.githubLink}" class="btn btn-secondary"><i class="fab fa-github"></i> View on GitHub</a>
                        </div>
                    </div>
                </div>
            `;

            modalsContainer.appendChild(modal);
        }
    });
}

generateCaseStudyModals();

