// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project Toggle Functionality
function toggleProject(header) {
    const projectSection = header.closest('.project-section');
    const isExpanded = projectSection.classList.contains('expanded');
    
    // Close all other projects
    document.querySelectorAll('.project-section').forEach(section => {
        section.classList.remove('expanded');
    });
    
    // Toggle current project
    if (!isExpanded) {
        projectSection.classList.add('expanded');
    }
    
    // Smooth scroll to expanded project
    if (!isExpanded) {
        setTimeout(() => {
            projectSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 300);
    }
}

// Auto-expand first project on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstProject = document.querySelector('.project-section');
    if (firstProject) {
        firstProject.classList.add('expanded');
    }
});

// Danish's actual projects from resume
const projects = [
    {
        title: "RAG-Based QA System",
        description: "Integrated Retrieval-Augmented Generation (RAG) architecture within Langchain framework, incorporating advanced components. Implemented efficient retrieval mechanisms, parent document retriever, hybrid search, and RAG fusion. Designed prompt-based templates for answer generation using GPT-3.5, GPT-4, Llama 7B, and Cohere. Currently deploying on cloud infrastructure for scalability and reliability.",
        technologies: ["Langchain", "RAG", "GPT-3.5", "GPT-4", "Llama 7B", "Cohere", "RAGAS"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Automated Document Processing & Extraction System",
        description: "Designed and deployed an end-to-end automation pipeline to extract structured data from documents such as invoices, bank statements, transcripts, bills of lading, COAs, and MTRs. Built and fine-tuned 54+ NER labels using transformer models including BERT, RoBERTa, and XLM-RoBERTa. Implemented incremental learning with mixed sampling of old and new data and Elastic Weight Consolidation (EWC) to support continual learning.",
        technologies: ["BERT", "RoBERTa", "XLM-RoBERTa", "YOLOv5/v8", "AWS Textract", "Detectron2", "LoRA", "QLoRA"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Intelligent Business Document Insight & Analytics Platform",
        description: "Building an advanced AI-driven platform to extract insights from complex business data sources such as invoices, COAs, Material Test Reports (MTRs), and ERP systems. Integrated LLMs (OpenAI, Qwen) for natural language analysis, enabling dynamic SQL query generation and query rewriting. Architected a LangGraph-based modular workflow with fine-grained control over validation and error handling.",
        technologies: ["LLMs", "OpenAI", "Qwen", "LangGraph", "PostgreSQL", "Natural Language Processing"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Facial Emotion Recognition",
        description: "Developed a deep learning model for emotion recognition focused on a 7-class classification problem, distinguishing Happy, Sad, Neutral, Surprise, Angry, Disgust, and Fear emotions. Leveraged advanced neural network architectures and image processing techniques to achieve high classification accuracy. Results demonstrate the ability to accurately classify emotions with potential applications in healthcare, marketing, and entertainment.",
        technologies: ["Deep Learning", "CNN", "Image Processing", "7-Class Classification", "Neural Networks"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Diabetes Insight Tracker",
        description: "Leveraged Named Entity Recognition (NER) to extract valuable content from textual posts within applications, focusing on posts related to the health of Diabetes patients. Applied Optical Character Recognition (OCR) to detect and analyze glucose levels from image posts. Stored extracted content efficiently in PostgreSQL database and created visualizations using Grafana for trends and events.",
        technologies: ["NER", "OCR", "PostgreSQL", "Grafana", "Google Analytics", "Health Data Analysis"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Floating Plastic Detection",
        description: "Detection of floating plastic through the utilization of remote sensing and deep learning techniques. Employed a U-Net model for the segmentation of floating plastic. This research project at IISc Bangalore focused on environmental monitoring and conservation using advanced computer vision techniques.",
        technologies: ["U-Net", "Deep Learning", "Remote Sensing", "Computer Vision", "Segmentation", "Environmental Monitoring"],
        liveUrl: "#",
        githubUrl: "#"
    }
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
}

// Load projects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add animation on scroll for project cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});
