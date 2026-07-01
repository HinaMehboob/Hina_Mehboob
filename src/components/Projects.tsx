"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";

interface Project {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  category: "ai" | "fullstack";
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  videoUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "RepoGazer — AI Code Search Engine",
    description:
      "An AI-powered codebase search engine that performs semantic code analysis and answers technical developer queries in real-time using a self-correcting Agentic RAG pipeline.",
    bullets: [
      "Orchestrated a multi-node codebase reasoning graph using LangGraph to automate context retrieval, relevance grading, query rewriting, and LLM synthesis.",
      "Engineered a hybrid search combining pgvector cosine similarity and PostgreSQL Full-Text Search (FTS), applying Reciprocal Rank Fusion (RRF) to double search accuracy.",
      "Created an AST-aware repository indexing engine using GitPython (shallow cloning) and recursive text splitters to dynamically chunk and embed source files.",
      "Programmed a premium React interface featuring an interactive file-tree explorer, real-time citation highlights, and a syntax-highlighted code workspace."
    ],
    category: "ai",
    tags: ["Next.js 16", "TypeScript", "FastAPI", "pgvector", "LangGraph", "Gemini API"],
    githubUrl: "https://github.com/HinaMehboob/RepoGazer.git",
    liveUrl: "",
  },
  {
    id: 2,
    title: "Autonomous AI Web Developer & DevOps",
    description:
      "An event-driven, autonomous AI agent orchestration pipeline that fully generates, commits, and provisions complete full-stack web applications from raw natural language prompts.",
    bullets: [
      "Engineered an autonomous agent orchestration pipeline using n8n and Anthropic Claude 3.5 Sonnet.",
      "Architected a resilient Human-in-the-Loop (HITL) checkpoint system that manages state persistence and pauses for credentials validation.",
      "Built an algorithmic file-tree generator that parses LLM structural outputs and automates multi-file commits via GitHub REST API.",
      "Optimized a live cloud-provisioning loop using Vercel REST API and Supabase Real-time Postgres listeners to stream deployment status logs."
    ],
    category: "ai",
    tags: ["Next.js", "n8n", "Claude 3.5 Sonnet", "Supabase", "GitHub API", "Vercel API"],
    githubUrl: "https://github.com/HinaMehboob/TalentMatchAI.git",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Reading Tracker — AI Research App",
    description:
      "A full-stack reading tracker with real-time data persistence, automated auto-save note-taking, and an AI-powered chatbot for interactive content analysis.",
    bullets: [
      "Integrated PDF rendering capabilities directly into the workspace.",
      "Managed the full software lifecycle via GitHub with a CI/CD pipeline deployed on Vercel.",
      "Connected an interactive AI chatbot helper for real-time document Q&A."
    ],
    category: "ai",
    tags: ["Next.js", "TypeScript", "Supabase", "AI Chatbot", "PDF.js", "Vercel"],
    githubUrl: "https://github.com/HinaMehboob/ReadingTracker.git",
    liveUrl: "https://reading-tracker-brcq.vercel.app/",
    videoUrl: "/202606140029.mp4",
  },
  {
    id: 4,
    title: "FPSC Official Website Frontend",
    description:
      "Frontend development and CMS management contribution of the official FPSC Pakistan website under direct supervisor guidance.",
    bullets: [
      "Created UI/UX design components in Figma according to standard guidelines.",
      "Developed responsive, highly accessible frontend web components using Next.js."
    ],
    category: "fullstack",
    tags: ["Next.js", "Figma", "CMS", "Responsive Design", "Accessibility"],
    githubUrl: "https://github.com/HinaMehboob/fpsc-website",
    liveUrl: "https://www.fpsc.gov.pk/",
  },
  {
    id: 5,
    title: "Automation Testing Demo Platform",
    description:
      "A Next.js web application with authentication and API integration built as a controlled environment for comparative automated testing evaluation.",
    bullets: [
      "Conducted systematic evaluation of Selenium, Cypress, and Playwright to identify the most suitable testing framework for production workflows.",
      "Built mock dashboard portals and authentication forms to test automated browser responses."
    ],
    category: "fullstack",
    tags: ["Next.js", "Selenium", "Cypress", "Playwright", "Authentication"],
    githubUrl: "https://github.com/HinaMehboob/testing-demo.git",
    liveUrl: "",
  },
  {
    id: 6,
    title: "Live Cricket Score Predictor",
    description:
      "An end-to-end ML pipeline built to predict live T20 cricket scores, achieving 97% accuracy by modeling stochastic scoring patterns.",
    bullets: [
      "Engineered machine learning logic using Random Forest algorithms and Flask.",
      "Developed a real-time web interface providing live score projections during matches."
    ],
    category: "ai",
    tags: ["Python", "Random Forest", "Scikit-Learn", "Flask", "Predictive Modeling"],
    githubUrl: "https://github.com/HinaMehboob/cricket-predictor",
    liveUrl: "",
  },
  {
    id: 7,
    title: "HamOrSpam Email Detector",
    description:
      "Implemented SVM and Logistic Regression classifiers from scratch to detect SMS spam, utilizing multiple custom loss functions.",
    bullets: [
      "Built a real-time Flask dashboard with live training visualization and inference pipelines.",
      "Compared manual ML implementations against Scikit-Learn to analyze optimization behavior."
    ],
    category: "ai",
    tags: ["Python", "SVM", "Logistic Regression", "Flask", "Classification"],
    githubUrl: "https://github.com/HinaMehboob/HamOrSpam.git",
    liveUrl: "",
  },
];

