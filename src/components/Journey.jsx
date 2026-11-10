import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/content';

export default function Journey() {
  const { journey } = siteConfig;

  return (
    <section id="journey" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 bg-[#E09F2F]" />
        <span className="font-mono text-xs tracking-widestMono text-[#9A9A94] uppercase">
          {journey.sectionTag}
        </span>
      </div>

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-[1.05]">
            <span className="text-[#F2F2EC]">{journey.headingSolid} </span>
            <span className="text-outline">{journey.headingOutlined}</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-[#9A9A94] tracking-wider uppercase mt-4 max-w-xl">
            {journey.subtitle}
          </p>
        </div>
        <div className="font-mono text-xs tracking-widest text-[#9A9A94]/60 uppercase">
          CHRONOLOGY // ACTIVE
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-white/15 ml-3 sm:ml-4 md:ml-6 pl-8 sm:pl-10 md:pl-12 space-y-12 md:space-y-16">
        {journey.timeline.map((item, index) => (
          <motion.div
            key={item.title + index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="relative group"
          >
            {/* Timeline Amber Node / Marker */}
            <div className="absolute -left-[37px] sm:-left-[45px] md:-left-[53px] top-1 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#0E0F0F] border border-white/20 group-hover:border-[#E09F2F] flex items-center justify-center transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#E09F2F] group-hover:scale-125 transition-transform" />
              </div>
            </div>

            {/* Header: Period & Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-mono text-xs tracking-widestMono text-[#E09F2F] uppercase font-semibold">
                {item.period}
              </span>
              <span className="font-mono text-[9px] tracking-wider uppercase text-[#9A9A94] bg-white/[0.05] border border-white/10 px-2 py-0.5 rounded">
                {item.badge}
              </span>
            </div>

            {/* Main Content Card */}
            <div className="bg-[#141515] border border-white/10 p-6 md:p-8 rounded-sm hover:border-[#E09F2F]/40 transition-all duration-300">
              <h3 className="font-sans font-bold text-xl md:text-2xl text-[#F2F2EC] mb-1 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-[#9A9A94] tracking-wide uppercase mb-4">
                {item.institution}
              </p>
              <p className="font-sans text-sm md:text-base text-[#9A9A94] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

