'use client';

import { useState } from 'react';
import {
  TrendingUp,
  ShieldCheck,
  Building,
  Users,
  Coins,
  Calendar,
  Sparkles,
  PieChart,
  BarChart3,
  Layers,
  Info
} from 'lucide-react';
import { ImpactMetric } from '@/types';

interface ImpactObservatoryProps {
  metrics: ImpactMetric[];
}

export default function ImpactObservatory({ metrics }: ImpactObservatoryProps) {
  const [activeSector, setActiveSector] = useState<string>('all');

  const sectorBreakdowns = [
    { name: 'All Sectors', key: 'all' },
    { name: 'Deeptech & Robotics', key: 'deeptech', share: '32%', desc: 'Industrial IoT, embedded edge compute, AI automated machinery' },
    { name: 'Sustainable Textiles & Agro', key: 'sustainability', share: '28%', desc: 'Circular fashion, drone agritech, water management' },
    { name: 'Enterprise Software & Mobility', key: 'software', share: '24%', desc: 'Urban shared mobility, cybersecurity, enterprise workflow agents' },
    { name: 'Student Ventures & Pre-Seed', key: 'student', share: '16%', desc: 'Campus incubator cohorts, university IP spin-offs' }
  ];

  return (
    <section id="impact-observatory" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171F2E] border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5 text-gold" />
            <span>Special Feature &bull; Impact Observatory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            The Executive Impact Observatory
          </h2>
          <p className="text-base text-ivory/70 leading-relaxed">
            Transparent, verified metrics tracking startup acceleration, non-dilutive capital mobilization, multi-sector partnerships, and human talent empowered.
          </p>
        </div>

        {/* Mandatory Career-Wide Distinction Alert */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-gold/15 via-[#171C25] to-[#101827] border border-gold/30 shadow-lg mb-12 flex items-start space-x-3.5">
          <Info className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold block">
              Career-Wide Governance Attribution Notice
            </span>
            <p className="text-xs text-ivory/80 leading-relaxed">
              All reported metrics reflect <strong>cumulative career-wide achievements</strong> accumulated across Prof. Bhaarathi Ilango&apos;s leadership tenures (AIIF, ACTIEV, Rathinam Startup School) and pan-India advisory appointments (iTNT, AIC-BIMTECH, APIS, AIC-IIITK, Sathyabama, KCIL). They do not belong exclusively to any single institution.
            </p>
          </div>
        </div>

        {/* Animated Headline Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {metrics.map((m) => (
            <div
              key={m.id}
              className="p-6 rounded-3xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/25 hover:border-gold/50 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono text-gold/70 uppercase tracking-widest">
                  <span>{m.sectorTag}</span>
                  <Sparkles className="w-3 h-3 text-gold/40 group-hover:text-gold transition" />
                </div>
                <div className="font-serif text-4xl font-bold text-gold-light group-hover:text-ivory transition">
                  {m.displayValue}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-ivory">
                  {m.label}
                </div>
              </div>

              <div className="pt-3 border-t border-gold/15 text-[11px] text-ivory/60 leading-tight">
                {m.description}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Sector Breakdown Matrix */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#171C25]/70 border border-gold/20 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gold/15 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold block">
                Portfolio Distribution Analysis
              </span>
              <h3 className="font-serif text-2xl font-bold text-ivory mt-1">
                Ecosystem Focus Across Key Strategic Corridors
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-xs text-ivory/60 font-mono">
              <BarChart3 className="w-4 h-4 text-gold" />
              <span>300+ Mentored Ventures Analyzed</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorBreakdowns.slice(1).map((sec, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#101827] border border-gold/15 hover:border-gold/35 transition space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="font-serif text-2xl font-bold text-gold-light">{sec.share}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/10 text-gold">Corridor 0{idx + 1}</span>
                </div>
                <div className="text-xs font-bold text-ivory">{sec.name}</div>
                <p className="text-[11px] text-ivory/60 leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gold/15 flex flex-col sm:flex-row justify-between items-center text-xs text-ivory/60 gap-2">
            <span>Data audited under AIIF AMS governance &bull; Updated periodically</span>
            <span className="font-mono text-gold/80">Audit Status: Fully Reconciled</span>
          </div>
        </div>
      </div>
    </section>
  );
}
