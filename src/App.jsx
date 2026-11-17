import profileImage from './assets/profile.jpeg';
import { motion } from 'framer-motion';

import {
  Mail,
  ArrowUpRight,
  Download,
  Code2,
  MessageCircle,
  Sparkles,
  ChevronDown,
  GraduationCap,
  Award,
  Briefcase,
  ExternalLink,
  FileText,
  Trophy
} from 'lucide-react';

import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa6';

import './App.css';

// CERTIFICATES
// Order: Education → Internships → Oracle → Other Certifications

const certificates = [
  {
    title: 'Degree Certificate',
    organization: 'Sathyabama Institute of Science and Technology',
    file: 'Degree_Certificate.pdf',
    category: 'Education'
  },
  {
    title: 'AI Internship',
    organization: 'NeubAItics Tech Pvt. Ltd.',
    file: 'NeubAItics_Internship.pdf',
    category: 'Internship'
  },
  {
    title: 'Generative AI Internship',
    organization: 'Evolve Robot Lab',
    file: 'Evolve_Robot_Lab_Internship.pdf',
    category: 'Internship'
  },
  {
    title: 'Data Science Internship',
    organization: 'VCodez',
    file: 'VCodez_Data_Science_Internship.pdf',
    category: 'Internship'
  },
  {
    title: 'Oracle ERP Foundations',
    organization: 'Oracle',
    file: 'Oracle_ERP_Certificate.pdf',
    category: 'Oracle Certification'
  },
  {
    title: 'Oracle SCM Foundations',
    organization: 'Oracle',
    file: 'Oracle_SCM_Certificate.pdf',
    category: 'Oracle Certification'
  },
  {
    title: 'Oracle HCM Foundations',
    organization: 'Oracle',
    file: 'Oracle_HCM_Certificate.pdf',
    category: 'Oracle Certification'
  },
  {
    title: 'Machine Learning Training',
    organization: 'Cognibot AI',
    file: 'Cognibot_Machine_Learning.pdf',
    category: 'Technical Training'
  },
  {
    title: 'GenAI Powered Data Analytics',
    organization: 'Forage',
    file: 'Forage_GenAI_Data_Analytics.pdf',
    category: 'Job Simulation'
  }
];

// INTERNSHIP EXPERIENCE

const internships = [
  {
    company: 'NeubAItics Tech Pvt. Ltd.',
    role: 'AI/ML Intern',
    description:
      'Worked on an AI-Based Code Review Assistant using Langflow, Hugging Face and Streamlit.',
    technologies:
      'Python · Langflow · Hugging Face · Streamlit',
    certificate: 'NeubAItics_Internship.pdf'
  },
  {
    company: 'Evolve Robot Lab',
    role: 'Generative AI Intern',
    description:
      'Gained practical exposure to Generative AI technologies and applications.',
    technologies:
      'Generative AI · Artificial Intelligence',
    certificate: 'Evolve_Robot_Lab_Internship.pdf'
  },
  {
    company: 'VCodez',
    role: 'Data Science Intern',
    description:
      'Gained practical experience in data science concepts and applications.',
    technologies:
      'Python · Data Science',
    certificate: 'VCodez_Data_Science_Internship.pdf'
  }
];

// PROJECTS

const projects = [
  {
    number: '01',
    title: 'Automated Diagnosis of Oral Cancer using Deep Learning Models on Lesion Images',
    description:
      'Deep learning-based oral cancer detection using lesion images and MobileNetV2.',
    technologies:
      'TensorFlow · Python · Deep Learning',
    github:
      'https://github.com/nihells/Automated-diagnosis-of-oral-cancer-detection-using-lesion-images',
    linkText: 'View Source'
  },
  {
    number: '02',
    title: 'AI Code Review Assistant',
    description:
      'An AI-powered application designed to assist developers with automated code reviews.',
    technologies:
      'Langflow · Hugging Face · Streamlit',
    github:
      'https://github.com/nihells/Ai_Code_Review_Assistant',
    linkText: 'View Source'
  },
  {
    number: '03',
    title: 'Fake News Detection',
    description:
      'Machine learning and NLP-based fake news classification application.',
    technologies:
      'Python · NLP · Flask',
    github: 'https://github.com/nihells',
    linkText: 'GitHub Profile'
  },
  {
    number: '04',
    title: 'Sentiment Analysis Web App',
    description:
      'An application for analysing text sentiment using natural language processing.',
    technologies:
      'Python · Flask · Gradio',
    github: 'https://github.com/nihells',
    linkText: 'GitHub Profile'
  },
  {
    number: '05',
    title: 'Weather Explorer',
    description:
      'A weather application developed using a FastAPI backend and React frontend.',
    technologies:
      'React · FastAPI · Python',
    github: 'https://github.com/nihells',
    linkText: 'GitHub Profile'
  }
];

