'use client';

import { useState } from 'react';
import {
  Compass,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PortfolioItem } from '@/types';

interface VentureRadarProps {
  portfolio: PortfolioItem[];
}

export default function VentureRadar({ portfolio }: VentureRadarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStage, setSelectedStage] = useState<string>('ALL');

  const stages = [
    {
      id: 'ALL',
      name: 'All Stages',
      code: 'TOTAL',
      desc: 'All ventures and active ecosystem nodes'
    },
    {
      id: 'URL',
      name: 'Stage 1: Problem Validation',
      code: 'URL 1-4',
      desc: '50+ prospective customer validations & LOIs'
    },
    {
      id: 'TRL',
      name: 'Stage 2: Tech & Prototype Stress',
      code: 'TRL 1-4',
      desc: 'Hardware/software prototypes under field stress'
    },
    {
      id: 'IRL',
      name: 'Stage 3: Industrial Pilots',
      code: 'IRL 1-3',
      desc: 'Live deployments across MSME factory floors'
    },
    {
      id: 'CRL',
      name: 'Stage 4: Commercial Scale & Growth',
      code: 'CRL 1-3',
      desc: 'Repeat unit profitability & enterprise revenue'
    }
  ];

  // Map each portfolio item to a primary radar stage
  const getItemStage = (item: PortfolioItem) => {
    if (item.isExploratory) return 'URL';
    if (item.category === 'D' || item.category === 'B') return 'CRL';
    if (item.category === 'A' || item.category === 'G') return 'IRL';
    if (item.category === 'E') return 'TRL';
    return 'IRL';
  };

  const filteredItems = portfolio.filter((item) => {
    const stage = getItemStage(item);
    const matchesStage = selectedStage === 'ALL' || stage === selectedStage;
    const matchesSearch =
      item.organisation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStage && matchesSearch;
  });

  return (
    <section id="venture-radar" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171F2E] border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span>Special Feature &bull; Venture Radar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            The Executive Venture Radar
          </h2>
          <p className="text-base text-ivory/70 leading-relaxed">
            An interactive matrix mapping active ventures, advisory portfolios, and ecosystem hubs along the 4-Readiness Level trajectory.
          </p>
        </div>

        {/* Radar Controls: Search & Stage Filters */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8">
          {/* Stage Buttons */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {stages.map((stg) => (
              <button
                key={stg.id}
                onClick={() => setSelectedStage(stg.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition border ${
                  selectedStage === stg.id
                    ? 'bg-gold text-[#0A0F1D] border-gold font-bold shadow-gold'
                    : 'bg-[#171C25] text-ivory/75 hover:bg-[#232A37] border-gold/20'
                }`}
              >
                {stg.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-gold/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search ventures, advisory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#171C25] border border-gold/25 rounded-xl text-xs text-ivory placeholder-ivory/40 outline-none focus:border-gold transition"
            />
          </div>
        </div>

        {/* Radar Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const stage = getItemStage(item);
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/20 hover:border-gold/45 transition shadow-lg space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-gold/10 text-gold uppercase tracking-wider font-bold">
                      {stage} Trajectory
                    </span>
                    <span className="text-ivory/50 uppercase">
                      Category {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-ivory">
                      {item.organisation}
                    </h3>
                    <p className="text-xs text-gold font-mono mt-0.5">
                      {item.role}
                    </p>
                  </div>

                  <p className="text-xs text-ivory/70 line-clamp-3 leading-relaxed">
                    {item.overview}
                  </p>
                </div>

                <div className="pt-3 border-t border-gold/15 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-ivory/60 truncate max-w-[180px]">
                    {item.engagementStatus}
                  </span>
                  <a
                    href="#portfolio"
                    className="text-gold hover:text-gold-light font-semibold flex items-center space-x-1"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-[#171C25] border border-gold/20 space-y-2">
            <Compass className="w-8 h-8 text-gold mx-auto" />
            <h4 className="font-serif text-lg font-bold text-ivory">No nodes found in this radar filter</h4>
            <p className="text-xs text-ivory/60">Try clearing your search query or selecting &apos;All Stages&apos;.</p>
          </div>
        )}
      </div>
    </section>
  );
}