// Helper to assign brand colors dynamically to project stack tags using category hues
const getTagStyle = (tag: string) => {
  const t = tag.toLowerCase();

  // Frontend / Framework (blue)
  if (["next.js", "typescript", "react", "tailwind", "figma", "responsive design", "ui/ux"].some(k => t.includes(k))) {
    return { backgroundColor: "var(--tag-frontend-bg)", borderColor: "var(--tag-frontend-border)", color: "var(--tag-frontend-text)" };
  }

  // Backend / API (purple)
  if (["fastapi", "github api", "vercel", "python", "cms"].some(k => t.includes(k))) {
    return { backgroundColor: "var(--tag-backend-bg)", borderColor: "var(--tag-backend-border)", color: "var(--tag-backend-text)" };
  }

  // AI / ML (orange)
  if (["random forest", "scikit-learn", "predictive modeling", "n8n", "claude", "langgraph", "langchain", "gemini", "ai chatbot", "svm", "logistic regression", "classification"].some(k => t.includes(k))) {
    return { backgroundColor: "var(--tag-ai-bg)", borderColor: "var(--tag-ai-border)", color: "var(--tag-ai-text)" };
  }

  // Database / Storage (green)
  if (["supabase", "pgvector", "postgres"].some(k => t.includes(k))) {
    return { backgroundColor: "var(--tag-db-bg)", borderColor: "var(--tag-db-border)", color: "var(--tag-db-text)" };
  }

  // Testing / DevOps (teal)
  if (["selenium", "cypress", "playwright", "automation", "docker"].some(k => t.includes(k))) {
    return { backgroundColor: "var(--tag-test-bg)", borderColor: "var(--tag-test-border)", color: "var(--tag-test-text)" };
  }

  // Neutral / generic (gray)
  return { backgroundColor: "var(--tag-neutral-bg)", borderColor: "var(--tag-neutral-border)", color: "var(--tag-neutral-text)" };
};

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack">("all");
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const toggleDetails = (id: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>

          {/* Filter Buttons */}
          <motion.div
            className={styles.filters}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <button
              className={`${styles.filterBtn} ${
                filter === "all" ? styles.activeFilter : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`${styles.filterBtn} ${
                filter === "ai" ? styles.activeFilter : ""
              }`}
              onClick={() => setFilter("ai")}
            >
              AI & Machine Learning
            </button>
            <button
              className={`${styles.filterBtn} ${
                filter === "fullstack" ? styles.activeFilter : ""
              }`}
              onClick={() => setFilter("fullstack")}
            >
              Full-Stack & Testing
            </button>
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div
          className={styles.grid}
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = !!expandedProjects[project.id];
              return (
                <motion.article
                  key={project.id}
                  className={styles.projectCard}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className={styles.cardHeader}>
                    <svg
                      className={styles.folderIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>

                    <div className={styles.links}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkIcon}
                        aria-label={`View code for ${project.title}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                      
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.linkIcon}
                          aria-label={`Visit live site of ${project.title}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}

                      {project.videoUrl && (
                        <button
                          onClick={() => setActiveVideo(project.videoUrl!)}
                          className={styles.linkIcon}
                          aria-label={`Watch video of ${project.title}`}
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>

                  {/* Toggle Button for Accordion details */}
                  <button
                    className={styles.toggleBtn}
                    onClick={() => toggleDetails(project.id)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Show Less" : "See Details"}
                    <svg
                      className={`${styles.toggleIcon} ${isExpanded ? styles.iconRotated : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Bullet list with smooth slide height transition */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                      marginTop: isExpanded ? 16 : 0,
                      marginBottom: isExpanded ? 8 : 0
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <ul className={styles.bulletList}>
                      {project.bullets.map((bullet, index) => (
                        <li key={index} className={styles.bulletItem}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <div className={styles.tagList}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={styles.tag}
                        style={getTagStyle(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className={styles.videoModalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeModalBtn} onClick={() => setActiveVideo(null)} aria-label="Close video">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <video src={activeVideo} controls autoPlay className={styles.videoPlayer} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
