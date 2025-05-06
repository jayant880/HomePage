import '../css/main.css';
import '../css/header.css';
import '../css/main-section.css';

class Card {
    constructor(imgSrc, imgAltText, projectName, githubRepoLink, demoLink, description) {
        this.imgSrc = imgSrc;
        this.imgAltText = imgAltText;
        this.projectName = projectName;
        this.githubRepoLink = githubRepoLink;
        this.demoLink = demoLink;
        this.description = description;
    }

    getCardElement() {
        const cardContainer = document.createElement('article');
        cardContainer.classList.add('card-container');
        const safeId = `project-${this.projectName.toLowerCase().replace(/\s+/g, '-')}`;
        cardContainer.ariaLabelledBy = safeId;
        cardContainer.innerHTML = `<img src="${this.imgSrc}" alt="${this.imgAltText}" />
        <div class="card-title">
            <h3 class="card-name" id=${safeId}>${this.projectName}</h3>
            <div class="card-link-container">
                <a href="${this.githubRepoLink}" class="social-link" aria-label="GitHub Repo">
                    <i class="devicon-github-original-wordmark icon" aria-hidden="true"></i>
                    <span class="sr-only">GitHub</span>
                </a>
                <a href="${this.demoLink}" class="social-link" aria-label="Project Demo" target="_blank">
                    <object data="svg/open-in-new.svg" type="image/svg+xml" class="openInNew" width="20" height="20"
                    title="open-in-new">
                        svg not loaded
                    </object>
                    <span class="sr-only">Project Demo</span>
                </a>
            </div>
          </div>
          <div class="card-description">${this.description}</div>`;
        return cardContainer;
    }
}

async function getData() {
    try {
        const response = await fetch('data/data.json');
        if (!response.ok) {
            throw new Error('failed to fetch project data');
        }
        const data = await response.json();
        return data.projects;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error loading project', error);
        return [];
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData();
    const cardCollection = document.querySelector('.cards');
    data.forEach(project => {
        const { imgSrc, imgAltText, projectName, githubRepoLink, demoLink, description } = project;
        const newCard = new Card(imgSrc, imgAltText, projectName, githubRepoLink, demoLink, description);
        cardCollection.append(newCard.getCardElement());
    });
});