import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Mail } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Contact() {
  const { contact } = siteConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-10">
        <span className="w-1.5 h-1.5 bg-[#E09F2F]" />
        <span className="font-mono text-xs tracking-widestMono text-[#9A9A94] uppercase">
          {contact.sectionTag}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pb-24 border-b border-white/10">
        {/* Left Column: Huge Heading + Intro */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-[0.9] mb-8 select-none">
              <span className="text-[#F2F2EC] block">{contact.headingSolid}</span>
              <span className="text-outline block">{contact.headingOutlined}</span>
            </h2>
          </motion.div>

          <p className="font-sans text-base md:text-xl text-[#9A9A94] max-w-xl leading-relaxed mb-10">
            {contact.statement}
          </p>

          {/* Email Click-to-copy & Direct Mail link */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`}
              className="bg-[#E09F2F] hover:bg-[#C98D26] text-[#0E0F0F] font-sans font-bold text-xs md:text-sm tracking-wider uppercase px-7 py-4 rounded flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_20px_rgba(224,159,47,0.25)] hover:shadow-[0_6px_25px_rgba(224,159,47,0.4)] focus-ring"
            >
              <Mail className="w-4 h-4" />
              <span>SEND AN EMAIL</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="bg-[#141515] hover:bg-[#1A1B1B] text-[#F2F2EC] font-mono text-xs tracking-widest uppercase px-5 py-4 border border-white/15 rounded flex items-center justify-center gap-2 transition-all hover:border-[#E09F2F]/60 focus-ring"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#E09F2F]" />
                  <span className="text-[#E09F2F]">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#9A9A94]" />
                  <span>COPY: {contact.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Social Links & Meta */}
        <div className="lg:col-span-5 flex flex-col gap-6 pt-4 lg:pt-8">
          <span className="font-mono text-xs tracking-widestMono text-[#9A9A94] uppercase pb-3 border-b border-white/10">
            CONNECT & NETWORK
          </span>

          <div className="flex flex-col divide-y divide-white/[0.08]">
            {contact.socials.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target={item.isDownload ? '_self' : '_blank'}
                rel="noreferrer"
                download={item.isDownload ? 'Fathima_Fasna_Resume.pdf' : undefined}
                className="group py-4 flex items-center justify-between text-[#F2F2EC] hover:text-[#E09F2F] transition-all focus-ring rounded"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-xs tracking-widestMono text-[#9A9A94] group-hover:text-[#E09F2F] uppercase transition-colors">
                    {item.label}
                  </span>
                  <span className="font-sans text-sm md:text-base font-medium text-[#F2F2EC] group-hover:text-white transition-colors mt-0.5">
                    {item.username}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#9A9A94] group-hover:border-[#E09F2F] group-hover:text-[#E09F2F] transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 p-5 bg-[#141515] border border-white/10 rounded-sm">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#9A9A94] block mb-1">
              CURRENT ACADEMIC STATUS
            </span>
            <p className="font-sans text-sm text-[#F2F2EC] font-medium">
              First-year B.Tech in CSE (AI) · Open for peer collaborations, student hackathons, and learning opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Copyright Footer */}
      <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9A9A94] tracking-widest uppercase">
        <div className="flex items-center gap-3">
          <div className="w-3.5 h-3.5 border border-[#E09F2F] flex items-center justify-center">
            <div className="w-1 h-1 bg-[#E09F2F]" />
          </div>
          <span className="text-[#F2F2EC]">{contact.footerText}</span>
        </div>

        <div className="text-center sm:text-right text-[11px] text-[#9A9A94]/70">
          <span>{contact.locationDetail}</span>
        </div>
      </div>
    </footer>
  );
}

