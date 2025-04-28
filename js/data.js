const projects = [
    // "web-app","api","e-commerce"
    {
        name: "Experfy",
        category: "api",
        image: "assets/project-images/Experfy.png",
        description: "Project Overview:\n" +
            "Experfy is a technical hiring platform where I work as a Backend Developer, primarily focused on building and maintaining scalable API services that power the platform's core functionality.",
        technologies: ["Ruby", "Ruby on Rails", "Sinatra", "PostgreSQL", "MongoDB"],
        liveDemo: "https://temp.experfy.com/",
        githubLink: "CompanyBase",
        caseStudy: "experfy"
    },
    {
        name: "Tourcrib",
        category: "api",
        image: "assets/project-images/Tourcrib.png",
        description: "Project Overview:\n" +
            "Tourcrib is french event organization website, responsible for creating new feature of integration of whatsapp for send messages and and reminders.",
        technologies: ["Ruby on Rails", "Third Party APIs", "Stripe"],
        liveDemo: "https://tourcrib.com/en",
        githubLink: "CompanyBase",
        caseStudy: "Tourcrib"
    },
    {
        name: "Momentum Education",
        category: "web-app",
        image: "assets/project-images/Momentum Education.png",
        description: "Project Overview:\n" +
            "Responsible for developing and implementing new features based on client requirements, while also managing and maintaining the website. Utilized technologies such as Ruby on Rails, HTML, SCSS, Sidekiq, SendGrid, Twilio, and PostgreSQL to ensure seamless functionality and performance.",
        technologies: ["Rails 7", "Stripe", "JS", "Redis", "Sendgrid", "PostgreSQL", "twilio", "bootstrap"],
        liveDemo: "https://www.momentumedu.org/",
        githubLink: "CompanyBase",
        caseStudy: "MomentumEducation"
    },
    {
        name: "Ship Oracle",
        category: "web-app",
        image: "assets/project-images/ShipOracle.png",
        description: "Project Overview:\n" +
            "Ship Oracle is the maritime website. Key role was revamp site according to figma, update search filters, add payment method and also add CRM for SEO tags.",
        technologies: ["Rails 7", "JS", "Stripe", "Redis", "Action Mailer", "PostgreSQL", "TailwindCSS"],
        liveDemo: "https://www.shiporacle.com/",
        githubLink: "CompanyBase",
        caseStudy: "ShipOracle"
    },
    {
        name: "Sierra Service Project",
        category: "web-app",
        image: "assets/project-images/SierraServiceProject.png",
        description: "Project Overview:\n" +
            "Led the development of the project’s dashboard using Ruby on Rails 7, Stripe for payment integration, Sidekiq for background job processing, and PostgreSQL for database management. Employed RSpec for rigorous testing and Tailwind CSS for a clean and responsive frontend. Worked closely with the team to ensure project success.",
        technologies: ["Rails 7", "Stripe", "JS", "Redis", "Sendgrid", "PostgreSQL", "TailwindCSS", "RSpec"],
        liveDemo: "https://www.sierraserviceproject.org/",
        githubLink: "CompanyBase",
        caseStudy: "SierraServiceProject"
    },
    {
        name: "Savio",
        category: "api",
        image: "#",
        description: "Project Overview:\n" +
            "Played a key role in developing APIs for Savio, a Builder.io API-based project. Utilized Ruby on Rails, Stripe, and PostgreSQL to build robust, scalable solutions, ensuring thorough testing with RSpec. Collaborated with cross-functional teams to drive project completion and success.",
        technologies: ["Rails 6", "RSpec", "Elasticsearch", "AWS S3", "Stripe"],
        liveDemo: "#",
        githubLink: "CompanyBase",
        caseStudy: "Savio"
    },
    {
        name: "Technical Recruitment",
        category: "api",
        image: "#",
        description: "Project Overview:\n" +
            "Developed APIs for a Builder.io API-based technical recruitment platform, leveraging Ruby on Rails, Stripe, and PostgreSQL. Conducted extensive testing using RSpec, and worked closely with the development team to meet project goals and deliver high-quality results.",
        technologies: ["Rails 6", "RSpec", "Elasticsearch", "AWS S3", "Stripe"],
        liveDemo: "#",
        githubLink: "CompanyBase",
        caseStudy: "TechnicalRecruitment"
    },
    {
        name: "Nomad Hiring",
        category: "web-app",
        image: "#",
        description: "Project Overview:\n" +
            "Developed an internal HR portal for managing employee profiles (currently under development)",
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
    },
    {
        name: "Resume Genius",
        category: "personal",
        image: "assets/project-images/resume-genius.png",
        description: "Project Overview:\n" +
            "AI-Powered Resume Optimization Tool" +
            "Project Overview " +
            "Developed an intelligent web application that evaluates resumes for Applicant Tracking System (ATS) compatibility using generative AI. The tool provides job seekers with actionable insights to improve their resume's performance in automated hiring systems.\n" +
            "Key Features:" +
            "✅ Multi-Mode Analysis Engine " +
            "Implemented 4 distinct analysis modes (Full Review, Keyword Gap Analysis, Improvement Recommendations, ATS Match Scoring) " +
            "Engineered specialized AI prompts for each analysis type " +
            "✅ Smart Document Processing " +
            "Built PDF text extraction system handling various resume formats " +
            "Developed content sanitization pipeline for clean AI analysis " +
            "✅ Interactive Results Dashboard " +
            "Created visual reporting system with color-coded feedback sections " +
            "Implemented responsive design for desktop/mobile accessibility " +
            "✅ Privacy-Focused Architecture " +
            "Designed zero-storage system that processes files in memory " +
            "Eliminated database requirements for resume analysis",
        technologies: [
            "Ruby on Rails",
            "Gemini 1.5 Pro API",
            "PDF Reader gem",
            "Tailwind CSS",
            "StimulusJS",
            "Turbo Streams"
        ],
        liveDemo: "*",
        githubLink: "https://github.com/CHABDULQUDOOS682/ats_analyzer",
        caseStudy: "ResumeGenius"
    },
    {
        name: "QuantumLend",
        category: "personal",
        image: "assets/project-images/QuantumLend.png",
        description: "Project Overview:\n" +
            "QuantumLend is a comprehensive loan management platform designed to streamline financial operations for lenders and borrowers." +
            " Built with Ruby on Rails, Tailwind CSS, and PostgreSQL, this web application offers an intuitive interface for tracking loans, payments," +
            " and associated documents while ensuring secure user authentication via Devise.\n" +
            "Key Features:" +
            "✅ Loan Book Management – Create and organize loan portfolios with detailed records\n" +
            "✅ Payment Tracking – Monitor loan payments, due dates, and repayment statuses\n" +
            "✅ Role-Based Access – Admin and user permissions for secure data handling\n" +
            "✅ Document Attachments – Upload and manage loan agreements or supporting files\n" +
            "✅ Interactive Dashboard – Visualize active loans, pending payments, and financial summaries\n" +
            "✅ Responsive Design – Optimized for desktop and mobile use",
        technologies: [
            "Ruby on Rails",
            "Tailwind CSS",
            "PostgreSQL"
        ],
        liveDemo: "*",
        githubLink: "https://github.com/CHABDULQUDOOS682/loan_book",
        caseStudy: "QuantumLend"
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
        <div class="project-description">
          ${(() => {
                    const [overviewAndKey, ...features] = project.description.split('✅');
                    let formatted = "";
                    const projectOverviewMatch = overviewAndKey.match(/Project Overview:(.*?)(Key Features:|$)/s);
        
                    if (projectOverviewMatch) {
                        const overviewText = projectOverviewMatch[1]?.trim();
                        const keyFeaturesIntro = projectOverviewMatch[2]?.trim();
        
                        formatted += `<h4 class="subheading">Project Overview</h4>`;
                        formatted += `<p>${overviewText.replace(/\n/g, '<br>')}</p>`;
        
                        if (keyFeaturesIntro) {
                            formatted += `<h4 class="subheading">Key Features</h4>`;
                            formatted += `<ul class="feature-list">`;
                            features.forEach(feature => {
                                if (feature.trim() !== '') {
                                    formatted += `<li> ${feature.trim()}</li>`;
                                }
                            });
                            formatted += `</ul>`;
                        }
                    } else {
                        formatted += `<p>${overviewAndKey.replace(/\n/g, '<br>')}</p>`;
                    }
        
                    return formatted;
                })()}
        </div>

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
                            <div class="project-description">
                              ${(() => {
                                    const [overviewAndKey, ...features] = project.description.split('✅');
                                    let formatted = "";
                                    const projectOverviewMatch = overviewAndKey.match(/Project Overview:(.*?)(Key Features:|$)/s);
                    
                                    if (projectOverviewMatch) {
                                        const overviewText = projectOverviewMatch[1]?.trim();
                                        const keyFeaturesIntro = projectOverviewMatch[2]?.trim();
                    
                                        formatted += `<h4 class="subheading">Project Overview</h4>`;
                                        formatted += `<p>${overviewText.replace(/\n/g, '<br>')}</p>`;
                    
                                        if (keyFeaturesIntro) {
                                            formatted += `<h4 class="subheading">Key Features</h4>`;
                                            formatted += `<ul class="feature-list">`;
                                            features.forEach(feature => {
                                                if (feature.trim() !== '') {
                                                    formatted += `<li> ${feature.trim()}</li>`;
                                                }
                                            });
                                            formatted += `</ul>`;
                                        }
                                    } else {
                                        formatted += `<p>${overviewAndKey.replace(/\n/g, '<br>')}</p>`;
                                    }
                    
                                    return formatted;
                                })()}
                            </div>
                            
                        </div>
                    </div>
                    <div class="case-study-footer">
                        <div class="project-links">
                            ${project.liveDemo === '*'
                ? '<span class="btn btn-disabled" title="Not Deployed"><i class="fas fa-code"></i> Not Deployed</span>'
                : project.liveDemo === '#'
                    ? '<span class="btn btn-disabled" title="API based project"><i class="fas fa-code"></i> API Based Project</span>'
                    : `<a href="${project.liveDemo}" class="btn" target="_blank"><i class="fas fa-eye"></i> Live Demo</a>`
            }

                            
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