// TECHNICAL SKILLS

const skills = [
  'Python',
  'Java',
  'SQL',
  'React',
  'JavaScript',
  'HTML & CSS',
  'TensorFlow',
  'Machine Learning',
  'Flask',
  'FastAPI',
  'Hugging Face',
  'Generative AI',
  'Langflow',
  'Streamlit',
  'Git & GitHub',
  'Natural Language Processing'
];

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}

      <nav className="navbar">

        <a href="#home" className="logo">
          NIHELL<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk <ArrowUpRight size={16} />
        </a>

      </nav>

      {/* HERO SECTION */}

      <section className="hero-section" id="home">

        <div className="hero-content">

          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="status-dot"></span>
            Available for Opportunities
          </motion.div>

          <motion.p
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nihell <span>S.</span>
          </motion.h1>

          <h2>
            Software Developer
            <br />
            <span>& AI/ML Enthusiast</span>
          </h2>

          <p className="hero-description">
            Computer Science and Engineering graduate specializing
            in Artificial Intelligence. Passionate about building
            intelligent applications, developing innovative software
            solutions and exploring emerging technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a
              href="/Resume.pdf"
              download="Nihell_S_Resume.pdf"
              className="secondary-button"
            >
              Download Resume <Download size={18} />
            </a>

          </div>

          {/* SOCIAL LINKS */}

          <div className="social-links">

            <a
              href="https://github.com/nihells"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nihell2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/nihell_s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nihell2004@gmail.com&su=Portfolio%20Enquiry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              title="Send me an email"
            >
              <Mail />
            </a>

          </div>

        </div>

        {/* PROFILE PHOTO */}

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="image-glow"></div>

          <img
            src={profileImage}
            alt="Nihell S - Software Developer"
            className="profile-image"
          />

          <div className="floating-card card-one">
            <Sparkles size={20} />
            <span>Artificial Intelligence</span>
          </div>

          <div className="floating-card card-two">
            <Code2 size={20} />
            <span>Software Development</span>
          </div>

        </motion.div>

        <a href="#about" className="scroll-indicator">
          Scroll to explore <ChevronDown size={18} />
        </a>

      </section>

      {/* ABOUT SECTION */}

      <section className="about-section" id="about">

        <p className="section-label">01 — ABOUT ME</p>

        <h2>
          Technology meets <span>creativity.</span>
        </h2>

        <p>
          I'm Nihell S, a Computer Science and Engineering graduate
          specializing in Artificial Intelligence from Sathyabama
          Institute of Science and Technology, Chennai.

          I enjoy developing practical applications using software
          development, machine learning and generative AI.
        </p>

      </section>

      {/* EDUCATION SECTION */}

      <section className="education-section" id="education">

        <p className="section-label">02 — EDUCATION</p>

        <h2>
          My Educational <span>Journey</span>
        </h2>

        <div className="education-card">

          <div className="education-icon">
            <GraduationCap size={30} />
          </div>

          <div>

            <span className="education-year">
              2022 – 2026
            </span>

            <h3>Bachelor of Engineering</h3>

            <h4>
              Computer Science and Engineering
              (Artificial Intelligence)
            </h4>

            <p>
              Sathyabama Institute of Science and Technology,
              Chennai, Tamil Nadu.
            </p>

            <a
              href="/certificates/Degree_Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              View Degree Certificate <ExternalLink size={16} />
            </a>

          </div>

        </div>

      </section>

      {/* SKILLS SECTION */}

      <section className="skills-section" id="skills">

        <p className="section-label">03 — TECHNICAL EXPERTISE</p>

        <h2>
          My Technical <span>Skills</span>
        </h2>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              <Code2 size={20} />
              {skill}
            </div>
          ))}

        </div>

      </section>

      {/* INTERNSHIP EXPERIENCE */}

      <section className="experience-section" id="experience">

        <p className="section-label">
          04 — PROFESSIONAL EXPERIENCE
        </p>

        <h2>
          Internship <span>Experience</span>
        </h2>

        <div className="experience-grid">

          {internships.map((internship) => (

            <div
              className="experience-card"
              key={internship.company}
            >

              <div className="experience-icon">
                <Briefcase size={25} />
              </div>

              <h3>{internship.role}</h3>

              <h4>{internship.company}</h4>

              <p>{internship.description}</p>

              <div className="tags">
                {internship.technologies}
              </div>

              {/* INTERNSHIP CERTIFICATE ONLY */}

              <div className="internship-certificate-links">

                <a
                  href={`/certificates/${internship.certificate}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  <FileText size={17} />
                  View Internship Certificate
                  <ArrowUpRight size={17} />
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS SECTION */}

      <section className="projects-section" id="projects">

        <p className="section-label">05 — MY WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.number}
            >

              <span>{project.number}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.technologies}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkText}
                <ArrowUpRight size={18} />
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* CERTIFICATIONS SECTION */}

      <section
        className="certifications-section"
        id="certifications"
      >

        <p className="section-label">
          06 — PROFESSIONAL DEVELOPMENT
        </p>

        <h2>
          Licenses & <span>Certifications</span>
        </h2>

        <p className="section-description">
          Professional certifications, technical training,
          internship credentials and academic achievements.
        </p>

        <div className="certifications-grid">

          {certificates.map((certificate, index) => (

            <motion.div
              className="certificate-card"
              key={certificate.file}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
            >

              <div className="certificate-icon">
                <Award size={30} />
              </div>

              <span className="certificate-category">
                {certificate.category}
              </span>

              <h3>{certificate.title}</h3>

              <p>{certificate.organization}</p>

              <a
                href={`/certificates/${certificate.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-button"
              >
                <FileText size={17} />
                View Certificate
                <ExternalLink size={16} />
              </a>

            </motion.div>

          ))}

        </div>

      </section>

      {/* RESEARCH AND PUBLICATIONS */}

      <section className="research-section" id="research">

        <p className="section-label">
          07 — RESEARCH & PUBLICATIONS
        </p>

        <h2>
          Research & <span>Publications</span>
        </h2>

        <div className="research-card">

          <Sparkles size={30} />

          <span className="research-tag">
            IEEE Xplore Publication
          </span>

          <h3>
            Automated Diagnosis of Oral Cancer Using
            Deep Learning Models on Lesion Images
          </h3>

          <p>
            Research focused on applying deep learning models
            for oral cancer detection and classification using
            lesion images.
          </p>

          <p className="publication-status">
            Published Research Paper
          </p>

          {/* RESEARCH ACTIONS */}

          <div className="research-actions">

            <a
              href="https://ieeexplore.ieee.org/document/11543693"
              target="_blank"
              rel="noopener noreferrer"
              className="research-link"
            >
              <FileText size={18} />
              View IEEE Publication
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/certificates/IEEE_ICPCSN_2026_Presentation_Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="research-link"
            >
              <Award size={18} />
              View Conference Presentation Certificate
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="achievements-section" id="achievements">

        <p className="section-label">08 — ACHIEVEMENTS</p>

        <h2>
          Professional <span>Highlights</span>
        </h2>

        <div className="achievement-grid">

          <div className="achievement-card">

            <Trophy size={28} />

            <h3>IEEE Research Publication</h3>

            <p>
              Research publication on automated oral cancer
              diagnosis using deep learning models.
            </p>

          </div>

          <div className="achievement-card">

            <Award size={28} />

            <h3>Oracle Certifications</h3>

            <p>
              Three Oracle Cloud Foundations certifications
              across ERP, SCM and HCM.
            </p>

          </div>

          <div className="achievement-card">

            <Code2 size={28} />

            <h3>Technical Projects</h3>

            <p>
              Developed projects involving software development,
              machine learning and Generative AI.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="contact-section" id="contact">

        <p className="section-label">09 — GET IN TOUCH</p>

        <h2>
          Let's Work <span>Together.</span>
        </h2>

        <p>
          Have an opportunity, project or collaboration in mind?
          I'd love to hear from you.
        </p>

        <div className="contact-buttons">

          <a
            href="https://wa.me/919487522908?text=Hello%20Nihell,%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            <MessageCircle />
            WhatsApp Me
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nihell2004@gmail.com&su=Portfolio%20Enquiry&body=Hello%20Nihell,"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            <Mail />
            Send Email
          </a>

        </div>

        <div className="contact-email">
          <Mail size={18} />
          nihell2004@gmail.com
        </div>

      </section>

      {/* FOOTER */}

      <footer>

        <a href="#home" className="logo">
          NIHELL<span>.</span>
        </a>

        <p>
          Designed & Built by Nihell S. © 2026
        </p>

        <a href="#home">
          Back to Top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;