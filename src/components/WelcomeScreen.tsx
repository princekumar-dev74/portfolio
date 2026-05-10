import { motion } from "framer-motion";
import { Code2, User, Globe } from "lucide-react";

export default function WelcomeScreen() {
  const icons = [Code2, User, Globe];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: {
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black overflow-hidden p-5"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-80px] w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative text-center text-white flex flex-col items-center gap-5 w-full max-w-[340px]"
      >
        {/* Icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className="flex gap-4 items-center justify-center"
        >
          {icons.map((Icon, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.3,
                  rotate: -140,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: 0,
                },
              }}
              transition={{
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.08,
              }}
              className="w-[48px] h-[48px] rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.05)]"
            >
              <Icon size={20} color="white" />
            </motion.div>
          ))}
        </motion.div>

        {/* Text */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <motion.span
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(22px,5vw,34px)] font-black tracking-tight"
            >
              Welcome
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.2,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(22px,5vw,34px)] font-black tracking-tight"
            >
              to my
            </motion.span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(24px,6vw,38px)] font-black tracking-tight leading-tight text-center"
          >
            Portfolio Website
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
          className="text-sm text-white/60 tracking-wide"
        >
          Creating Websites That Feel Alive.
        </motion.p>

        {/* Website Badge */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.04,
          }}
          className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs tracking-[0.25em] text-white/70 shadow-[0_0_30px_rgba(255,255,255,0.04)]"
        >
          www.webkaizen.in
        </motion.div>

        {/* Bottom Loading Line */}
        <div className="mt-10 w-[240px] bg-white/20 h-[2px] overflow-hidden rounded-full">
          <motion.div
            initial={{ width: "10%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 6.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full bg-white"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}