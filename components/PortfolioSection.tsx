'use client';

import { useState } from 'react';
import {
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Layers,
  Building,
  Rocket,
  Compass,
  ArrowRight,
  Filter
} from 'lucide-react';
import { PortfolioItem, PortfolioCategory } from '@/types';

interface PortfolioSectionProps {
  portfolio: PortfolioItem[];
}

export default function PortfolioSection({ portfolio }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterTabs = [
    { key: 'ALL', label: 'All Engagements' },
    { key: 'A', label: 'A. Venture Leadership' },
    { key: 'B', label: 'B. Growth Consulting' },
    { key: 'C', label: 'C. Strategic Discussions (Exploratory)' },
    { key: 'D', label: 'D. Institutional Leadership' },
    { key: 'E', label: 'E. Previous Leadership' },
    { key: 'F', label: 'F. PAN-India Ecosystem' },
    { key: 'G', label: 'G. Business Mentorship' }
  ];

  const filteredPortfolio =
    activeFilter === 'ALL'
      ? portfolio
      : portfolio.filter((item) => item.category === activeFilter);

  const getStatusBadge = (item: PortfolioItem) => {
    if (item.isExploratory) {
      return (
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-[11px] font-semibold">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>Exploratory Engagement &bull; Not Confirmed</span>
        </span>
      );
    }

    switch (item.statusBadgeVariant) {
      case 'confirmed':
        return (
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{item.engagementStatus}</span>
          </span>
        );
      case 'tenure':
        return (
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-500/20 border border-slate-500/40 text-slate-300 text-[11px] font-semibold">
            <span>{item.engagementStatus}</span>
          </span>
        );
      case 'ecosystem':
        return (
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/40 text-blue-300 text-[11px] font-semibold">
            <span>{item.engagementStatus}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold-light text-[11px] font-semibold">
            <span>{item.engagementStatus}</span>
          </span>
        );
    }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171F2E] border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-gold" />
            <span>Executive Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            Ventures, Institutional Leadership &amp; Strategic Engagements
          </h2>
          <p className="text-base text-ivory/70 leading-relaxed">
            A comprehensive record of institutional architecture, venture studio acceleration, corporate growth consulting, and pan-India advisory roles.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition duration-200 border ${
                activeFilter === tab.key
                  ? 'bg-gold text-[#0A0F1D] border-gold shadow-gold font-bold'
                  : 'bg-[#171C25]/80 hover:bg-[#1E2533] text-ivory/80 border-gold/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className={`p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#171C25] to-[#101827] border ${
                item.isExploratory
                  ? 'border-amber-500/40 bg-amber-950/5'
                  : 'border-gold/25 hover:border-gold/50'
              } transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6 group`}
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold/70 px-2.5 py-1 rounded bg-[#101827] border border-gold/20">
                    Category {item.category} &bull; {item.categoryLabel}
                  </span>
                  {getStatusBadge(item)}
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory group-hover:text-gold-light transition">
                    {item.organisation}
                  </h3>
                  <p className="text-sm font-semibold text-gold mt-1 font-mono">
                    {item.role}
                  </p>
                </div>

                {/* Exploratory Warning if applicable */}
                {item.isExploratory && (
                  <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs flex items-start space-x-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-300 font-semibold">Strict Engagement Disclosure:</strong>
                      This represents an exploratory strategic discussion and advisory evaluation. It is NOT a confirmed corporate appointment or equity holding.
                    </div>
                  </div>
                )}

                {/* Overview */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-ivory/50">
                    Engagement Overview
                  </div>
                  <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
                    {item.overview}
                  </p>
                </div>

                {/* The Challenge */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gold/80">
                    Core Challenge Addressed
                  </div>
                  <p className="text-xs text-ivory/70 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* Strategic Contribution */}
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gold">
                    Strategic Contribution
                  </div>
                  <p className="text-xs text-ivory/80 leading-relaxed font-medium">
                    {item.strategicContribution}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gold/70">
                    Key Deliverables &amp; Artifacts
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {item.deliverables.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center space-x-2 p-2 rounded-lg bg-[#101827] border border-ivory/10 text-ivory/85 text-[11px]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Measurable Outcomes (Verified only) */}
                {item.measurableOutcomes && (
                  <div className="p-3.5 rounded-xl bg-gold/10 border border-gold/25 space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                      Verified Measurable Outcome
                    </div>
                    <p className="text-xs text-ivory/90 leading-relaxed font-semibold">
                      {item.measurableOutcomes}
                    </p>
                  </div>
                )}
              </div>

              {/* Card Footer / Action Link */}
              {item.link && (
                <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                  <span className="text-[11px] text-ivory/60 font-mono">
                    Verified Digital Touchpoint
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold hover:text-gold-light underline underline-offset-4"
                  >
                    <span>{item.linkLabel || 'View Platform'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
