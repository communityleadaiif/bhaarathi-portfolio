'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  ArrowRight,
  Shield,
  Briefcase,
  Layers,
  Sparkles,
  ExternalLink,
  Lock
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Impact', href: '#impact-observatory' },
    { name: 'Journey', href: '#journey' },
    { name: 'Thought Leadership', href: '#thought-leadership' },
    { name: 'Credentials', href: '#credentials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0F1D]/90 backdrop-blur-md border-b border-gold/20 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Executive Crest & Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1E2638] via-[#151D2C] to-[#0A0F1D] border border-gold/40 flex items-center justify-center shadow-lg shadow-gold/5 group-hover:border-gold transition duration-300">
              <span className="font-serif font-bold text-lg text-gold tracking-tight">BI</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-serif font-bold text-base sm:text-lg text-ivory tracking-tight group-hover:text-gold-light transition">
                  Prof. Bhaarathi Ilango
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
              </div>
              <span className="text-[10px] text-gold/80 font-mono uppercase tracking-widest block leading-none mt-0.5">
                Institution Builder &bull; Venture Architect
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-[12px] font-medium text-ivory/80 uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gold transition duration-200 py-1 border-b border-transparent hover:border-gold/40"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/admin"
              className="p-2 text-ivory/50 hover:text-gold hover:bg-gold/10 rounded-lg transition"
              title="Executive Admin Desk"
            >
              <Lock className="w-4 h-4" />
            </Link>

            <a
              href="#engagement-desk"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider shadow-gold hover:shadow-gold-lg transition transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Engage with Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href="#engagement-desk"
              className="px-3 py-1.5 rounded-lg bg-gold text-[#0A0F1D] font-bold text-[11px] uppercase tracking-wider"
            >
              Engage
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#171C25] border border-gold/30 text-ivory focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5 text-gold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0F1D]/98 backdrop-blur-xl border-b border-gold/30 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="text-[10px] font-mono text-gold uppercase tracking-widest border-b border-gold/20 pb-2">
            Executive Navigation
          </div>
          <div className="grid grid-cols-1 gap-3 text-xs font-semibold uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-gold/10 hover:text-gold transition flex items-center justify-between text-ivory"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3 h-3 text-gold/60" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-gold/20 flex flex-col space-y-2">
            <a
              href="#engagement-desk"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-xl bg-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider shadow-gold"
            >
              Strategic Engagement Desk
            </a>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 text-center text-xs text-ivory/60 hover:text-gold flex items-center justify-center space-x-1"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
