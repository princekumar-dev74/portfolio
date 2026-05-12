import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const BandCard = lazy(() => import("./BandCard"));

export default function FrontendDeveloperSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.4 });

  const [showCard, setShowCard] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [goAbout, setGoAbout] = useState(false);

  const navigate = useNavigate();

  useEffect(() => setMounted(true), []);

  // page exit → navigate after animation
  useEffect(() => {
    if (goAbout) {
      const t = setTimeout(() => {
        navigate("/about");
      }, 1800);

      return () => clearTimeout(t);
    }
  }, [goAbout, navigate]);

  return (

    <motion.section
      ref={ref}
      id="frontend"
      initial={{
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      animate={
        goAbout
          ? {
            x: "-40vw",
            scale: 0.92,
            opacity: 0,
            filter: "blur(8px)",
          }
          : {
            x: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
          }
      }
      transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-start px-6 md:px-20 pt-16 md:pt-28 select-none"
    >
      {/* TEXT */}
      <div className="relative z-10 max-w-2xl">
        <motion.div className="flex items-center mb-6">
          <motion.span
            animate={{
              width: ["0ch", "32ch", "32ch", "0ch"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.8, 1],
            }}
            className="inline-block overflow-hidden whitespace-nowrap text-[11px] tracking-[0.3em] uppercase text-white/60 font-mono"
          >
            ✦ Available for work
          </motion.span>

          <motion.span
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="text-white/60 font-mono ml-[2px]"
          >
            |
          </motion.span>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 50 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[1.05] tracking-tight text-white text-[clamp(56px,9vw,120px)]"
          >
            Frontend
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -80, rotate: -4 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -80, rotate: -4 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[1.05] tracking-tight text-white/70 text-[clamp(56px,9vw,120px)] mb-6"
          >
            Developer
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative text-sm sm:text-base lg:text-xl
    leading-relaxed max-w-md
    font-[Poppins] font-medium
    tracking-wide
    text-transparent bg-clip-text
    bg-[length:200%_auto]
    bg-gradient-to-r
    from-white via-white/60 to-white
    animate-[shine_4s_linear_infinite]"
        >
          Building modern websites with clean, responsive, elegant interfaces.
          Turning ideas and designs into engaging digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 flex flex-wrap gap-4"
        >
          {["Next.js", "React.js", "TypeScript", "Tailwind CSS"].map((tech) => (
            <div
              key={tech}
              className="
        relative group px-5 py-2.5 rounded-2xl
        text-sm font-medium text-white/90
        bg-white/5 backdrop-blur-xl
        border border-white/10
        overflow-hidden
        transition-all duration-300
      "
            >
              {/* animated border fill */}
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-to-r from-white/20 via-white/10 to-transparent"></span>

              {/* glowing border line */}
              <span className="absolute inset-0 rounded-2xl border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* text */}
              <span className="relative z-10">{tech}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 flex flex-col [@media(min-width:540px)]:flex-row items-start md:items-center gap-4">
          {/* Show Card Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            onClick={() => setShowCard((s) => !s)}
            className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent hover:text-black transition-all duration-200 rounded-full relative z-20"
          >
            {showCard ? "Hide Card" : "Show Card"}
          </motion.button>

          {/* About Button */}
          <motion.button
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 1.4 }}
            onClick={() => setGoAbout(true)}
            className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 text-xs uppercase font-bold hover:bg-white hover:text-black rounded-full transition"
          >
            About Me
          </motion.button>
        </div>
      </div>

      {/* 3D ID CARD */}
      <AnimatePresence>
        {showCard && mounted && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-[5] pointer-events-none"
          >
            <Suspense fallback={null}>
              <BandCard />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}