import { useState, useRef, useCallback } from "react";
import { useEffect } from "react";



const techStack = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", color: "#1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", color: "#FFFFFF" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "#FFCA28" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF", color: "#FFFFFF" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7", color: "#00C7B7" },
  { name: "Terminal", icon: "https://cdn.simpleicons.org/gnometerminal/4EAA25", color: "#4EAA25" },
];

const projects = [
  {
    tech: "typescript + Canvas",
    thumbnail: "https://cdn.jsdelivr.net/gh/princekumar-dev74/portfolio/public/preview.png",
    github: "https://github.com/princekumar-dev74/portfolio.git",
  },
  {
    tech: "Typescript + React",
    thumbnail: "https://cdn.jsdelivr.net/gh/princekumar-dev74/Animation@7f2f78f209ffc93bd22d9d5e222cfd23c5fee133/X/Screenshot%202026-05-10%20161948.png",
    github: "https://www.webkaizen.in",
  },
  {
    tech: "HTML + CSS + JS",
    thumbnail: "https://cdn.jsdelivr.net/gh/princekumar-dev74/Animation@7f2f78f209ffc93bd22d9d5e222cfd23c5fee133/X/1.png",
    github: "https://github.com/princekumar-dev74/Animation.git",
  },
];

const certificates = [
  {
    title: "Advanced React Patterns",
    tech: "Udemy 2024",
    thumbnail: "https://camo.githubusercontent.com/24938d39602a5bd139da2eb01794a41689a30207723058da7f5929cba3af1699/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f7072696e63656b756d61722d64657637342f706f7274666f6c696f2f7075626c69632f707265766965772e706e67",
  },
  {
    title: "Web Design Fundamentals",
    tech: "Coursera 2024",
    thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
  },
  {
    title: "Creative Coding Bootcamp",
    tech: "Skillshare 2024",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
];

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-8 4h16v-2H4v2z" />
  </svg>
);

