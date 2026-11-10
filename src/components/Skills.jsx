import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/content';

export default function Skills() {
  const { skills } = siteConfig;

  return (
    <section id="skills" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 bg-[#E09F2F]" />
        <span className="font-mono text-xs tracking-widestMono text-[#9A9A94] uppercase">
          {skills.sectionTag}
        </span>
      </div>

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-[1.05]">
            <span className="text-[#F2F2EC]">{skills.headingSolid} </span>
            <span className="text-outline">{skills.headingOutlined}</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-[#9A9A94] tracking-wider uppercase mt-4 max-w-xl">
            {skills.subtitle}
          </p>
        </div>
        <div className="font-mono text-xs tracking-widest text-[#9A9A94]/60 uppercase">
          TOTAL TECH: 10 MODULES
        </div>
      </div>

      {/* Grid of Bordered Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {skills.skillsList.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.05 * index }}
            whileHover={{ y: -4 }}
            className="group relative bg-[#141515] border border-white/10 p-5 rounded-sm transition-all duration-300 hover:border-[#E09F2F]/60 hover:shadow-[0_4px_24px_rgba(224,159,47,0.12)] flex flex-col justify-between min-h-[160px]"
          >
            {/* Top row: Category tag & indicator dot */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#9A9A94] uppercase group-hover:text-[#E09F2F] transition-colors">
                {skill.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#E09F2F] group-hover:shadow-[0_0_6px_#E09F2F] transition-all" />
            </div>

            {/* Middle: Skill Name */}
            <div className="my-3">
              <h3 className="font-sans font-bold text-lg text-[#F2F2EC] group-hover:text-white transition-colors">
                {skill.name}
              </h3>
              <p className="text-[12px] text-[#9A9A94] font-sans mt-1.5 line-clamp-2 leading-relaxed">
                {skill.desc}
              </p>
            </div>

            {/* Bottom: Level Badge in mono */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#9A9A94]">
                STATUS
              </span>
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#F2F2EC] bg-white/[0.05] group-hover:bg-[#E09F2F]/15 group-hover:text-[#E09F2F] px-2 py-0.5 rounded transition-colors">
                {skill.level}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

