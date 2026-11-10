import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Hero() {
  const { hero } = siteConfig;

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-10 md:pt-36 md:pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Full-Bleed Atmospheric Background Image with Gradient Overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Background photo */}
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.38 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src={hero.backgroundImage}
          alt={hero.backgroundAlt}
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.15]"
          loading="eager"
        />

        {/* Cinematic dark gradients for editorial depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F0F] via-[#0E0F0F]/60 to-[#0E0F0F]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F0F]/90 via-transparent to-[#0E0F0F]/80" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0E0F0F] to-transparent" />
      </div>

      {/* Main Hero Content (Top + Middle) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center flex-grow pt-8 md:pt-14 pb-12"
      >
        {/* Eyebrow with Amber Dot */}
        <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-6 md:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#E09F2F] shadow-[0_0_8px_#E09F2F]" />
          <p className="font-mono text-xs md:text-[13px] tracking-widestMono text-[#9A9A94] uppercase">
            {hero.eyebrow}
          </p>
        </motion.div>

        {/* Signature Giant Heading: Solid + Outlined */}
        <motion.div variants={itemVariants} className="select-none tracking-tight">
          <h1 className="flex flex-col text-[16vw] sm:text-[14vw] md:text-[11.5vw] lg:text-[9.5rem] font-extrabold uppercase leading-[0.88] tracking-tight">
            {/* First word: Solid Off-White */}
            <span className="text-[#F2F2EC] hover:text-white transition-colors duration-300">
              {hero.headingSolid}
            </span>
            {/* Second word: Outlined Text Stroke */}
            <span className="text-outline hover:text-[#F2F2EC] transition-all duration-500">
              {hero.headingOutlined}
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#9A9A94] uppercase mt-8 md:mt-10 max-w-2xl leading-relaxed"
        >
          {hero.tagline}
        </motion.p>
      </motion.div>

      {/* Bottom Hero Control Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full pt-8 border-t border-white/10 flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-8">
          {/* Bottom Left: Circular Scroll Button + Mono Label */}
          <div className="flex items-center">
            <a
              href="#about"
              className="group flex items-center gap-3.5 focus-ring rounded p-1"
              aria-label="Scroll to discover work"
            >
              <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-[#F2F2EC] group-hover:border-[#E09F2F] group-hover:text-[#E09F2F] group-hover:shadow-[0_0_12px_rgba(224,159,47,0.3)] transition-all duration-300">
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </div>
              <span className="font-mono text-[11px] md:text-xs tracking-widestMono text-[#9A9A94] group-hover:text-[#F2F2EC] uppercase transition-colors">
                {hero.scrollText}
              </span>
            </a>
          </div>

          {/* Bottom Center: Two-line editorial statement (Solid + Outlined) */}
          <div className="text-left md:text-center">
            <div className="font-sans font-bold text-base md:text-lg tracking-tight leading-snug">
              <span className="text-[#F2F2EC] block">{hero.perspectiveSolid}</span>
              <span className="text-outline block text-sm md:text-base tracking-wider font-semibold">
                {hero.perspectiveOutlined}
              </span>
            </div>
          </div>

          {/* Bottom Right: Amber CTA Button */}
          <div className="flex items-center md:justify-end">
            <a
              href={hero.ctaHref}
              className="group bg-[#E09F2F] hover:bg-[#C98D26] text-[#0E0F0F] font-sans font-bold text-xs md:text-sm tracking-wider uppercase px-6 py-3.5 rounded flex items-center gap-2.5 transition-all duration-300 shadow-[0_4px_20px_rgba(224,159,47,0.25)] hover:shadow-[0_6px_25px_rgba(224,159,47,0.4)] hover:-translate-y-0.5 focus-ring"
            >
              <span>{hero.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Micro Caption */}
        <div className="flex items-center justify-between text-[#9A9A94]/60 font-mono text-[10px] tracking-widest uppercase pt-2">
          <span>{hero.microCaption}</span>
          <span className="hidden sm:inline">THEJUS ENGINEERING COLLEGE · 2026</span>
        </div>
      </motion.div>
    </section>
  );
}

