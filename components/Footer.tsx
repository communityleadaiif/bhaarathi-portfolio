'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Lock,
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { ExecutiveProfile } from '@/types';

interface FooterProps {
  profile: ExecutiveProfile;
}

export default function Footer({ profile }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B14] border-t border-gold/20 pt-16 pb-12 relative text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Identity & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E2638] to-[#0A0F1D] border border-gold/40 flex items-center justify-center">
                <span className="font-serif font-bold text-gold text-base">BI</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-ivory block leading-tight">
                  {profile.name}
                </span>
                <span className="text-[10px] font-mono text-gold/80 uppercase tracking-widest block">
                  {profile.positioning}
                </span>
              </div>
            </div>

            <p className="text-xs text-ivory/65 leading-relaxed max-w-sm">
              Architecting sustainable university innovation engines, venture studios, and regional startup ecosystems across India.
            </p>

            <div className="pt-2 text-xs text-ivory/70 space-y-1 font-mono">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{profile.officialEmail}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-gold">
              Site Navigation
            </div>
            <ul className="space-y-2 text-xs text-ivory/75">
              <li>
                <a href="#about" className="hover:text-gold transition">About &amp; Leadership Profile</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-gold transition">Capabilities &amp; Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold transition">Venture &amp; Strategic Portfolio</a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-gold transition">Institutional Ecosystem Leadership</a>
              </li>
              <li>
                <a href="#impact-observatory" className="hover:text-gold transition">Impact Observatory</a>
              </li>
              <li>
                <a href="#thought-leadership" className="hover:text-gold transition">Thought Leadership &amp; Articles</a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-gold transition">Credentials &amp; Appointments</a>
              </li>
            </ul>
          </div>

          {/* Special Features & Admin Access */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-gold">
              Executive Touchpoints
            </div>

            <div className="space-y-2 text-xs">
              <a
                href="#engagement-desk"
                className="block p-3 rounded-xl bg-[#101827] border border-gold/20 hover:border-gold/45 text-ivory/90 hover:text-gold transition"
              >
                <strong className="block text-gold text-[11px] uppercase font-mono">Strategic Engagement Desk</strong>
                <span>Submit structured proposals for advisory or speaking</span>
              </a>

              <a
                href="https://aiif-ams.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-[#101827] border border-gold/20 hover:border-gold/45 text-ivory/90 hover:text-gold transition"
              >
                <div className="flex items-center justify-between">
                  <strong className="block text-gold text-[11px] uppercase font-mono">AIIF Ecosystem OS (AMS)</strong>
                  <ExternalLink className="w-3.5 h-3.5 text-gold" />
                </div>
                <span>Autonomous incubator management platform</span>
              </a>

              <Link
                href="/admin"
                className="inline-flex items-center space-x-1.5 text-xs text-ivory/50 hover:text-gold transition pt-1"
              >
                <Lock className="w-3 h-3" />
                <span>Executive Admin Console</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory & Institutional Governance Notice */}
        <div className="p-5 rounded-2xl bg-[#0D121F] border border-gold/15 text-[11px] text-ivory/60 space-y-2">
          <div className="flex items-center space-x-2 text-gold font-mono uppercase font-bold text-[10px]">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>Governance &amp; Attribution Transparency</span>
          </div>
          <p className="leading-relaxed">
            The professional engagements, advisory positions, and venture affiliations presented on this platform represent verified, owner-approved public records. Exploratory strategic discussions (such as with JB Group / JB Water Harvesting) are explicitly designated as exploratory and do not constitute formal legal appointments. Career-wide metrics (such as 300+ startups mentored and ₹2+ Cr funding mobilized) are cumulative totals across diverse multi-institutional leadership tenures and advisory boards, and are not the exclusive result of any single organization.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-6 border-t border-gold/15 flex flex-col sm:flex-row justify-between items-center text-xs text-ivory/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Prof. Bhaarathi Ilango. All rights reserved. Executive Platform.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-gold hover:text-gold-light transition font-mono text-[11px]"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
