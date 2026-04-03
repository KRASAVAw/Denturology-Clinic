import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowDownRight, Copy, Menu, X } from "lucide-react";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

import mjdDentIcon from "../imports/MJD_Dent-3.svg";

import introImg1 from "../assets/d8c7cbf7af33c2ebde95cb5c2604ec94969ca7e1.png";
import introImg2 from "../assets/1d0e7256fed76f77256562017ee2cb3f7eeff118.png";
import introImg3 from "../assets/94cc861d0202edd6091ad4cb937ec85735a7fec3.png";

/* ─── Blob configuration ─────────────────────────────────────────────────── */
const BLOBS = [
  // Tier 1 – centre, fastest
  { x: '50%',  y: '112%', size: 440, tier: 1 },
  // Tier 2
  { x: '33%',  y: '104%', size: 320, tier: 2 },
  { x: '67%',  y: '104%', size: 320, tier: 2 },
  // Tier 3
  { x: '16%',  y: '98%',  size: 260, tier: 3 },
  { x: '84%',  y: '98%',  size: 260, tier: 3 },
  { x: '50%',  y: '92%',  size: 240, tier: 3 },
  // Tier 4 – outer / upper coverage
  { x: '1%',   y: '90%',  size: 210, tier: 4 },
  { x: '99%',  y: '90%',  size: 210, tier: 4 },
  { x: '27%',  y: '86%',  size: 200, tier: 4 },
  { x: '73%',  y: '86%',  size: 200, tier: 4 },
  { x: '50%',  y: '79%',  size: 190, tier: 4 },
  { x: '12%',  y: '76%',  size: 175, tier: 4 },
  { x: '88%',  y: '76%',  size: 175, tier: 4 },
  { x: '39%',  y: '71%',  size: 165, tier: 4 },
  { x: '61%',  y: '71%',  size: 165, tier: 4 },
  { x: '50%',  y: '63%',  size: 155, tier: 4 },
  { x: '4%',   y: '62%',  size: 145, tier: 4 },
  { x: '96%',  y: '62%',  size: 145, tier: 4 },
  { x: '24%',  y: '57%',  size: 135, tier: 4 },
  { x: '76%',  y: '57%',  size: 135, tier: 4 },
  { x: '50%',  y: '50%',  size: 130, tier: 4 },
  { x: '8%',   y: '45%',  size: 120, tier: 4 },
  { x: '92%',  y: '45%',  size: 120, tier: 4 },
  { x: '35%',  y: '40%',  size: 115, tier: 4 },
  { x: '65%',  y: '40%',  size: 115, tier: 4 },
  { x: '50%',  y: '32%',  size: 105, tier: 4 },
  { x: '18%',  y: '28%',  size: 100, tier: 4 },
  { x: '82%',  y: '28%',  size: 100, tier: 4 },
  { x: '50%',  y: '18%',  size:  95, tier: 4 },
  { x: '5%',   y: '15%',  size:  90, tier: 4 },
  { x: '95%',  y: '15%',  size:  90, tier: 4 },
  { x: '30%',  y: '10%',  size:  85, tier: 4 },
  { x: '70%',  y: '10%',  size:  85, tier: 4 },
  { x: '50%',  y: '3%',   size:  80, tier: 4 },
  { x: '20%',  y: '0%',   size:  80, tier: 4 },
  { x: '80%',  y: '0%',   size:  80, tier: 4 },
];

