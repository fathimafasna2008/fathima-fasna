import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#0E0F0F]/85 backdrop-blur-md border-white/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0E0F0F]/80 via-[#0E0F0F]/40 to-transparent border-white/[0.08] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Mark + Name */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus-ring rounded p-1"
            aria-label="Back to top"
          >
            {/* Signature Logo Mark (Amber Outlined Box with inner offset square) */}
            <div className="relative w-6 h-6 border-[1.5px] border-[#E09F2F] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-2.5 h-2.5 bg-[#0E0F0F] border border-[#E09F2F] flex items-center justify-center">
                <div className="w-1 h-1 bg-[#E09F2F]" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-sans font-bold text-base md:text-lg tracking-tight text-[#F2F2EC] leading-tight group-hover:text-white transition-colors">
                {siteConfig.shortName}
              </span>
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] text-[#9A9A94] uppercase leading-none mt-0.5">
                CSE · AI STUDENT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-widestMono text-[#9A9A94] hover:text-[#F2F2EC] transition-colors editorial-link py-1 focus-ring rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={siteConfig.navCta.href}
              className="group font-mono text-xs tracking-widestMono text-[#F2F2EC] hover:text-[#E09F2F] transition-colors flex items-center gap-1.5 focus-ring rounded px-2 py-1"
            >
              <span>{siteConfig.navCta.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E09F2F] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F2F2EC] hover:text-[#E09F2F] transition-colors p-2 focus-ring rounded"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0E0F0F] pt-28 px-8 pb-12 flex flex-col justify-between md:hidden border-b border-white/10"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] tracking-widestMono text-[#9A9A94] uppercase pb-3 border-b border-white/10">
                NAVIGATION
              </span>
              <nav className="flex flex-col gap-5">
                {siteConfig.navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans font-bold text-2xl text-[#F2F2EC] hover:text-[#E09F2F] transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-[#9A9A94] group-hover:text-[#E09F2F]">
                      0{idx + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <a
                href={siteConfig.navCta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#E09F2F] text-[#0E0F0F] font-mono font-semibold text-xs tracking-widest uppercase py-3.5 px-4 flex items-center justify-center gap-2 hover:bg-[#C98D26] transition-colors rounded"
              >
                <span>{siteConfig.navCta.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-[#9A9A94] font-mono text-[10px] tracking-widest uppercase mt-2">
                <span>{siteConfig.shortName} · PORTFOLIO</span>
                <span>THRISSUR, KERALA</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

