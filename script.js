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
        description: "End-to-end intelligent document automation pipeline for Invoices, COAs, MTRs, Transcripts, and Bank Statements. Integrates OCR (AWS Textract, PyTesseract), LayoutLM, YOLOv5/v8, and transformer models (BERT, RoBERTa, XLM-RoBERTa) for high-accuracy data extraction. Built generalized invoice model achieving 6× faster processing and 10× cost reduction, extended to MTRs and COAs via modular ETL/validation pipelines with HITL review. Leveraged LLMs for chemical/mechanical property extraction from MTRs, COA specification parsing, and PO-invoice reconciliation. Implemented continual learning workflows (EWC, LoRA/QLoRA) for client-specific document adaptation. Delivered 5× client acquisition increase, accelerated delivery cycles, and unlocked new revenue streams.",
        technologies: ["OCR (AWS Textract, PyTesseract)", "LayoutLM", "YOLOv5/v8", "Transformers (BERT, RoBERTa, XLM-RoBERTa)", "Incremental Learning", "EWC", "LoRA/QLoRA", "ETL Pipelines", "HITL Review"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Intelligent Business Document Insight Chatbot",
        description: "AI-driven platform for business-critical documents (Invoices, COAs, Material Test Reports, ERP data) with real-time querying and analytics. Integrated LLMs for natural language query understanding, SQL generation, query rewriting, error recovery, and response classification, enabling SQL-free data exploration. Architected LangGraph-based modular workflows with fine-grained stages for validation, error handling, memory management (short-term & long-term), and output post-processing. Developed ETL pipelines to sync data from multiple databases and APIs into centralized PostgreSQL with real-time updates. Implemented RAG pipelines for ad-hoc document Q&A — users can upload new documents and instantly query properties without retraining. Enhanced chatbot with contextual suggestions, memory-based follow-up handling, and semantic search. Improved scalability, speed, and accuracy while ensuring maintainability and seamless ERP integration.",
        technologies: ["LLM Integration", "LangGraph", "PostgreSQL", "RAG Pipelines", "ETL Pipelines", "Natural Language Processing", "Memory Management", "Semantic Search"],
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
