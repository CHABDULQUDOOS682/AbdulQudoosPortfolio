import emailJSConfig from "./config.js";
const projects = [
    // "web-app","api","e-commerce"
    {
        name: "Experfy",
        category: "api",
        image: "assets/project-images/Experfy.png",
        description: "Experfy is a technical hiring platform where I work as a Backend Developer, primarily focused on building and maintaining scalable API services that power the platform's core functionality.",
        technologies: ["Ruby", "Ruby on Rails", "Sinatra", "PostgreSQL", "MongoDB"],
        liveDemo: "https://temp.experfy.com/",
        githubLink: "CompanyBase",
        caseStudy: "experfy"
    },
    {
        name: "Tourcrib",
        category: "api",
        image: "assets/project-images/Tourcrib.png",
        description: "Tourcrib is french event organization website, responsible for creating new feature of integration of whatsapp for send messages and and reminders.",
        technologies: ["Ruby on Rails", "Third Party APIs", "Stripe"],
        liveDemo: "https://tourcrib.com/en",
        githubLink: "CompanyBase",
        caseStudy: "Tourcrib"
    },
    {
        name: "Momentum Education",
        category: "web-app",
        image: "assets/project-images/Momentum Education.png",
        description: "Responsible for developing and implementing new features based on client requirements, while also managing and maintaining the website. Utilized technologies such as Ruby on Rails, HTML, SCSS, Sidekiq, SendGrid, Twilio, and PostgreSQL to ensure seamless functionality and performance.",
        technologies: ["Rails 7", "Stripe", "JS", "Redis", "Sendgrid", "PostgreSQL", "twilio", "bootstrap"],
        liveDemo: "https://www.momentumedu.org/",
        githubLink: "CompanyBase",
        caseStudy: "MomentumEducation"
    },
    {
        name: "Ship Oracle",
        category: "web-app",
        image: "assets/project-images/ShipOracle.png",
        description: "Ship Oracle is the maritime website. Key role was revamp site according to figma, update search filters, add payment method and also add CRM for SEO tags.",
        technologies: ["Rails 7", "JS", "Stripe", "Redis", "Action Mailer", "PostgreSQL", "TailwindCSS"],
        liveDemo: "https://www.shiporacle.com/",
        githubLink: "CompanyBase",
        caseStudy: "ShipOracle"
    },
    {
        name: "Sierra Service Project",
        category: "web-app",
        image: "assets/project-images/SierraServiceProject.png",
        description: "Led the development of the project’s dashboard using Ruby on Rails 7, Stripe for payment integration, Sidekiq for background job processing, and PostgreSQL for database management. Employed RSpec for rigorous testing and Tailwind CSS for a clean and responsive frontend. Worked closely with the team to ensure project success.",
        technologies: ["Rails 7", "Stripe", "JS", "Redis", "Sendgrid", "PostgreSQL", "TailwindCSS", "RSpec"],
        liveDemo: "https://www.sierraserviceproject.org/",
        githubLink: "CompanyBase",
        caseStudy: "SierraServiceProject"
    },
    {
        name: "Savio",
        category: "api",
        image: "#",
        description: "Played a key role in developing APIs for Savio, a Builder.io API-based project. Utilized Ruby on Rails, Stripe, and PostgreSQL to build robust, scalable solutions, ensuring thorough testing with RSpec. Collaborated with cross-functional teams to drive project completion and success.",
        technologies: ["Rails 6", "RSpec", "Elasticsearch", "AWS S3", "Stripe"],
        liveDemo: "#",
        githubLink: "CompanyBase",
        caseStudy: "Savio"
    },
    {
        name: "Technical Recruitment",
        category: "api",
        image: "#",
        description: "Developed APIs for a Builder.io API-based technical recruitment platform, leveraging Ruby on Rails, Stripe, and PostgreSQL. Conducted extensive testing using RSpec, and worked closely with the development team to meet project goals and deliver high-quality results.",
        technologies: ["Rails 6", "RSpec", "Elasticsearch", "AWS S3", "Stripe"],
        liveDemo: "#",
        githubLink: "CompanyBase",
        caseStudy: "TechnicalRecruitment"
    },
    {
        name: "Nomad Hiring",
        category: "web-app",
        image: "#",
        description: "Developed an internal HR portal for managing employee profiles (currently under development)",
        technologies: ["Rails 7", "Stripe", "JS", "AWS S3", "Redis", "Sendgrid", "PostgreSQL", "TailwindCSS" ],
        liveDemo: "#",
        githubLink: "CompanyBase",
        caseStudy: "NomadHiring"
    },
    {
        name: "Portfolio",
        category: "personal",
        image: "assets/project-images/Portfolio.png",
        description: "My Portfolio 😊",
        technologies: ["HTML", "CSS", "JS" ],
        liveDemo: "https://abdulqudoos.netlify.app/",
        githubLink: "https://github.com/CHABDULQUDOOS682/AbdulQudoosPortfolio",
        caseStudy: "Portfolio"
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
          ${project.image === '#' ?
            '<div class="no-image-icon"><i class="fas fa-exchange-alt"></i></div>' :
            `<img src="${project.image}" alt="${project.name}">`}
        </div>
      </div>
      <div class="project-content">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
        </div>
        <div class="project-footer"> 
          <div class="project-links">
            ${project.caseStudy ? `<button class="btn btn-small btn-case-study" data-modal="${project.caseStudy}">
              <i class="fas fa-file-alt"></i> Case Study
            </button>` : ""}
          </div>
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
                                ${project.image === '#' ?
                                    '<div class="no-image-icon"><i class="fas fa-exchange-alt"></i></div>' :
                                    `<img src="${project.image}" alt="${project.name}">`}
                            </div>
                        </div>
                        <div class="case-study-details">
                            <h3>Project Overview</h3>
                            <p>${project.description}</p>
                        </div>
                    </div>
                    <div class="case-study-footer">
                        <div class="project-links">
                            ${project.liveDemo === '#' ?
                                '<span class="btn btn-disabled" title="API based project"><i class="fas fa-code"></i> API Based Project</span>' :
                                `<a href="${project.liveDemo}" class="btn" target="_blank"><i class="fas fa-eye"></i> Live Demo</a>`}
                            ${project.githubLink === "CompanyBase" ?
                                '<span class="btn btn-secondary btn-disabled" title="Private repository"><i class="fab fa-github"></i> Private (Company Policy)</span>' :
                                `<a href="${project.githubLink}" class="btn btn-secondary" target="_blank"><i class="fab fa-github"></i> View on GitHub</a>`}
                        </div>
                    </div>
                </div>
            `;

            modalsContainer.appendChild(modal);
        }
    });
}

generateCaseStudyModals();