export default function App() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const transitionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  /* Tier scales – each tier starts slightly later so blobs cascade outward */
  const blobScale1 = useTransform(scrollYProgress, [0.04, 0.62], [0, 7]);
  const blobScale2 = useTransform(scrollYProgress, [0.08, 0.66], [0, 6.5]);
  const blobScale3 = useTransform(scrollYProgress, [0.12, 0.70], [0, 6.2]);
  const blobScale4 = useTransform(scrollYProgress, [0.16, 0.74], [0, 6]);

  const tierScales = [blobScale1, blobScale2, blobScale3, blobScale4];

  /* Hero content fades away early in the scroll */
  const heroOpacity  = useTransform(scrollYProgress, [0.0, 0.42], [1, 0]);

  /* Promise section fades in once blobs have largely covered the screen */
  const promiseOpacity = useTransform(scrollYProgress, [0.34, 0.56], [0, 1]);

  /* Circles reveal by expanding their width, pushing text aside */
  const circleWidth1 = useTransform(smoothProgress, [0.76, 0.88], ["0em", "1.1em"]);
  const circleWidth2 = useTransform(smoothProgress, [0.80, 0.92], ["0em", "1.1em"]);
  const circleWidth3 = useTransform(smoothProgress, [0.84, 0.96], ["0em", "1.1em"]);

  const circleMargin1 = useTransform(smoothProgress, [0.76, 0.88], ["0px", "8px"]);
  const circleMargin2 = useTransform(smoothProgress, [0.80, 0.92], ["0px", "8px"]);
  const circleMargin3 = useTransform(smoothProgress, [0.84, 0.96], ["0px", "8px"]);

  /* Persistent Navbar appears at the very end of the sticky section / approaching Services */
  const persistentNavOpacity = useTransform(smoothProgress, [0.95, 1], [0, 1]);
  const persistentNavY = useTransform(smoothProgress, [0.95, 1], ["-100%", "0%"]);

  return (
    <div className="w-full font-sans selection:bg-[#1C1C1A] selection:text-[#F3F2EC]">

      {/* ── Mobile Fullscreen Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[200] bg-[#F3F2EC]/95 backdrop-blur-2xl flex flex-col p-4 md:hidden text-[#1C1C1A]"
          >
            <div className="w-full max-w-[1400px] flex justify-between items-center mx-auto pt-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#1C1C1A]/10 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
                <img src={mjdDentIcon} alt="MJD Logo" className="w-[85%] h-[85%] object-contain" />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center bg-white/70 backdrop-blur-md w-9 h-9 rounded-full border border-[#1C1C1A]/10 text-[#1C1C1A] hover:bg-white/90 transition-colors shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
              >
                <X size={18} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8 mt-24 text-[28px] lowercase tracking-[-0.02em] font-medium px-4 items-center w-full">
              <motion.a initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }} href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1C1C1A]/60 transition-colors">{lang === 'fr' ? 'accueil' : 'welcome'}</motion.a>
              <motion.a initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }} href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1C1C1A]/60 transition-colors">{lang === 'fr' ? 'à propos' : 'about us'}</motion.a>
              <motion.a initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }} href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1C1C1A]/60 transition-colors">{lang === 'fr' ? 'services' : 'services'}</motion.a>
              <motion.a initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }} href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1C1C1A]/60 transition-colors">{lang === 'fr' ? 'témoignages' : 'experiences'}</motion.a>
              <motion.a initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }} href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1C1C1A]/60 transition-colors">{lang === 'fr' ? 'contact' : 'contact'}</motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Persistent Navbar (Appears on scroll approaching "Nos Services") ── */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-[100] pt-4 md:pt-6 px-4 md:px-8 flex justify-center"
        style={{ opacity: persistentNavOpacity, y: persistentNavY }}
      >
        <div className="w-full max-w-[1400px] flex justify-between items-center relative">
          
          {/* Mobile Left: Logo Pill */}
          <div className="md:hidden flex">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#1C1C1A]/10 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <img src={mjdDentIcon} alt="MJD Logo" className="w-[85%] h-[85%] object-contain" />
            </div>
          </div>

          {/* Desktop Left Spacer */}
          <div className="hidden md:block flex-1 w-auto" />

          {/* Desktop Center Navigation */}
          <div className="hidden md:flex flex-none justify-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center bg-white/70 backdrop-blur-md border border-[#1C1C1A]/10 rounded-full p-1 pr-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] gap-7">
              {/* Logo Icon */}
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#1C1C1A]/5 shadow-sm overflow-hidden">
                <img src={mjdDentIcon} alt="MJD Logo" className="w-[85%] h-[85%] object-contain" />
              </div>

              {/* Nav Links */}
              <nav className="flex items-center gap-6 text-[14px] lowercase tracking-normal text-[#1C1C1A]/70 font-medium whitespace-nowrap">
                <a href="#" className="text-[#1C1C1A] hover:text-[#1C1C1A]/70 transition-colors whitespace-pre">{lang === 'fr' ? 'accueil' : 'welcome'}</a>
                <a href="#" className="hover:text-[#1C1C1A] transition-colors whitespace-pre">{lang === 'fr' ? 'à propos' : 'about us'}</a>
                <a href="#" className="hover:text-[#1C1C1A] transition-colors whitespace-pre">{lang === 'fr' ? 'services' : 'services'}</a>
                <a href="#" className="hover:text-[#1C1C1A] transition-colors whitespace-pre">{lang === 'fr' ? 'témoignages' : 'experiences'}</a>
                <a href="#" className="hover:text-[#1C1C1A] transition-colors whitespace-pre">{lang === 'fr' ? 'contact' : 'contact'}</a>
              </nav>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex flex-1 justify-end gap-2 md:gap-0">
            <button 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-[12px] font-medium transition-colors bg-white/70 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#1C1C1A]/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:bg-white/90"
            >
              <span className={`transition-colors ${lang === 'fr' ? 'text-[#1C1C1A]' : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]/70'}`}>FR</span>
              <span className="text-[#1C1C1A]/20">/</span>
              <span className={`transition-colors ${lang === 'en' ? 'text-[#1C1C1A]' : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]/70'}`}>EN</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center bg-white/70 backdrop-blur-md w-8 h-8 rounded-full border border-[#1C1C1A]/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] text-[#1C1C1A] hover:bg-white/90 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={16} />
            </button>
          </div>

        </div>
      </motion.div>

      {/* ── Hidden SVG – Goo / inkblot filter definition ── */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      >
        <defs>
          {/*
            feGaussianBlur: softens circle edges so they bleed into each other.
            feColorMatrix:  boosts alpha sharply – turns the blurred gradient
                            into a hard organic edge (the classic "goo" trick).
          */}
          <filter id="inkblot-goo" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="24" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 32 -12"
              result="goo"
            />
          </filter>
        </defs>
      </svg>

      {/* ══════════════════════════════════════════════════════════
          HERO  +  INKBLOT TRANSITION  (sticky scroll zone)
          Height 500 vh  →  400 vh of actual scroll travel
         ══════════════════════════════════════════════════════════ */}
      <div
        ref={transitionRef}
        style={{ height: '500vh', position: 'relative' }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden',
          }}
        >

          {/* ── Layer 0: Hero (video + content) ── */}
          <div className="absolute inset-0 z-0 bg-black text-[#F4F4F4]">

            {/* 1. Base Video */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <video
                src="https://media.weavy.ai/video/upload/uploads/M2xyQdifdHalb8v31gJlhurkMjC3/rdw7m3ficjmc4yznnith.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 2. Main Title (Purely white, sized to frame the center object) */}
            <motion.div 
              className="absolute inset-0 flex flex-col justify-center px-6 md:px-[8vw] pointer-events-none z-10"
              style={{ opacity: heroOpacity }}
            >
              <h1 className="w-full text-[16vw] sm:text-[15vw] md:text-[9.5vw] lg:text-[8.5vw] leading-[1] tracking-[-0.04em] font-medium flex flex-col gap-4 md:gap-8 mt-[-55vh] sm:mt-[-50vh] md:mt-[-12vh] text-white">
                <span className="text-center md:text-left translate-x-0 md:translate-x-[2vw]">{lang === 'fr' ? 'Marjorie' : 'Marjorie'}</span>
                <span className="text-center md:text-right translate-x-0 md:-translate-x-[12vw] lg:-translate-x-[14vw]">{lang === 'fr' ? 'Jolin' : 'Jolin'}</span>
              </h1>
            </motion.div>

            {/* 3. Hero UI – fades out as scroll starts */}
            <motion.div
              className="relative z-20 w-full h-full flex flex-col justify-between p-6 md:p-8"
              style={{ opacity: heroOpacity }}
            >
              {/* ── Header ── */}
              <header className="w-full pt-6 md:pt-8 px-4 md:px-8 flex justify-center">
                <div className="w-full max-w-[1400px] flex justify-between items-center relative">
                  
                  {/* Mobile Left: Logo Pill */}
                  <div className="md:hidden flex">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-white/10 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                      <img src={mjdDentIcon} alt="MJD Logo" className="w-[85%] h-[85%] object-contain" />
                    </div>
                  </div>

                  {/* Desktop Left Spacer */}
                  <div className="hidden md:block flex-1 w-auto" />

                  {/* Desktop Center Pill: Navigation */}
                  <div className="hidden md:flex flex-none justify-center absolute left-1/2 -translate-x-1/2">
                    <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1 pr-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] gap-7">
                      {/* Logo Icon */}
                      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 border border-white/10 overflow-hidden shadow-inner">
                        <img src={mjdDentIcon} alt="MJD Logo" className="w-[85%] h-[85%] object-contain" />
                      </div>

                      {/* Nav Links */}
                      <nav className="flex items-center gap-6 text-[14px] lowercase tracking-normal text-white/70 font-medium whitespace-nowrap">
                        <a href="#" className="text-white hover:text-white/70 transition-colors whitespace-pre">{lang === 'fr' ? 'accueil' : 'welcome'}</a>
                        <a href="#" className="hover:text-white transition-colors whitespace-pre">{lang === 'fr' ? 'à propos' : 'about us'}</a>
                        <a href="#" className="hover:text-white transition-colors whitespace-pre">{lang === 'fr' ? 'services' : 'services'}</a>
                        <a href="#" className="hover:text-white transition-colors whitespace-pre">{lang === 'fr' ? 'témoignages' : 'experiences'}</a>
                        <a href="#" className="hover:text-white transition-colors whitespace-pre">{lang === 'fr' ? 'contact' : 'contact'}</a>
                      </nav>
                    </div>
                  </div>

                  {/* Right: Controls */}
                  <div className="flex flex-1 justify-end gap-2 md:gap-0">
                    <button 
                      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                      className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-[12px] font-medium transition-colors bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/20"
                    >
                      <span className={`transition-colors ${lang === 'fr' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}>FR</span>
                      <span className="text-white/20">/</span>
                      <span className={`transition-colors ${lang === 'en' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}>EN</span>
                    </button>

                    {/* Mobile Hamburger Menu Toggle */}
                    <button 
                      onClick={() => setIsMobileMenuOpen(true)}
                      className="md:hidden flex items-center justify-center bg-white/10 backdrop-blur-md w-8 h-8 rounded-full border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-white hover:bg-white/20 transition-colors"
                      aria-label="Open menu"
                    >
                      <Menu size={16} />
                    </button>
                  </div>

                </div>
              </header>

              {/* ── Footer ── */}
              <footer className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-8 pb-2">
                <div className="w-full md:w-[32%] text-center md:text-left">
                  <p className="text-[14px] md:text-[15px] font-normal leading-[1.5] tracking-normal text-white/80">
                    {lang === 'fr' ? 'Bien plus que des' : 'Much more than an'}<br />
                    {lang === 'fr' ? 'prothèses. Nous créons des' : 'implants. We are making as'}<br />
                    {lang === 'fr' ? 'solutions confortables,' : 'comfortable experiences,'}<br />
                    {lang === 'fr' ? 'naturelles et rassurantes.' : 'natural and reassuringly.'}
                  </p>
                </div>

                <div className="w-full md:w-[36%] flex justify-center pb-2 md:pb-0 mb-6 md:mb-12">
                  <button className="relative overflow-hidden flex items-center gap-5 px-6 py-3 md:px-8 md:py-3.5 border border-white/20 rounded-full bg-white/10 backdrop-blur-md text-[11px] uppercase tracking-[0.15em] font-medium text-white transition-transform duration-300 hover:scale-[1.02] group shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[400px] aspect-square bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    </div>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-[400ms]">
                      {lang === 'fr' ? 'PRENDRE RENDEZ-VOUS' : 'BOOK AN APPOINTMENT'}
                    </span>
                    <ArrowDownRight
                      className="relative z-10 w-4 h-4 group-hover:text-black group-hover:-rotate-45 transition-all duration-[400ms]"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>

                <div className="w-full md:w-[32%] flex justify-center md:justify-end text-center md:text-right">
                  <p className="text-[13px] md:text-[14px] font-normal leading-[1.5] tracking-normal text-white/80">
                    {lang === 'fr' ? 'Une expertise de confiance.' : 'Trusted expertise for us. '}<br />
                    {lang === 'fr' ? 'Des soins attentifs qui' : 'Attentive care that has'}<br />
                    {lang === 'fr' ? 'apportent confort et' : 'brings you comfort &'}<br />
                    {lang === 'fr' ? 'sérénité, chaque visite.' : 'serenity, on every visit'}
                  </p>
                </div>
              </footer>
            </motion.div>
          </div>

          {/* ── Layer 1: Inkblot / Goo blob reveal ──
              Transparent container – beige circles merge through the filter.
              Transparent areas = hero video shows through.
              Beige blob areas  = warm beige (#F3F2EC) covers the hero.
          ── */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ filter: 'url(#inkblot-goo)', overflow: 'visible' }}
          >
            {BLOBS.map((blob, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  background: '#F3F2EC',
                  width:  blob.size,
                  height: blob.size,
                  left:   blob.x,
                  top:    blob.y,
                  x:      '-50%',
                  y:      '-50%',
                  scale:  tierScales[blob.tier - 1],
                  transformOrigin: 'center',
                  willChange: 'transform',
                }}
              />
            ))}
          </div>

          {/* ── Layer 2: Promise section content (fades in over beige blobs) ── */}
          <motion.section
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 md:px-8 pointer-events-none will-change-transform"
            style={{ opacity: promiseOpacity }}
            aria-label="Promesse de la clinique"
          >
            {/* Solid beige backing so text is always readable regardless of blob edge */}
            <div className="absolute inset-0 bg-[#F3F2EC]" />

            <div className="relative z-10 max-w-[1400px] xl:max-w-[1600px] mx-auto flex flex-col items-center text-center w-full px-4">
              <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#1C1C1A]/50 mb-10 md:mb-16">
                {lang === 'fr' ? 'PENSÉ POUR VOUS. FAIT POUR DURER.' : 'MADE JUST FOR YOU. BUILT TO LAST.'}
              </span>

              <h2 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.3] md:leading-[1.15] tracking-[-0.03em] font-medium text-[#1C1C1A]">
                <span>{lang === 'fr' ? 'Une approche' : 'An exclusive'}</span>{" "}
                <motion.span 
                  className="inline-block align-middle h-[1.1em] rounded-full overflow-hidden shadow-sm bg-black/5"
                  style={{ width: circleWidth1, marginLeft: circleMargin1, marginRight: circleMargin1 }}
                >
                  <ImageWithFallback src={introImg1} alt="Patient souriant" className="w-[1.1em] h-full object-cover object-center max-w-none" />
                </motion.span>
                {" "}<span>{lang === 'fr' ? 'humaine' : 'mankind'}</span>{" "}
                <br className="hidden md:block" />
                <span>{lang === 'fr' ? 'de la denturologie — conçue' : 'of the denturology — crafted'}</span>{" "}
                <motion.span 
                  className="inline-block align-middle h-[1.1em] rounded-full overflow-hidden shadow-sm bg-black/5"
                  style={{ width: circleWidth2, marginLeft: circleMargin2, marginRight: circleMargin2 }}
                >
                  <ImageWithFallback src={introImg2} alt="Clinique apaisante" className="w-[1.1em] h-full object-cover object-center max-w-none" />
                </motion.span>
                {" "}<br className="hidden md:block" />
                <span>{lang === 'fr' ? 'pour votre confort' : 'for your own peace'}</span>{" "}
                <motion.span 
                  className="inline-block align-middle h-[1.1em] rounded-full overflow-hidden shadow-sm bg-black/5"
                  style={{ width: circleWidth3, marginLeft: circleMargin3, marginRight: circleMargin3 }}
                >
                  <ImageWithFallback src={introImg3} alt="Chaleur et réconfort" className="w-[1.1em] h-full object-cover object-center max-w-none" />
                </motion.span>
                <span>{lang === 'fr' ? ', sans compromis.' : ', with no regrets'}</span>
              </h2>
            </div>
          </motion.section>

        </div>
      </div>
      {/* ── end sticky zone ── */}

      {/* ══════════════════════════════════════════════════════════
          SERVICES SECTION  (normal document flow)
         ══════════════════════════════════════════════════════════ */}
      <section className="w-full text-[#F4F4F4] pt-24 md:pt-32 pb-32 md:pb-48 px-6 md:px-8 bg-[#58666F] rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] selection:bg-white selection:text-[#58666F] relative z-10">

        <div className="max-w-[1200px] mx-auto flex flex-col items-center">

          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-[700px] mb-16 md:mb-24">
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] leading-[1.1] tracking-[-0.03em] font-medium text-[#F4F4F4] mb-6">
              {lang === 'fr' ? 'Nos Services' : 'Our Services'}
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#F4F4F4]/90 leading-[1.6] mb-10 max-w-[500px]">
              {lang === 'fr' ? 'Réduisez les inconforts et retrouvez le sourire. Nous concevons et ajustons des prothèses avec précision pour une qualité de vie sans compromis.' : 'Reduce your discomforts and get back your smiles. We do design and adjust the prostheses with precision for a great quality of life with no doubts.'}
            </p>
            <button className="relative overflow-hidden flex items-center gap-5 px-6 py-3 md:px-8 md:py-3.5 border border-white/30 rounded-full bg-white/5 text-[11px] uppercase tracking-[0.15em] font-medium text-white/90 transition-transform duration-300 hover:scale-[1.02] group hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] aspect-square bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]" />
              </div>
              <span className="relative z-10 group-hover:text-[#58666F] transition-colors duration-[400ms]">
                {lang === 'fr' ? 'VOIR TOUS LES SERVICES' : 'VIEW ALL OUR SERVICES!'}
              </span>
              <ArrowDownRight
                className="relative z-10 w-4 h-4 group-hover:text-[#58666F] group-hover:-rotate-45 transition-all duration-[400ms]"
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* Two Column Layout */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

            {/* Left: Video */}
            <div className="lg:col-span-7 flex justify-center lg:justify-start order-2 lg:order-1 w-full">
              <div className="relative w-full max-w-[700px] aspect-square md:aspect-[4/3] flex items-center justify-center">
                <video
                  src="https://media.weavy.ai/video/upload/uploads/M2xyQdifdHalb8v31gJlhurkMjC3/qcb1swjj6zpwdfjwk6ij.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center scale-[1.15] md:scale-[1.25]"
                  style={{
                    WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 75%)",
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)"
                  }}
                />
              </div>
            </div>

            {/* Right: Services List */}
            <div className="lg:col-span-5 w-full mx-auto lg:mx-0 flex flex-col relative order-1 lg:order-2">

              {(lang === 'fr' ? [
                { title: "Prothèse sur implants",         desc: "Stabilité optimale et confort accru pour une qualité de vie retrouvée au quotidien." },
                { title: "Prothèse complète",              desc: "Conçue sur mesure pour un ajustement parfait, naturel et harmonieux." },
                { title: "Prothèse partielle",             desc: "Une solution esthétique et discrète pour remplacer une ou plusieurs dents manquantes." },
                { title: "Réparation",                     desc: "Service rapide et minutieux pour redonner vie et solidité à votre prothèse." },
                { title: "Regarnissage / Rebasage",        desc: "Ajustement précis de votre prothèse pour épouser les changements de votre bouche." },
                { title: "Base molle / Palais transparent",desc: "Options personnalisées pour maximiser votre confort avec une discrétion absolue." },
              ] : [
                { title: "Implants Based Dental",         desc: "Optimum stability and increased comforts for an improved quality of daily life." },
                { title: "Complete Dentures  ",              desc: "Custom designed for a completely perfectly, naturally and harmonious adjustments." },
                { title: "Partial Prosthesis  ",             desc: "An absolutely aesthetic and discreet solutions to replace one or multiple teeth." },
                { title: "Repairings",                     desc: "Extremely fast and meticulously service to restore life and strength of repairs." },
                { title: "Relining Job / Reline",        desc: "Precision adjustments of your prostheses to match changes on the mouth perfectly." },
                { title: "Soft Bases / Transparents  ",desc: "Our fully personalized options to maximize all your comfort with total discretion." },
              ]).map((service, idx, arr) => (
                <div key={idx} className="relative flex items-start gap-6 mb-10 last:mb-0 group">
                  {idx !== arr.length - 1 && (
                    <div className="absolute left-[17px] top-[34px] bottom-[-40px] w-[1px] bg-white/20 hidden sm:block" />
                  )}
                  <div className="relative z-10 flex-shrink-0 w-[34px] h-[34px] rounded-full bg-white text-[#58666F] flex items-center justify-center text-[12px] font-bold border-[4px] border-[#58666F] transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    {idx + 1}
                  </div>
                  <div className="flex flex-col pt-1.5">
                    <h3 className="text-[18px] md:text-[20px] font-medium text-[#F4F4F4] tracking-[-0.01em] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-[#F4F4F4]/80 leading-[1.5]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          POURQUOI NOUS CHOISIR (WHY CHOOSE US)
         ══════════════════════════════════════════════════════════ */}
      <WhyChooseUs lang={lang} />

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIALS (MARQUEE)
         ════════════════════════════════════════��═════════════════ */}
      <Testimonials lang={lang} />

      {/* ═══════════════════════���══════════════════════════════════
          CONTACT & APPOINTMENT FORM
         ══════════════════════════════════════════��═══════════════ */}
      <ContactSection lang={lang} />

      {/* ══════════════════════════════════════════════════════════
          FOOTER
         ══════════════════════════════════════════════════════════ */}
      <Footer lang={lang} />
    </div>
  );
}
