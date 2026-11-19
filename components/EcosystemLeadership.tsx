'use client';

import {
  Building2,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
  Clock,
  ShieldCheck,
  Award,
  ArrowRight
} from 'lucide-react';

export default function EcosystemLeadership() {
  const readinessLevels = [
    {
      code: 'URL (1-4)',
      title: 'Uniqueness & Relevance Level',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20',
      description:
        'Requires 50+ prospective customer validation interviews and signed Letters of Intent prior to seed disbursement. Filters academic paper projects early.',
      metrics: '50+ Interviews Mandatory'
    },
    {
      code: 'TRL (1-4)',
      title: 'Technology Readiness Level',
      color: 'border-blue-500/30 text-blue-400 bg-blue-950/20',
      description:
        'Validates laboratory prototypes under simulated industrial stress and real environmental conditions to eliminate fragile demo-ware.',
      metrics: 'Stress-Tested Prototypes'
    },
    {
      code: 'IRL (1-3)',
      title: 'Implementation Readiness Level',
      color: 'border-purple-500/30 text-purple-400 bg-purple-950/20',
      description:
        'Overcomes pilot roadblocks by placing startups directly into MSME factories across Western Tamil Nadu for live industrial field trials.',
      metrics: 'Live Factory Pilots'
    },
    {
      code: 'CRL (1-3)',
      title: 'Commercial Readiness Level',
      color: 'border-amber-500/30 text-amber-400 bg-amber-950/20',
      description:
        'Focuses on positive contribution margin, repeat customer transactions, non-grant unit economics, and recurring sales flywheels.',
      metrics: 'Sustainable Unit Economics'
    }
  ];

  const coeList = [
    {
      code: 'QXF.INC',
      sector: 'Industry 4.0, AI & Robotics',
      day: 'Monday',
      time: '4:00 PM – 5:00 PM',
      stats: '9 Startups &bull; ₹48.5L Mobilized',
      accent: 'border-emerald-500/30 text-emerald-300'
    },
    {
      code: 'FASHION.INC',
      sector: 'Sustainable Textiles & Smart Wearables',
      day: 'Tuesday',
      time: '4:00 PM – 5:00 PM',
      stats: '6 Startups &bull; ₹22.0L Mobilized',
      accent: 'border-blue-500/30 text-blue-300'
    },
    {
      code: 'CUL.INC',
      sector: 'Food Science & CSHM Innovations',
      day: 'Wednesday',
      time: '4:00 PM – 5:00 PM',
      stats: '7 Startups &bull; ₹26.5L Mobilized',
      accent: 'border-purple-500/30 text-purple-300'
    },
    {
      code: 'BIO.INC',
      sector: 'Life Sciences, AgriTech & Drone Systems',
      day: 'Thursday',
      time: '4:00 PM – 5:00 PM',
      stats: '8 Startups &bull; ₹35.0L Mobilized',
      accent: 'border-rose-500/30 text-rose-300'
    },
    {
      code: 'STARFRYS',
      sector: 'Campus Meetups, Pitch Nights & Pre-Seed Demos',
      day: 'Friday',
      time: '4:00 PM – 6:30 PM',
      stats: '14 Startups &bull; 850 Students Engaged',
      accent: 'border-amber-500/30 text-amber-300'
    },
    {
      code: 'IIC & IPR',
      sector: 'Institution’s Innovation Council & Patent Drafting',
      day: 'Saturday',
      time: '10:00 AM – 1:00 PM',
      stats: '10 Startups &bull; 1,200 Students Impacted',
      accent: 'border-teal-500/30 text-teal-300'
    }
  ];

  return (
    <section id="ecosystem" className="py-20 sm:py-28 relative bg-[#0D1322]/80 border-t border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171F2E] border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5 text-gold" />
              <span>Institutional Leadership &amp; Frameworks</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
              Institutional Ecosystem Architecture
            </h2>
            <p className="text-base text-ivory/70 leading-relaxed">
              Eliminating grant dependency through systematic milestone governance, campus Centers of Excellence, and digital incubation operations.
            </p>
          </div>

          <a
            href="https://aiif-ams.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2 shrink-0 shadow-lg shadow-gold/5"
          >
            <span>Live AIIF Ecosystem OS</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Deep Dive 1: The 4-Readiness Level Model */}
        <div className="mb-20 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gold block">
              Signature Incubation Methodology
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory tracking-tight">
              The 4-Readiness Level Progression Framework
            </h3>
            <p className="text-xs sm:text-sm text-ivory/65 leading-relaxed">
              Moving beyond traditional technology-only metrics to evaluate ventures across uniqueness, technical vigor, industrial implementation, and commercial unit profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {readinessLevels.map((lvl, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-gradient-to-b from-[#171C25] to-[#101827] border ${lvl.color} shadow-xl space-y-4 flex flex-col justify-between`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-ivory/60">
                    <span>Dimension 0{idx + 1}</span>
                    <span className="font-bold text-gold">{lvl.metrics}</span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-ivory">
                    {lvl.code}
                  </h4>
                  <div className="text-xs font-bold text-gold-light">
                    {lvl.title}
                  </div>
                  <p className="text-xs text-ivory/70 leading-relaxed pt-2">
                    {lvl.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-ivory/10 text-[10px] font-mono text-ivory/50 flex items-center justify-between">
                  <span>Rigorous Due Diligence</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive 2: 6 Campus Centers of Excellence */}
        <div className="mb-16 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold block">
                Campus Operational Architecture
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory mt-1">
                Six Campus Centers of Excellence (CoEs)
              </h3>
            </div>
            <div className="text-xs font-mono text-gold bg-[#171C25] px-4 py-2 rounded-xl border border-gold/20 flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Daily Executive Reviews: 4:00 PM – 5:00 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coeList.map((coe, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#171C25]/90 border border-gold/20 hover:border-gold/40 transition duration-300 space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-gold/80">
                    <span className="font-bold uppercase tracking-wider">{coe.day}</span>
                    <span className="text-[11px] text-ivory/50">{coe.time}</span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-ivory">
                    {coe.code}
                  </h4>
                  <p className="text-xs text-ivory/70 font-medium">
                    {coe.sector}
                  </p>
                </div>

                <div
                  className="pt-3 border-t border-gold/15 text-xs font-bold text-gold-light"
                  dangerouslySetInnerHTML={{ __html: coe.stats }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive 3: The Non-Grant Flywheel Model */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1A2436] via-[#141C2B] to-[#0D121F] border border-gold/30 shadow-2xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gold block">
              Financial Sustainability Engine
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory tracking-tight">
              The Self-Sustaining Non-Grant Incubation Flywheel
            </h3>
            <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed">
              How Prof. Bhaarathi transitioned AIIF from temporary government grant dependency to an enduring, self-funded operational model.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-[#101827] border border-gold/15 space-y-2">
              <div className="text-sm font-bold text-ivory font-serif">1. Sponsored Challenges</div>
              <p className="text-ivory/60 leading-relaxed text-[11px]">
                Regional MSMEs sponsor research and prototyping challenges, directly funding student teams while obtaining targeted solutions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#101827] border border-gold/15 space-y-2">
              <div className="text-sm font-bold text-ivory font-serif">2. CSR Schedule VII</div>
              <p className="text-ivory/60 leading-relaxed text-[11px]">
                Corporate partners channel CSR capital into structured student incubation cohorts with transparent governance and measurable audit trails.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#101827] border border-gold/15 space-y-2">
              <div className="text-sm font-bold text-ivory font-serif">3. Lab Monetization</div>
              <p className="text-ivory/60 leading-relaxed text-[11px]">
                Specialized IoT, textile, and food testing laboratories monetize open hours for local precision manufacturing enterprises.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#101827] border border-gold/15 space-y-2">
              <div className="text-sm font-bold text-ivory font-serif">4. Equity &amp; Royalty</div>
              <p className="text-ivory/60 leading-relaxed text-[11px]">
                Standardized 2-5% pre-seed incubator equity or deferred royalty tranches return capital upon venture commercialization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
