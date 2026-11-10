import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/content';

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Eyebrow Header */}
      <div className="flex items-center gap-2 mb-12 md:mb-16">
        <span className="w-1.5 h-1.5 bg-[#E09F2F]" />
        <span className="font-mono text-xs tracking-widestMono text-[#9A9A94] uppercase">
          {about.sectionTag}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Text */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-[1.05] mb-8"
          >
            <span className="text-[#F2F2EC]">{about.headingSolid} </span>
            <span className="text-outline">{about.headingOutlined}</span>
          </motion.h2>

          {/* Intro Paragraphs */}
          <div className="space-y-6 text-[#9A9A94] text-base md:text-lg leading-relaxed font-sans font-normal">
            {about.paragraphs.map((p, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Focus Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-2.5 items-center"
          >
            <span className="font-mono text-xs text-[#9A9A94] tracking-widest uppercase mr-2">
              CORE INTERESTS:
            </span>
            {about.interests.map((interest) => (
              <span
                key={interest}
                className="font-mono text-[11px] tracking-wider text-[#F2F2EC] bg-[#141515] border border-white/10 px-3 py-1 rounded"
              >
                {interest}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Portrait Placeholder with Thin Offset Frame & Mono Stats */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {/* Portrait with Thin Offset Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md aspect-[4/5] group"
          >
            {/* Thin Offset Geometric Frame in Amber/White */}
            <div className="absolute -inset-3 md:-inset-4 border border-[#E09F2F]/40 translate-x-2 translate-y-2 pointer-events-none transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />

            {/* Image Container with 1px border */}
            <div className="relative w-full h-full overflow-hidden bg-[#141515] border border-white/15">
              <img
                src={about.portraitImage}
                alt={about.portraitAlt}
                className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F0F] via-transparent to-transparent opacity-60" />

              {/* Bottom photo label */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center font-mono text-[10px] tracking-widest uppercase text-[#F2F2EC] bg-[#0E0F0F]/80 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                <span>PORTRAIT // CANDID</span>
                <span className="text-[#E09F2F]">EST. 2026</span>
              </div>
            </div>
          </motion.div>

          {/* 3+ Stat Items in Monospace Style */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
            {about.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="bg-[#141515] border border-white/10 p-4 transition-all duration-300 hover:border-[#E09F2F]/50 group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] tracking-widestMono text-[#9A9A94] uppercase group-hover:text-[#E09F2F] transition-colors">
                    {stat.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#E09F2F] transition-colors" />
                </div>
                <div className="font-mono font-bold text-lg md:text-xl text-[#F2F2EC]">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