const Spinner = () => (
  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 2v4m0 12v4m10-10h-4M6 12H2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function ProjectCard({ item }) {
  return (
    <div
      className="group relative rounded-2xl border border-white/15 overflow-hidden bg-white/[0.06] 
      hover:border-white/25 transition-all duration-500 
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-md"
      style={{ backdropFilter: "blur(20px)" }}
    >
      {/* Image section */}
      <div className="relative h-48 overflow-hidden bg-white/5">
        <img
          src={item.thumbnail}
          alt={item.tech}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
      </div>

      {/* Footer */}
      <div className="p-5 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono">
          {item.tech}
        </span>

        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-full 
          bg-white/5 border border-white/15 text-white/60 
          hover:bg-white/10 hover:text-white hover:border-white/30 
          transition-all duration-200 active:scale-95"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

function CertCard({ item }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);

    try {
      const response = await fetch(item.thumbnail, { mode: "cors" });
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `${item.title}.jpg`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }

    setTimeout(() => setDownloading(false), 500);
  };

  return (
    <div
      className="group relative rounded-2xl border border-white/15 overflow-hidden bg-white/[0.06]
      hover:border-white/25 transition-all duration-500
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-md"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="relative h-48 overflow-hidden bg-white/5">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-semibold text-sm leading-snug line-clamp-2">
            {item.title}
          </p>
        </div>
      </div>

      <div className="px-5 py-4 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono">
          {item.tech}
        </span>

        <button
          onClick={handleDownload}
          className="flex items-center justify-center w-8 h-8 rounded-full 
          bg-white/5 border border-white/15 text-white/60 
          hover:bg-white/10 hover:text-white hover:border-white/30 
          transition-all duration-200 active:scale-95"
        >
          {downloading ? <Spinner /> : <DownloadIcon />}
        </button>
      </div>
    </div>
  );
}

function TechGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="space-y-8">
      {/* decorative header */}
      <div className="flex items-center justify-center gap-3 text-white/40">
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-mono">
          {techStack.length} technologies · daily stack
        </span>
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-white/30" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-5">
        {techStack.map((tech, i) => (
          <div
            key={tech.name}
            onTouchStart={() => setActiveIndex(i)}
            onTouchEnd={() => setActiveIndex(null)}
            className="group relative opacity-0"
            style={{ animation: `techIn 0.5s ease ${i * 0.04}s forwards` }}
          >
            {/* glow ring */}
            <div
              className={`pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500 ${activeIndex === i
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
                }`}
              style={{
                background: `conic-gradient(from 0deg, transparent 0%, ${tech.color}66 25%, transparent 50%, ${tech.color}33 75%, transparent 100%)`,
                animation: "techSpin 4s linear infinite",
                filter: "blur(6px)",
              }}
            />

            {/* card */}
            <div
              className="relative flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-1.5deg]"
            >
              {/* hover border */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  borderColor: `${tech.color}80`,
                  boxShadow: `0 10px 30px -10px ${tech.color}55`,
                }}
              />

              {/* icon */}
              <div
                className="relative w-12 h-12 flex items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: `radial-gradient(circle at 50% 30%, ${tech.color}22, transparent 70%)`,
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-7 h-7 object-contain drop-shadow"
                  loading="lazy"
                />
              </div>

              {/* label */}
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/45 group-hover:text-white transition-colors font-mono text-center leading-tight">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type TabId = "projects" | "certificates" | "tech";

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech", label: "Tech Stack" },
];

export default function ShowcaseSection() {
  const [active, setActive] = useState("projects");
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef(null);

  const switchTab = useCallback((id) => {
    if (id === active) return;
    setActive(id);
    setAnimKey((k) => k + 1);
  }, [active]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) < 50) return;
    const order = tabs.map((t) => t.id);
    const idx = order.indexOf(active);
    if (dx < 0 && idx < order.length - 1) switchTab(order[idx + 1]);
    if (dx > 0 && idx > 0) switchTab(order[idx - 1]);
    touchStartX.current = null;
  };

  const text = "Portfolio Showcase";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const activePillLeft = active === "projects" ? "8px" : active === "certificates" ? "calc(33.333% + 4px)" : "calc(66.666% + 0px)";

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen bg-black overflow-hidden text-white px-4 sm:px-8 md:px-16 lg:px-24 py-0 md:py-12 -mt-16 sm:mt-0 md:mt-12">

      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-5 opacity-0 animate-[fadeSlideDown_0.6s_ease_forwards]">
          <div className="w-8 h-px bg-white/25" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono">Showcase</span>
          <div className="w-8 h-px bg-white/25" />
        </div>

        {/* Heading */}
        <h1
          className="text-center font-black leading-none tracking-tight mb-4 opacity-0 animate-[fadeSlideUp_0.8s_ease_0.1s_forwards] whitespace-nowrap"
          style={{ fontSize: "clamp(32px,6vw,80px)" }}
        >
          Portfolio Showcase
        </h1>


        {/* Tab Switcher */}
        <div
          className="relative flex items-center p-1.5 rounded-full border border-white/20 bg-white/[0.08] mb-14 w-full max-w-md opacity-0 animate-[fadeSlideUp_0.6s_ease_0.3s_forwards] shadow-2xl shadow-black/40"
          style={{ backdropFilter: "blur(30px)" }}
        >
          {/* Sliding pill */}
          <div
            className="absolute top-1.5 bottom-1.5 rounded-full bg-white/20 border border-white/40 transition-[left] duration-300 ease-out shadow-xl shadow-white/10"
            style={{ width: "calc(33.333% - 4px)", left: activePillLeft, backdropFilter: "blur(15px)" }}
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className="relative z-10 flex-1 h-12 rounded-full text-xs font-medium tracking-wide transition-colors duration-200"
            >
              <span className={active === tab.id ? "text-white font-semibold" : "text-white/35 hover:text-white/60"}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Content area with swipe */}
        <div
          key={animKey}
          className="w-full opacity-0 animate-[contentIn_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {active === "projects" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {projects.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <ProjectCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "certificates" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {certificates.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <CertCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "tech" && (
            <div className="opacity-0" style={{ animation: "fadeSlideUp 0.5s ease forwards" }}>
              <TechGrid />
            </div>
          )}
        </div>

        {/* Swipe hint on mobile */}
        <p className="mt-8 text-[10px] text-white/20 tracking-widest uppercase font-mono sm:hidden">
          swipe to navigate
        </p>
      </div>

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentIn {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes techIn {
          from { opacity: 0; transform: translateY(16px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes techSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}