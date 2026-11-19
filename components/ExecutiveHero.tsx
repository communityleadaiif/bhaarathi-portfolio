'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Download,
  Calendar,
  Sparkles,
  Shield,
  Layers,
  ChevronDown,
  Building,
  CheckCircle2,
  TrendingUp,
  FileText
} from 'lucide-react';
import ExecutivePortrait from './ExecutivePortrait';
import ExecutiveProfileModal from './ExecutiveProfileModal';
import { ExecutiveProfile, ImpactMetric } from '@/types';

interface ExecutiveHeroProps {
  profile: ExecutiveProfile;
  metrics: ImpactMetric[];
}

export default function ExecutiveHero({ profile, metrics }: ExecutiveHeroProps) {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#162135]/60 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Executive Headline & Positioning */}
          <div className="lg:col-span-7 space-y-8">
            {/* Executive Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#171F2E]/90 border border-gold/30 shadow-lg shadow-gold/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-widest text-gold-light">
                {profile.positioning}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <div className="text-xs sm:text-sm font-mono text-gold/80 uppercase tracking-widest">
                Executive Dossier &bull; {profile.name}
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-ivory leading-[1.12]">
                Institution Builder.{' '}
                <span className="text-gold-gradient block sm:inline">Venture Architect.</span>{' '}
                <span className="text-ivory/90">Growth Strategist.</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-ivory/75 font-normal leading-relaxed max-w-2xl">
              {profile.subheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider shadow-gold hover:shadow-gold-lg transition transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#engagement-desk"
                className="px-6 py-3.5 rounded-xl bg-[#171C25] hover:bg-[#1E2533] border border-gold/30 hover:border-gold/60 text-ivory font-bold text-xs uppercase tracking-wider transition transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <span>Engage with Me</span>
                <Sparkles className="w-3.5 h-3.5 text-gold" />
              </a>

              <button
                type="button"
                onClick={() => setProfileModalOpen(true)}
                className="px-5 py-3.5 rounded-xl bg-[#101827]/80 hover:bg-[#141C2B] border border-ivory/15 hover:border-ivory/30 text-ivory/80 hover:text-ivory font-semibold text-xs uppercase tracking-wider transition flex items-center space-x-2"
              >
                <FileText className="w-4 h-4 text-gold/80" />
                <span>Executive Profile</span>
              </button>
            </div>

            {/* Governance & Trust Signals */}
            <div className="pt-4 border-t border-gold/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-ivory/70">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>CEO &bull; AJK Innovation Incubator Foundation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Co-Founder &bull; ACTIEV Venture Studio</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>StartupTN Partner Multiplier Fund</span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Portrait & Crest */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
              <ExecutivePortrait
                portraitUrl={profile.portraitUrl}
                name={profile.name}
                title={profile.positioning}
              />
            </div>
          </div>
        </div>

        {/* Career-Wide Metric Ribbon */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-gold/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="text-[11px] font-mono uppercase tracking-widest text-gold flex items-center space-x-2">
              <TrendingUp className="w-3.5 h-3.5 text-gold" />
              <span>Reported Career Impact Overview</span>
            </div>
            <div className="text-[11px] text-ivory/50 italic">
              Cumulative metrics across career engagements; not attributable to a single entity.
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {metrics.map((m) => (
              <div
                key={m.id}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#171C25]/90 to-[#101827]/90 border border-gold/20 hover:border-gold/40 transition duration-300 space-y-1 shadow-lg"
              >
                <div className="text-2xl sm:text-3xl font-bold font-serif text-gold-light tracking-tight">
                  {m.displayValue}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ivory">
                  {m.label}
                </div>
                <div className="text-[10px] text-ivory/50 line-clamp-2 leading-tight pt-1">
                  {m.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Profile Modal */}
      {profileModalOpen && (
        <ExecutiveProfileModal
          profile={profile}
          metrics={metrics}
          onClose={() => setProfileModalOpen(false)}
        />
      )}
    </section>
  );
}
