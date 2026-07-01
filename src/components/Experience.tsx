"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

interface Job {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  logo: React.ReactNode;
}

const experienceData: Job[] = [
  {
    id: 1,
    role: "AI/ML Intern",
    company: "Rise Tech",
    location: "Islamabad, Pakistan",
    duration: "Jun 2026 – Present",
    logo: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="rgba(99, 102, 241, 0.12)" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1"/>
        <path d="M13 28V12h7a4.5 4.5 0 1 1 0 9h-7v7" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 21l6.5 7" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="12" r="1.5" fill="#34D399"/>
      </svg>
    ),
    description: [
      "Developing and deploying machine learning models and AI-powered features as part of the core engineering team.",
      "Collaborating on NLP and LLM integration projects, leveraging modern AI frameworks and APIs.",
      "Contributing to data pipelines, model evaluation, and production deployment workflows."
    ]
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "InoTech Solutions",
    location: "Rawalpindi, Pakistan",
    duration: "Jul 2025 – Aug 2025",
    logo: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.25)" strokeWidth="1"/>
        <circle cx="20" cy="13" r="3.5" fill="#F59E0B"/>
        <path d="M20 18.5v9.5" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 28h10" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    description: [
      "Built and shipped features for Next.js web applications used in live company projects, including authentication flows and REST API integrations.",
      "Designed and executed automated test suites using Selenium, Playwright, and Cypress; produced a comparative analysis to recommend the optimal framework for production use.",
      "Created high-fidelity Figma prototypes that informed UI/UX decisions across multiple client projects."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className={styles.timeline}>
          {experienceData.map((job, idx) => (
            <motion.div
              key={job.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Timeline marker */}
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                <div className={styles.markerLine}></div>
              </div>

              {/* Timeline content */}
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <div className={styles.companyInfoRow}>
                    <div className={styles.companyLogo}>
                      {job.logo}
                    </div>
                    <div>
                      <h3 className={styles.role}>{job.role}</h3>
                      <h4 className={styles.company}>
                        {job.company} <span className={styles.location}>· {job.location}</span>
                      </h4>
                    </div>
                  </div>
                  <span className={styles.duration}>{job.duration}</span>
                </div>

                <ul className={styles.descriptionList}>
                  {job.description.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className={styles.descriptionItem}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
