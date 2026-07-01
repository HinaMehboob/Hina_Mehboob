"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Side: Text details */}
        <div className={styles.contentColumn}>
          {/* Badge container */}
          <motion.div
            className={styles.badgeWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.badge}>
              <svg
                className={styles.pinIcon}
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
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className={styles.badgeText}>
                Rawalpindi, Pakistan <span className={styles.separator}>·</span>{" "}
                <span className={styles.status}>
                  <span className={styles.pulseDot}></span>
                  open to work
                </span>
              </span>
            </div>
          </motion.div>

          {/* Headings */}
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I&apos;m Hina Mehboob
          </motion.h1>
          
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Full-Stack AI Developer | Software Engineering Undergraduate
          </motion.h2>

          {/* Description */}
          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            Software Engineering undergraduate at NUST building production-grade
            applications — from AI-powered autonomous pipelines to responsive UIs.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#projects" className={styles.btnSecondary}>
              View projects
            </a>
            <a href="#contact" className={styles.btnPrimary}>
              <svg
                className={styles.mailIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Right Side: Avatar/Pic */}
        <motion.div
          className={styles.avatarColumn}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.avatarWrapper}>
            <img
              src="/avatar.png?v=3"
              alt="Hina Mehboob Avatar"
              width={300}
              height={300}
              className={styles.avatarImage}
            />
            <div className={styles.avatarRing}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
