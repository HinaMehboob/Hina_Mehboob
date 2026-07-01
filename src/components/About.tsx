"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className={styles.content}>
          {/* Left Column: Bio */}
          <motion.div
            className={styles.bioColumn}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className={styles.bioText}>
              I am a <strong>Software Engineering Undergraduate (7th semester)</strong> at the <strong>National University of Sciences and Technology (NUST)</strong> in Rawalpindi, Pakistan. I specialize in full-stack web engineering and machine learning integrations.
            </p>
            <p className={styles.bioText}>
              My hands-on experience spans building production-grade web systems — from event-driven autonomous AI development pipelines to high-fidelity user interfaces. Through internship roles and custom projects, I have cultivated a deep understanding of Next.js, TypeScript, FastAPI, and agentic workflows using LangChain/LangGraph.
            </p>
            <p className={styles.bioText}>
              Academic foundations in Data Structures, Object-Oriented Programming, and Databases combined with practical experience in testing frameworks (Selenium, Playwright, Cypress) allow me to build solid, testable applications.
            </p>
          </motion.div>

          {/* Right Column: Education Timeline */}
          <motion.div
            className={styles.educationColumn}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.timeline}>
              {/* NUST Entry */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.educationHighlight}>
                  <div className={styles.eduHeader}>
                    <div className={styles.logoWrapper}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                    </div>
                    <div className={styles.eduTitles}>
                      <h3 className={styles.educationTitle}>National University of Sciences & Technology</h3>
                      <span className={styles.degree}>B.E. Software Engineering</span>
                      <span className={styles.years}>Oct 2023 – Oct 2027</span>
                    </div>
                  </div>
                  <p className={styles.coursework}>
                    <strong>Coursework:</strong> Data Structures & Algorithms, OOP, Database Systems, Software Engineering, Machine Learning.
                  </p>
                </div>
              </div>

              {/* Fauji Foundation Entry */}
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.educationHighlight}>
                  <div className={styles.eduHeader}>
                    <div className={styles.logoWrapper}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--success-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                    </div>
                    <div className={styles.eduTitles}>
                      <h3 className={styles.educationTitle}>Fauji Foundation College</h3>
                      <span className={styles.degree}>Intermediate in Computer Science (ICS)</span>
                      <span className={styles.years}>2021 – 2023</span>
                    </div>
                  </div>
                  <p className={styles.coursework}>
                    <strong>Focus:</strong> Computer Science, Mathematics, and Physics.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
