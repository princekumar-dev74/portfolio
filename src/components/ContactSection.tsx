import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaYoutube, FaTelegram } from "react-icons/fa";


export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        message: "",
    });

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSend = () => {
        if (!form.name || !form.message) return;

        const text = `Hello, my name is ${form.name}%0A%0A${form.message}`;

        const phone = "91000000000";

        window.open(
            `https://wa.me/${phone}?text=${text}`,
            "_blank"
        );
    };



    return (
        <section
            className="relative w-full min-h-screen bg-black overflow-hidden
            px-4 sm:px-8 md:px-16 lg:px-24 py-24 text-white"
        >
            {/* premium grid background */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white/10 blur-[140px] opacity-20" />

                <div className="absolute bottom-[-220px] right-[-120px] w-[350px] h-[350px] rounded-full bg-white/5 blur-[120px]" />

                <div className="absolute top-[30%] left-[-120px] w-[300px] h-[300px] rounded-full bg-white/5 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* heading */}
                <div className="text-center space-y-5 mb-16">

                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-72 bg-white/10 blur-[120px] rounded-full opacity-40 animate-pulse" />

                    {/* label */}
                    <div className="relative flex items-center justify-center gap-4 opacity-0 animate-[fadeSlideDown_0.8s_ease_forwards]">

                        <div className="relative overflow-hidden">
                            <div className="w-10 h-px bg-white/20" />

                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.45em] text-white/35 font-mono">
                            Contact
                        </span>

                        <div className="relative overflow-hidden">
                            <div className="w-10 h-px bg-white/20" />

                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
                        </div>
                    </div>

                    {/* title */}
                    <div className="relative overflow-hidden">
                        <h1
                            className="font-black tracking-tight leading-none
                            drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
                            text-white opacity-0
                            animate-[headingReveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]"
                            style={{
                                fontSize: "clamp(42px,7vw,92px)",
                            }}
                        >
                            <span
                                className="inline-block bg-gradient-to-b
                                from-white via-white to-white/45
                                bg-clip-text text-transparent"
                            >
                                Let's Build Together
                            </span>
                        </h1>
                    </div>
                </div>

                {/* layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* left side */}
                    <div
                        className="flex flex-col items-center lg:items-start
        text-center lg:text-left
        justify-center gap-8 opacity-0
        animate-[fadeSlideUp_0.8s_ease_0.35s_forwards]"
                    >

                        {/* heading / text */}
                        <div className="space-y-4">

                            <p
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
                                Have an idea, project, or collaboration in mind?
                                Send me a message and let’s create something
                                clean, modern, and impactful together.
                            </p>

                        </div>

                        {/* social icons */}
                        <div className="flex items-center justify-center lg:justify-start gap-5 mt-2">

                            {/* gmail */}
                            <a
                                href="mailto:sprince05873@gmail.com"
                                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                flex items-center justify-center
                transition-all duration-300
                hover:scale-110
                hover:border-white/30
                hover:bg-white/[0.08]
                hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]"
                            >
                                <FaEnvelope
                                    className="text-white/80 group-hover:text-white
                    text-[18px] sm:text-[20px]
                    transition-all duration-300"
                                />

                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0
                    group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(255,255,255,0.08), transparent)",
                                    }}
                                />
                            </a>

                            {/* whatsapp */}
                            <a
                                href="https://wa.me/910000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                flex items-center justify-center
                transition-all duration-300
                hover:scale-110
                hover:border-green-400/40
                hover:bg-green-500/10
                hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
                            >
                                <FaWhatsapp
                                    className="text-white/80 group-hover:text-green-400
                    text-[20px] sm:text-[24px]
                    transition-all duration-300"
                                />

                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0
                    group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(34,197,94,0.08), transparent)",
                                    }}
                                />

                                <div className="absolute inset-0 rounded-2xl border border-green-400/30 animate-ping" />
                            </a>
                        </div>
                    </div>

                    {/* contact card */}
                    <div
                        className="relative rounded-[32px]
                        overflow-hidden opacity-0
                        animate-[cardReveal_1s_ease_0.4s_forwards,floatCard_6s_ease-in-out_infinite]"
                    >

                        <motion.div
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();

                                setPosition({
                                    x: e.clientX - rect.left,
                                    y: e.clientY - rect.top,
                                });
                            }}
                            whileHover={{
                                rotateX: 4,
                                rotateY: -4,
                                scale: 1.01,
                            }}
                            transition={{
                                duration: 0.4,
                            }}
                            className="relative bg-black border border-white/15 rounded-[32px]
                            backdrop-blur-xl
                            shadow-[0_20px_80px_rgba(255,255,255,0.06)]
                            overflow-hidden group"
                        >

                            {/* animated border */}
                            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                                <div
                                    className="absolute inset-[-200%]
                                    animate-[spinGlow_10s_linear_infinite]"
                                    style={{
                                        background:
                                            "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.18), transparent 30%)",
                                    }}
                                />
                            </div>

                            {/* glow */}
                            <div
                                className="absolute w-72 h-72 rounded-full pointer-events-none
                                blur-[90px] opacity-20 transition-all duration-200"
                                style={{
                                    left: position.x - 140,
                                    top: position.y - 140,
                                    background:
                                        "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)",
                                }}
                            />

                            {/* top gradient */}
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    background:
                                        "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 70%)",
                                }}
                            />

                            {/* top line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />

                            {/* extra glow */}
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/5 blur-[100px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

                            <div className="relative z-10 p-6 sm:p-7 space-y-6">

                                {/* top */}
                                <div className="space-y-3">
                                    <div className="flex items-baseline gap-3">
                                        <h2 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                                            Send Message
                                        </h2>

                                        <span className="text-xs uppercase tracking-widest text-white/25 font-mono">
                                            Direct
                                        </span>
                                    </div>

                                    <p className="text-sm text-white/35 leading-relaxed">
                                        Your message opens directly in WhatsApp—no spam, just real connection.
                                    </p>
                                </div>

                                {/* form */}
                                <div className="space-y-4">

                                    {/* input */}
                                    <div className="relative group/input">
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full h-14 px-6 rounded-[16px]
                                            bg-white/[0.03] backdrop-blur-2xl
                                            shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]
                                            hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                                            border border-white/10
                                            group-hover/input:border-white/20
                                            text-white placeholder:text-white/20
                                            outline-none transition-all duration-300
                                            focus:border-white/30
                                            focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                                            font-medium"
                                        />
                                    </div>

                                    {/* textarea */}
                                    <div className="relative group/textarea">
                                        <textarea
                                            rows={4}
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Write your message..."
                                            className="w-full p-5 rounded-[16px] resize-none
                                            bg-white/[0.03] backdrop-blur-2xl
                                            shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]
                                            hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                                            border border-white/10
                                            group-hover/textarea:border-white/20
                                            text-white placeholder:text-white/20
                                            outline-none transition-all duration-300
                                            focus:border-white/30
                                            focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                                            font-medium leading-relaxed"
                                        />
                                    </div>

                                    {/* button */}
                                    <button
                                        onClick={handleSend}
                                        disabled={!form.name || !form.message}
                                        className="group/btn relative overflow-hidden
                                        w-full h-12 rounded-[16px] mt-6
                                        bg-gradient-to-b from-white to-zinc-300
                                        text-black font-bold tracking-wide text-sm uppercase
                                        transition-all duration-400
                                        hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]
                                        hover:scale-[1.02]
                                        active:scale-[0.97]
                                        disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <svg
                                                className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16126562 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99621575 L3.03521743,10.4371852 C3.03521743,10.5942826 3.19218622,10.75138 3.50612381,10.75138 L16.6915026,11.5368670 C16.6915026,11.5368670 17.1624089,11.5368670 17.1624089,12.0081591 C17.1624089,12.4794512 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                                            </svg>

                                            Send Message
                                        </span>

                                        {/* button shine */}
                                        <div
                                            className="absolute inset-0 opacity-0
                                            group-hover/btn:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background:
                                                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent)",
                                                animation:
                                                    "premiumShine 2s linear infinite",
                                            }}
                                        />
                                    </button>

                                    {/* status */}
                                    <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                                        <p className="text-xs text-white/30 font-mono">
                                            Usually replies within a few hours
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeSlideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(24px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes shine {
    0% {
        background-position: 200% center;
    }
    100% {
        background-position: -200% center;
    }
}

                @keyframes headingReveal {
                    from {
                        opacity: 0;
                        transform: translateY(80px) scale(0.92);
                        filter: blur(12px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                        filter: blur(0px);
                    }
                }

                @keyframes lineMove {
                    from {
                        transform: translateX(-120%);
                    }

                    to {
                        transform: translateX(120%);
                    }
                }

                @keyframes cardReveal {
                    from {
                        opacity: 0;
                        transform: translateY(50px) scale(0.96);
                        filter: blur(10px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                        filter: blur(0px);
                    }
                }

                @keyframes premiumShine {
                    from {
                        transform: translateX(-200%);
                    }

                    to {
                        transform: translateX(200%);
                    }
                }

                @keyframes spinGlow {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes floatCard {
                    0% {
                        transform: translateY(0px);
                    }

                    50% {
                        transform: translateY(-10px);
                    }

                    100% {
                        transform: translateY(0px);
                    }
                }
            `}</style>
            
            {/* footer */}
            <div className="relative z-10 mt-24 border-t border-white/10 pt-12 pb-8">

                <div className="relative flex flex-col items-center gap-7">
                    

                    <h2
                        className="text-center font-black tracking-[0.25em] uppercase
  text-white/60 opacity-0
  animate-[headingReveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]"
                        style={{
                            fontSize: "clamp(14px,2vw,18px)",
                        }}
                    >
                        <span
                            className="inline-block bg-gradient-to-b
    from-white via-white/70 to-white/30
    bg-clip-text text-transparent"
                        >
                            Follow Me
                        </span>
                    </h2>
                    
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/prince_kumar_74_"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="group relative grid h-14 w-14 place-items-center overflow-hidden rounded-[20px]
    border border-white/10 bg-white/[0.05] backdrop-blur-2xl
    shadow-[0_10px_30px_rgba(0,0,0,0.28)]
    transition-all duration-500 ease-out
    hover:-translate-y-1.5 hover:scale-105 hover:border-white/30"
                        >
                            {/* YOUR INSTAGRAM GRADIENT */}
                            <div
                                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                style={{
                                    background:
                                        "linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)",
                                }}
                            />

                            {/* inner dark glass */}
                            <div className="absolute inset-[1px] rounded-[19px] bg-[#0b0b12]/80" />

                            {/* glow */}
                            <div className="absolute -inset-6 blur-2xl transition-all duration-500 group-hover:bg-white/10" />

                            {/* icon */}
                            <FaInstagram className="relative z-10 text-[30px] text-white transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/princekumar-dev74"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="group relative grid h-14 w-14 place-items-center overflow-hidden rounded-[20px]
        border border-white/10 bg-white/[0.05] backdrop-blur-2xl
        shadow-[0_10px_30px_rgba(0,0,0,0.28)]
        transition-all duration-500 ease-out
        hover:-translate-y-1.5 hover:scale-105 hover:border-white/40"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/16 via-slate-300/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="absolute inset-[1px] rounded-[19px] bg-[#0b0b12]/80" />
                            <div className="absolute -inset-6 bg-white/0 blur-2xl transition-all duration-500 group-hover:bg-white/12" />

                            <FaGithub className="relative z-10 text-[30px] text-white transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://www.youtube.com/@WebKaizenDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="group relative grid h-14 w-14 place-items-center overflow-hidden rounded-[20px]
        border border-white/10 bg-white/[0.05] backdrop-blur-2xl
        shadow-[0_10px_30px_rgba(0,0,0,0.28)]
        transition-all duration-500 ease-out
        hover:-translate-y-1.5 hover:scale-105 hover:border-red-400/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/18 via-rose-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="absolute inset-[1px] rounded-[19px] bg-[#0b0b12]/80" />
                            <div className="absolute -inset-6 bg-red-500/0 blur-2xl transition-all duration-500 group-hover:bg-red-500/20" />

                            <FaYoutube className="relative z-10 text-[30px] text-white transition-all duration-500 group-hover:scale-110 group-hover:text-red-400" />
                        </a>

                        {/* Telegram */}
                        <a
                            href="https://t.me/web_kaizen_official"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                            className="group relative grid h-14 w-14 place-items-center overflow-hidden rounded-[20px]
        border border-white/10 bg-white/[0.05] backdrop-blur-2xl
        shadow-[0_10px_30px_rgba(0,0,0,0.28)]
        transition-all duration-500 ease-out
        hover:-translate-y-1.5 hover:scale-105 hover:border-sky-400/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/18 via-cyan-400/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="absolute inset-[1px] rounded-[19px] bg-[#0b0b12]/80" />
                            <div className="absolute -inset-6 bg-sky-500/0 blur-2xl transition-all duration-500 group-hover:bg-sky-500/20" />

                            <FaTelegram className="relative z-10 text-[30px] text-white transition-all duration-500 group-hover:scale-110 group-hover:text-sky-400" />
                        </a>
                    </div>

                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

<p className="text-center text-sm tracking-[0.22em] text-white/35">
  Copyright © {new Date().getFullYear()} All Rights Reserved | Created by{" "}
  
  <span className="relative inline-block text-white/70">
    prince
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-2">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </span>
  </span>
</p>
                </div>
            </div>
        </section>
    );
}
