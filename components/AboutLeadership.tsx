'use client';

import {
  Building2,
  Rocket,
  Network,
  Cpu,
  CheckCircle2,
  Shield,
  Layers,
  ArrowRight,
  TrendingUp,
  FileCheck2
} from 'lucide-react';
import { ExecutiveProfile } from '@/types';

interface AboutLeadershipProps {
  profile: ExecutiveProfile;
}

export default function AboutLeadership({ profile }: AboutLeadershipProps) {
  const iconMap: Record<string, React.ReactNode> = {
    'Institutional Architecture': <Building2 className="w-5 h-5 text-gold" />,
    'Venture Incubation & Scale': <Rocket className="w-5 h-5 text-gold" />,
    'Ecosystem Mobilization': <Network className="w-5 h-5 text-gold" />,
    'AI & Digital Transformation': <Cpu className="w-5 h-5 text-gold" />
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171F2E] border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-gold" />
            <span>Executive Leadership Profile</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            Architecting Sustainable Institutions and Resilient Ventures
          </h2>
          <p className="text-base text-ivory/70 leading-relaxed">
            Bridging academic research, private enterprise capital, and regional industrial corridors through rigorous execution frameworks.
          </p>
        </div>

        {/* Credo & Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Executive Credo Box */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1A2333] via-[#141C2B] to-[#0D131F] border border-gold/30 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold font-serif text-xl font-bold">
                BI
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-gold block">
                Executive Credo
              </span>
              <blockquote className="font-serif text-2xl sm:text-3xl font-medium text-ivory leading-snug">
                &ldquo;{profile.credo}&rdquo;
              </blockquote>
            </div>

            <div className="space-y-4 pt-6 border-t border-gold/15">
              <p className="text-xs text-ivory/70 leading-relaxed">
                Operating under strict fiduciary discipline and execution-first governance to ensure that incubation engines thrive independently of unpredictable government grant cycles.
              </p>

              <div className="space-y-2 text-xs font-medium text-ivory/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Section 8 Fiduciary Discipline &amp; Grace Exit Policies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>StartupTN Partner Multiplier Fund Incubator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Autonomous College &amp; NAAC A+ Ecosystem Alignment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Narrative & Background */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#171C25]/80 border border-gold/20 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gold">
                The Strategic Thesis
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory tracking-tight">
                From Episodic Demos to Systemic Venture Engines
              </h3>

              <div className="space-y-3 text-sm text-ivory/75 leading-relaxed">
                {profile.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gold/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#101827] border border-gold/15 space-y-1">
                <div className="font-semibold text-ivory flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-gold" />
                  <span>Non-Grant Flywheel</span>
                </div>
                <p className="text-ivory/60 text-[11px] leading-relaxed">
                  Monetizing corporate challenges, sponsored labs, and equity value creation rather than passive grant reliance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101827] border border-gold/15 space-y-1">
                <div className="font-semibold text-ivory flex items-center space-x-2">
                  <FileCheck2 className="w-4 h-4 text-gold" />
                  <span>Rigorous Due Diligence</span>
                </div>
                <p className="text-ivory/60 text-[11px] leading-relaxed">
                  Enforcing 50+ prospective customer validations before deploying any institutional seed capital.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Leadership */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold block">
                Strategic Foundation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory mt-1">
                Four Pillars of Executive Impact
              </h3>
            </div>
            <p className="text-xs text-ivory/60 max-w-md">
              A holistic architecture governing how Prof. Bhaarathi approaches institution building and enterprise growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/20 hover:border-gold/45 transition duration-300 space-y-4 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  {iconMap[pillar.title] || <Building2 className="w-5 h-5 text-gold" />}
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-gold/70 uppercase tracking-widest">
                    Pillar 0{idx + 1}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-ivory group-hover:text-gold-light transition">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-ivory/65 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
