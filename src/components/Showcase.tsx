"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    id: "projects",
    label: "Projects",
    title: "Selected Projects",
    desc: "Modern frontend experiences with cinematic animations and premium UI.",
    items: [
      {
        tech: "React + Three.js",
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
        github: "#"
      },
      {
        tech: "TypeScript + Storybook",
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
        github: "#"
      },
      {
        tech: "Next.js + D3.js",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        github: "#"
      }
    ]
  },
  {
    id: "certificates",
    label: "Certificates",
    title: "Verified Certificates",
    desc: "Frontend development and creative engineering certifications.",
    items: [
      {
        title: "Advanced React Patterns",
        desc: "Master complex state management and performance optimization",
        tech: "Udemy 2024",
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
      },
      {
        title: "Web Design Fundamentals",
        desc: "Complete guide to modern web design principles",
        tech: "Coursera 2024",
        thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop"
      },
      {
        title: "Creative Coding Bootcamp",
        desc: "Build interactive experiences with creative tech",
        tech: "Skillshare 2024",
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
      }
    ]
  },
  {
    id: "tech",
    label: "Tech Stack",
    title: "Tools & Technologies",
    desc: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js.",
    items: [
      {
        title: "React & Next.js",
        desc: "Building modern web applications with latest features",
        tech: "Frontend Core",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop"
      },
      {
        title: "Animation Libraries",
        desc: "Framer Motion, GSAP for cinematic interactions",
        tech: "Motion Design",
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
      },
      {
        title: "Styling Solutions",
        desc: "Tailwind CSS, styled-components, CSS modules",
        tech: "Design System",
        thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
      }
    ]
  },
];

export default function ShowcaseSection() {
  const [active, setActive] = useState("projects");

  const current = tabs.find((tab) => tab.id === active);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden text-white px-6 md:px-20 py-28">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-white/5 blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top label */}
        <motion.div 
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-10 h-[1px] bg-white/30" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-white/50 font-mono">
            ✦ Showcase
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          className="text-center text-[clamp(52px,8vw,120px)] font-black leading-none tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Creative Space
        </motion.h1>

        {/* Tab Switcher */}
        <motion.div
          className="relative mt-14 flex items-center p-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Active pill */}
          <motion.div
            layoutId="active-pill"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
            className="absolute inset-y-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-2xl shadow-lg"
            style={{
              width: "160px",
              left:
                active === "projects"
                  ? "8px"
                  : active === "certificates"
                  ? "168px"
                  : "328px",
            }}
          />

          {tabs.map((tab, idx) => (
            <motion.button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="relative z-10 w-[160px] h-[56px] rounded-full text-sm font-medium tracking-wide transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <span
                className={
                  active === tab.id
                    ? "text-white font-semibold"
                    : "text-white/40"
                }
              >
                {tab.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Showcase Card */}
        <div className="relative w-full max-w-6xl mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current?.id}
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.96 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 md:p-16 min-h-[500px]"
            >
              {/* Glow effect */}
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />

              {/* Top text */}
              <motion.div 
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-[1px] bg-white/30" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-white/45">
                  {current?.label}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-[clamp(48px,7vw,96px)] font-black leading-none tracking-tight max-w-4xl"
              >
                {current?.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 max-w-2xl text-white/60 text-sm md:text-lg leading-relaxed"
              >
                {current?.desc}
              </motion.p>

              {/* Showcase items grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-14 grid md:grid-cols-3 gap-6"
              >
                {current?.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative rounded-[16px] border border-white/10 overflow-hidden group h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-52 overflow-hidden bg-white/5">
                      <img 
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                    </div>

                    {/* Content */}
                    <div className="relative flex-1 p-5 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-white leading-tight">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-xs text-white/45 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-mono">
                          {item.tech}
                        </span>

                        {item.github && (
                          <motion.a
                            href={item.github}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}