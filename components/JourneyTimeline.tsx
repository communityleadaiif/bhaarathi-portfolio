'use client';

import { useState } from 'react';
import {
  Calendar,
  Building2,
  Rocket,
  Network,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { initialJourneyMilestones } from '@/data/initial-data';

export default function JourneyTimeline() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterOptions = [
    { label: 'All Milestones', key: 'ALL' },
    { label: 'Institutional Leadership', key: 'Institutional Leadership' },
    { label: 'Venture Architecture', key: 'Venture Architecture' },
    { label: 'Ecosystem Scaling', key: 'Ecosystem Scaling' },
    { label: 'Growth Consulting', key: 'Growth Consulting' }
  ];

  const milestones = initialJourneyMilestones;

  const filtered =
    activeFilter === 'ALL'
      ? milestones
      : milestones.filter((m) => m.type === activeFilter);

  return (
    <section id="journey" className="py-20 sm:py-28 relative bg-[#0D1322]/50 border-t border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171F2E] border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>Special Feature &bull; Professional Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            The Executive Evolution
          </h2>
          <p className="text-base text-ivory/70 leading-relaxed">
            An interactive timeline chronicling over a decade of institution building, venture architecture, and national ecosystem mobilization.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilter(opt.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition duration-200 border ${
                activeFilter === opt.key
                  ? 'bg-gold text-[#0A0F1D] border-gold shadow-gold font-bold'
                  : 'bg-[#171C25]/80 hover:bg-[#1E2533] text-ivory/80 border-gold/20'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-gold/25 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filtered.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#0A0F1D] border-2 border-gold group-hover:scale-125 transition duration-200 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
              </div>

              {/* Card Container */}
              <div className="p-7 rounded-3xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/20 hover:border-gold/45 transition duration-300 shadow-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/25">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ivory/60">
                    {item.type}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-ivory group-hover:text-gold-light transition">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-gold mt-0.5">
                    {item.organization}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed pt-1">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
