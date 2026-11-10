import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, X } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Projects() {
  const { projects } = siteConfig;
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 bg-[#E09F2F]" />
        <span className="font-mono text-xs tracking-widestMono text-[#9A9A94] uppercase">
          {projects.sectionTag}
        </span>
      </div>

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-[1.05]">
            <span className="text-[#F2F2EC]">{projects.headingSolid} </span>
            <span className="text-outline">{projects.headingOutlined}</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-[#9A9A94] tracking-wider uppercase mt-4 max-w-xl">
            {projects.subtitle}
          </p>
        </div>
        <div className="font-mono text-xs tracking-widest text-[#9A9A94]/60 uppercase">
          CURATED / 03 WORKS
        </div>
      </div>

      {/* 3 Editorial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.items.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 * index }}
            className="group relative bg-[#141515] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#E09F2F]/60 transition-all duration-500 shadow-lg hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
          >
            {/* Card Image Container with slow zoom */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#181919] border-b border-white/10">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover filter contrast-[1.15] brightness-90 transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-100"
                loading="lazy"
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141515] via-transparent to-transparent opacity-80" />

              {/* Number Badge (Top-left) */}
              <div className="absolute top-4 left-4 font-mono font-bold text-xs tracking-widest text-[#0E0F0F] bg-[#E09F2F] px-2.5 py-1 rounded-sm shadow-md">
                {project.number}
              </div>

              {/* Quick Action (Top-right) */}
              <button
                onClick={() => setActiveProject(project)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0E0F0F]/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#F2F2EC] hover:border-[#E09F2F] hover:text-[#E09F2F] transition-all focus-ring"
                aria-label={`Open details for ${project.title}`}
              >
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Card Content with subtle lift */}
            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between transition-transform duration-300 group-hover:-translate-y-1">
              <div>
                <span className="font-mono text-[10px] tracking-widestMono uppercase text-[#E09F2F] block mb-2">
                  {project.subtitle}
                </span>

                <h3 className="text-2xl font-bold font-sans text-[#F2F2EC] group-hover:text-white transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-[#9A9A94] leading-relaxed font-sans mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags in Monospace */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08] mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider text-[#9A9A94] bg-white/[0.04] px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Card Actions: VIEW ↗ & GitHub */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="font-mono text-xs tracking-widest text-[#F2F2EC] group-hover:text-[#E09F2F] flex items-center gap-1.5 transition-colors focus-ring py-1"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E09F2F]" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#9A9A94] hover:text-[#F2F2EC] transition-colors p-1.5 focus-ring rounded"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-[#0E0F0F]/85 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#141515] border border-white/20 p-6 sm:p-8 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#0E0F0F] bg-[#E09F2F] font-bold px-2 py-0.5">
                    {activeProject.number}
                  </span>
                  <span className="font-mono text-xs tracking-widestMono text-[#9A9A94] uppercase">
                    PROJECT STUDY
                  </span>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-[#9A9A94] hover:text-[#F2F2EC] transition-colors p-2 focus-ring rounded"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image banner */}
              <div className="w-full aspect-[16/8] overflow-hidden mb-6 border border-white/10">
                <img
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="font-mono text-xs tracking-widest text-[#E09F2F] uppercase block mb-1">
                {activeProject.subtitle}
              </span>
              <h3 className="font-sans font-bold text-3xl text-[#F2F2EC] mb-4">
                {activeProject.title}
              </h3>
              <p className="text-base text-[#9A9A94] leading-relaxed mb-6 font-sans">
                {activeProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <span className="font-mono text-xs text-[#9A9A94] tracking-widest uppercase block mb-2.5">
                  STACK & ARCHITECTURE:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-[#F2F2EC] bg-white/[0.06] border border-white/10 px-3 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#E09F2F] text-[#0E0F0F] font-sans font-bold text-xs tracking-wider uppercase px-5 py-3 rounded flex items-center gap-2 hover:bg-[#C98D26] transition-colors focus-ring"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="font-mono text-xs tracking-widest text-[#9A9A94] hover:text-[#F2F2EC] px-4 py-3 border border-white/15 rounded transition-colors focus-ring"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

