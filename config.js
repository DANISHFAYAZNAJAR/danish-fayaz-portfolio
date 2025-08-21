// Portfolio Configuration File
// Updated with Danish Datafayaz's real information

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Danish Fayaz",
        title: "Data Scientist & Deep Learning Engineer",
        description: "A results-driven Data Scientist with expertise in designing and deploying end-to-end machine learning and natural language processing solutions. Adept at tackling complex challenges across healthcare, finance, and enterprise automation domains by leveraging cutting-edge techniques in deep learning, NLP, and computer vision.",
        email: "Danishfayaz09@gmail.com",
        phone: "9149574409",
        location: "Baramulla, J&K, India"
    },

    // Social Media Links
    social: {
        github: "https://github.com/danishdatafayaz",
        linkedin: "https://linkedin.com/in/danishdatafayaz",
        email: "mailto:Danishfayaz09@gmail.com",
        phone: "tel:9149574409"
    },

    // Experience Timeline
    experience: [
        {
            period: "Dec 2022 - Present",
            title: "Deep Learning Engineer",
            company: "StarSoftware",
            description: "Designed and deployed end-to-end automation pipeline for document processing & extraction. Built and fine-tuned 54+ NER labels using transformer models. Implemented incremental learning and achieved 10x cost reduction with significant accuracy gains."
        },
        {
            period: "July 2022 - Nov 2022",
            title: "Data Scientist",
            company: "TheTransmogrify",
            description: "Leveraged NER and OCR to extract valuable content from textual and image posts related to diabetes patients. Created visualizations using Grafana and integrated Google Analytics for user insights."
        },
        {
            period: "Dec 2021 - Mar 2022",
            title: "NLP Intern",
            company: "XivTech",
            description: "Utilized AWS Textract, Comprehend and OCR for extracting invoices. Built CI/CD pipeline for Invoice Extraction using Lambda Function and S3. Employed neural networks and BERT for document classification."
        },
        {
            period: "July 2021 - Sep 2021",
            title: "Research Intern",
            company: "Indian Institute of Science, Bangalore",
            description: "Detection of floating plastic through remote sensing and deep learning techniques. Employed U-Net model for segmentation of floating plastic."
        },
        {
            period: "Mar 2021 - June 2021",
            title: "Machine Learning Intern",
            company: "Indian Institute of Technology, Jammu",
            description: "Applied ML and DL models on CICIDS datasets. Compared random selection and column subset selection methods. Implemented Few Shot learning using CNN."
        }
    ],

    // Education
    education: [
        {
            degree: "Bachelor's of Computer Science and Engineering",
            institution: "National Institute of Technology Srinagar",
            year: "2018 - 2022",
            cgpa: "8.72",
            description: "Studied computer science fundamentals, algorithms, data structures, and software engineering principles."
        }
    ],

    // Certifications & Courses
    courses: [
        {
            title: "AI Data Engineering",
            description: "Data Engineering Lifecycle, Batch & Streaming Pipelines, Storage Architectures, ETL Pipelines, DataOps"
        },
        {
            title: "Multi AI Agent Systems with crewAI",
            description: "Agents, Tools, Crew, Manager, Memory, Process"
        },
        {
            title: "Machine Learning Engineering for Production (MLOPS)",
            description: "Data pipelines, ML system pipelines, Concept drift, Model analysis and Interpretability, NAS, Shadow, Blue Green, Canary Deployment"
        },
        {
            title: "AWS Cloud Technical Essentials",
            description: "AWS services such as EC2, Lambda functions, DynamoDB, S3, CloudWatch and Sagemaker"
        },
        {
            title: "Generative Adversarial Networks Specialization (GAN)",
            description: "Discriminator, Generator, Adversarial Training, DGAN, WCGAN"
        },
        {
            title: "Deep Learning Specialization",
            description: "Neural Network, Hyperparameters tuning, Optimisers, CNN, RNN, LSTM, GRU, Transformer, BERT"
        }
    ],

    // Skills Categories
    skills: {
        "Programming Languages": [
            { name: "Python", icon: "fab fa-python" },
            { name: "SQL", icon: "fas fa-database" }
        ],
        "Machine Learning & Deep Learning": [
            { name: "TensorFlow", icon: "fas fa-brain" },
            { name: "PyTorch", icon: "fas fa-fire" },
            { name: "Scikit-learn", icon: "fas fa-chart-line" }
        ],
        "Natural Language Processing": [
            { name: "Huggingface", icon: "fas fa-language" },
            { name: "Langchain", icon: "fas fa-link" },
            { name: "Haystack", icon: "fas fa-search" },
            { name: "Ragas", icon: "fas fa-star" },
            { name: "Crewai", icon: "fas fa-users" },
            { name: "Langgraph", icon: "fas fa-project-diagram" }
        ],
        "Computer Vision": [
            { name: "Detectron2", icon: "fas fa-eye" },
            { name: "Ultralytics", icon: "fas fa-camera" },
            { name: "Supervision", icon: "fas fa-video" }
        ],
        "Cloud Services & Development": [
            { name: "AWS Lambda", icon: "fab fa-aws" },
            { name: "AWS S3", icon: "fab fa-aws" },
            { name: "AWS Textract", icon: "fab fa-aws" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Django", icon: "fab fa-python" },
            { name: "Flask", icon: "fab fa-python" }
        ],
        "Data Visualization & Monitoring": [
            { name: "Tableau", icon: "fas fa-chart-bar" },
            { name: "Grafana", icon: "fas fa-chart-line" },
            { name: "Wandb", icon: "fas fa-tasks" }
        ]
    },

    // Projects (Danish's actual projects from resume)
    projects: [
        {
            title: "RAG-Based QA System",
            description: "Integrated Retrieval-Augmented Generation (RAG) architecture within Langchain framework, incorporating advanced components. Implemented efficient retrieval mechanisms, parent document retriever, hybrid search, and RAG fusion. Designed prompt-based templates for answer generation using GPT-3.5, GPT-4, Llama 7B, and Cohere. Currently deploying on cloud infrastructure for scalability and reliability.",
            technologies: ["Langchain", "RAG", "GPT-3.5", "GPT-4", "Llama 7B", "Cohere", "RAGAS"],
            liveUrl: "#",
            githubUrl: "#",
            image: null
        },
        {
            title: "Automated Document Processing & Extraction System",
            description: "Designed and deployed an end-to-end automation pipeline to extract structured data from documents such as invoices, bank statements, transcripts, bills of lading, COAs, and MTRs. Built and fine-tuned 54+ NER labels using transformer models including BERT, RoBERTa, and XLM-RoBERTa. Implemented incremental learning with mixed sampling and Elastic Weight Consolidation (EWC).",
            technologies: ["BERT", "RoBERTa", "XLM-RoBERTa", "YOLOv5/v8", "AWS Textract", "Detectron2", "LoRA", "QLoRA"],
            liveUrl: "#",
            githubUrl: "#",
            image: null
        },
        {
            title: "Intelligent Business Document Insight & Analytics Platform",
            description: "Building an advanced AI-driven platform to extract insights from complex business data sources such as invoices, COAs, Material Test Reports (MTRs), and ERP systems. Integrated LLMs (OpenAI, Qwen) for natural language analysis, enabling dynamic SQL query generation and query rewriting. Architected a LangGraph-based modular workflow with fine-grained control over validation and error handling.",
            technologies: ["LLMs", "OpenAI", "Qwen", "LangGraph", "PostgreSQL", "Natural Language Processing"],
            liveUrl: "#",
            githubUrl: "#",
            image: null
        },
        {
            title: "Facial Emotion Recognition",
            description: "Developed a deep learning model for emotion recognition focused on a 7-class classification problem, distinguishing Happy, Sad, Neutral, Surprise, Angry, Disgust, and Fear emotions. Leveraged advanced neural network architectures and image processing techniques to achieve high classification accuracy. Results demonstrate the ability to accurately classify emotions with potential applications in healthcare, marketing, and entertainment.",
            technologies: ["Deep Learning", "CNN", "Image Processing", "7-Class Classification", "Neural Networks"],
            liveUrl: "#",
            githubUrl: "#",
            image: null
        },
        {
            title: "Diabetes Insight Tracker",
            description: "Leveraged Named Entity Recognition (NER) to extract valuable content from textual posts within applications, focusing on posts related to the health of Diabetes patients. Applied Optical Character Recognition (OCR) to detect and analyze glucose levels from image posts. Stored extracted content efficiently in PostgreSQL database and created visualizations using Grafana for trends and events.",
            technologies: ["NER", "OCR", "PostgreSQL", "Grafana", "Google Analytics", "Health Data Analysis"],
            liveUrl: "#",
            githubUrl: "#",
            image: null
        },
        {
            title: "Floating Plastic Detection",
            description: "Detection of floating plastic through the utilization of remote sensing and deep learning techniques. Employed a U-Net model for the segmentation of floating plastic. This research project at IISc Bangalore focused on environmental monitoring and conservation using advanced computer vision techniques.",
            technologies: ["U-Net", "Deep Learning", "Remote Sensing", "Computer Vision", "Segmentation", "Environmental Monitoring"],
            liveUrl: "#",
            githubUrl: "#",
            image: null
        }
    ],

    // Contact Information
    contact: {
        email: "Danishfayaz09@gmail.com",
        phone: "9149574409",
        address: "Baramulla, J&K, India"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}
