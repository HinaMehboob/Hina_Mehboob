"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";

interface SkillItem {
  name: string;
  logo: React.ReactNode;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Core & Frontend",
      items: [
        {
          name: "Next.js 16",
          logo: (
            <svg viewBox="0 0 180 180" width="20" height="20" fill="currentColor">
              <path d="M120 15v112.5H45L120 15Z" />
              <rect width="15" height="112.5" x="120" y="15" />
            </svg>
          ),
        },
        {
          name: "TypeScript",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <rect x="0" y="0" width="24" height="24" rx="3" fill="#3178C6"/>
              <text x="13.5" y="17" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle">TS</text>
            </svg>
          ),
        },
        {
          name: "React",
          logo: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" width="20" height="20" fill="none" stroke="#61DAFB" strokeWidth="1.2">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              <circle r="2" fill="#61DAFB"/>
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 3c-1.2 0-2.4.6-3.3 1.7C7 6.4 5.8 9.2 5 12c-.8 2.8-1.5 5.2-2.3 6.7C2.1 19.8 1.5 20 1 20c3 0 5-1.5 6.5-3.5 1.2-1.6 2.1-4 3-6.5.9-2.5 1.8-4.5 2.7-5.5.7-.7 1.3-1 1.8-1-3 0-5 1.5-6.5 3.5C7.3 9.1 6.4 11.5 5.5 14c-.9 2.5-1.8 4.5-2.7 5.5-.7.7-1.3 1-1.8 1 3 0 5-1.5 6.5-3.5 1.2-1.6 2.1-4 3-6.5.9-2.5 1.8-4.5 2.7-5.5.7-.7 1.3-1 1.8-1Z" fill="#06B6D4"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Backend & Cloud",
      items: [
        {
          name: "FastAPI / Python",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 2c3 0 4 1.5 4 4v2.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 0-.5.5v3h3.5a2 2 0 0 1 2 2v2.5c0 2.5-1.5 4-4 4s-4-1.5-4-4V16a.5.5 0 0 1 .5-.5h5a.5.5 0 0 0 .5-.5v-3H11a2 2 0 0 1-2-2V7.5C9 5 10.5 2 12 2Z" fill="#3776AB"/>
              <path d="M12 22c-3 0-4-1.5-4-4v-2.5a.5.5 0 0 1 .5-.5h5c.5 0 .5-.5.5-.5v-3H10.5a2 2 0 0 1-2-2V7.5c0-2.5 1.5-4 4-4s4 1.5 4 4V8a.5.5 0 0 1-.5.5h-5c-.5 0-.5.5-.5.5v3H13.5a2 2 0 0 1 2 2V16.5c0 2.5-1.5 4-4 4Z" fill="#FFE873"/>
            </svg>
          ),
        },
        {
          name: "PostgreSQL",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <ellipse cx="12" cy="5" rx="9" ry="3" fill="#336791"/>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="#336791"/>
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" fill="#205077"/>
            </svg>
          ),
        },
        {
          name: "Supabase Postgres",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2" fill="#3ECF8E"/>
            </svg>
          ),
        },
        {
          name: "Docker & CI/CD",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M22 10.5h-5.5V5h5.5v5.5ZM16.5 10.5H11V5h5.5v5.5ZM11 10.5H5.5V5H11v5.5ZM5.5 10.5H0V5h5.5v5.5Z" fill="#2496ED"/>
              <path d="M0 13h24v6H0v-6Z" fill="#1D78B8"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: "AI & Automation",
      items: [
        {
          name: "LangChain / Graph",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" strokeWidth="2">
              <circle cx="12" cy="12" r="3" stroke="#34D399"/>
              <path d="M12 2v7M12 15v7M2 12h7M15 12h7" stroke="#38BDF8"/>
            </svg>
          ),
        },
        {
          name: "Gemini / Claude APIs",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z" fill="#8E75FF"/>
              <path d="M7 6l-1 2-2 1 2 1 1 2 1-2 2-1-2-1z" fill="#E05C3E"/>
            </svg>
          ),
        },
        {
          name: "n8n Orchestration",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <rect x="3" y="3" width="18" height="18" rx="3" fill="#FF6C37"/>
              <path d="M9 17V7l6 10V7" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
        },
        {
          name: "Agentic RAG / Search",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" stroke="#34D399"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#38BDF8"/>
              <path d="M11 8v6M8 11h6" stroke="#38BDF8"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Testing & Design",
      items: [
        {
          name: "Playwright / Cypress",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" fill="#2E8555"/>
              <circle cx="12" cy="11" r="3.5" fill="#ffffff"/>
            </svg>
          ),
        },
        {
          name: "Selenium",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <rect x="3" y="3" width="18" height="18" rx="3" fill="#43B02A"/>
              <text x="12" y="15" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">Se</text>
            </svg>
          ),
        },
        {
          name: "UI/UX Design (Figma)",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M8 5a3 3 0 0 1 3 3v3H8a3 3 0 1 1 0-6Z" fill="#F24E1E"/>
              <path d="M8 11a3 3 0 0 1 3 3v3a3 3 0 1 1-6 0v-3a3 3 0 0 1 3-3Z" fill="#A259FF"/>
              <path d="M14 5a3 3 0 1 1 3 3v3h-3V5Z" fill="#FF7262"/>
              <path d="M14 11h3a3 3 0 1 1-3 3v-3Z" fill="#1ABC9C"/>
              <path d="M8 17a3 3 0 1 1 6 0v-6H8v6Z" fill="#0ACF83"/>
            </svg>
          ),
        },
        {
          name: "Scikit-Learn / ML",
          logo: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <circle cx="7" cy="7" r="4.5" fill="#3776AB"/>
              <circle cx="17" cy="17" r="4.5" fill="#F7931E"/>
              <line x1="9.83" y1="9.83" x2="14.17" y2="14.17" stroke="#F4F4F6" strokeWidth="2.5"/>
            </svg>
          ),
        },
      ],
    },
  ];

  const allSkills = categories.flatMap((c) => c.items);
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
      </div>

      <div className={styles.marqueeContainer}>
        {/* Row 1 - Moves Left */}
        <div className={styles.marqueeRow} style={{ "--speed": "35s" } as React.CSSProperties}>
          <div className={styles.marqueeContent}>
            {row1.map((item, idx) => (
              <div key={`r1-a-${idx}`} className={styles.skillCard}>
                <span className={styles.logoWrapper}>{item.logo}</span>
                <span className={styles.name}>{item.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.marqueeContent} aria-hidden="true">
            {row1.map((item, idx) => (
              <div key={`r1-b-${idx}`} className={styles.skillCard}>
                <span className={styles.logoWrapper}>{item.logo}</span>
                <span className={styles.name}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Right (Reverse) */}
        <div className={`${styles.marqueeRow} ${styles.marqueeReverse}`} style={{ "--speed": "40s" } as React.CSSProperties}>
          <div className={styles.marqueeContent}>
            {row2.map((item, idx) => (
              <div key={`r2-a-${idx}`} className={styles.skillCard}>
                <span className={styles.logoWrapper}>{item.logo}</span>
                <span className={styles.name}>{item.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.marqueeContent} aria-hidden="true">
            {row2.map((item, idx) => (
              <div key={`r2-b-${idx}`} className={styles.skillCard}>
                <span className={styles.logoWrapper}>{item.logo}</span>
                <span className={styles.name}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
