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
        title: "Automated Document Processing & Extraction System",
        description: "Enterprise-grade document intelligence platform that revolutionizes data extraction from complex documents including invoices, bank statements, transcripts, bills of lading, COAs, and MTRs. Built with state-of-the-art NLP and computer vision technologies, achieving 10x cost reduction and significant accuracy improvements. Features 54+ fine-tuned NER labels using BERT, RoBERTa, and XLM-RoBERTa, with advanced incremental learning and Elastic Weight Consolidation (EWC) for continual learning.",
        technologies: ["BERT/RoBERTa", "YOLOv5/v8", "AWS Textract", "Incremental Learning", "EWC", "LoRA/QLoRA", "Detectron2", "OCR"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Intelligent Business Document Insight & Analytics Platform",
        description: "AI-driven business intelligence platform that transforms complex business data into actionable insights. Features natural language-driven data exploration, dynamic SQL generation, and comprehensive ERP analysis capabilities. Integrated with OpenAI and Qwen LLMs for intelligent query processing, LangGraph-based modular workflows, and PostgreSQL backend for real-time analytics. Empowers business users to generate custom reports without technical knowledge.",
        technologies: ["LLMs (OpenAI/Qwen)", "LangGraph", "PostgreSQL", "Natural Language SQL", "ERP Integration", "Business Analytics"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "RAG-Based QA System",
        description: "Advanced question-answering system built with Retrieval-Augmented Generation architecture, featuring hybrid search, RAG fusion, and multi-model support. Implements sophisticated query decomposition and RAGAS-optimized components for enhanced accuracy and performance across diverse query loads. Currently deploying on cloud infrastructure for scalability and reliability with support for GPT-3.5, GPT-4, Llama 7B, and Cohere models.",
        technologies: ["Langchain", "RAG", "GPT-4", "Llama 7B", "RAGAS", "Hybrid Search", "Query Decomposition"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Facial Emotion Recognition System",
        description: "Advanced emotion recognition model achieving high classification accuracy across 7 distinct emotions (Happy, Sad, Neutral, Surprise, Angry, Disgust, Fear). Leverages cutting-edge neural architectures and sophisticated image processing techniques for real-time emotion detection. Demonstrates exceptional performance with potential applications in healthcare, marketing, and entertainment industries.",
        technologies: ["Deep Learning", "Computer Vision", "Neural Networks", "Image Processing", "7-Class Classification", "Real-time Processing"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Diabetes Insight Tracker",
        description: "Comprehensive health analytics platform leveraging advanced NLP and computer vision techniques to extract insights from diabetes patient data. Implements Named Entity Recognition (NER) for textual content analysis and Optical Character Recognition (OCR) for glucose level detection from images. Features PostgreSQL database integration, Grafana visualizations, and Google Analytics for comprehensive health monitoring and trend analysis.",
        technologies: ["NER", "OCR", "PostgreSQL", "Grafana", "Google Analytics", "Health Data Analysis", "NLP"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Environmental Plastic Detection System",
        description: "Cutting-edge environmental monitoring research project using remote sensing and deep learning techniques for marine conservation. Implements U-Net architecture for accurate segmentation of floating plastic debris in complex marine environments. Contributes to ocean conservation efforts and environmental protection through advanced AI-powered monitoring systems with real-world impact.",
        technologies: ["U-Net", "Deep Learning", "Remote Sensing", "Computer Vision", "Image Segmentation", "Environmental AI"],
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

// Hero title will display normally without typing effect
document.addEventListener('DOMContentLoaded', () => {
    // Ensure the hero title displays properly
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Make sure the HTML is properly rendered
        heroTitle.innerHTML = heroTitle.innerHTML;
    }
});
