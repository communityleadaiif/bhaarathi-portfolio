'use client';

import { useState } from 'react';
import {
  Building2,
  Network,
  Rocket,
  Compass,
  TrendingUp,
  Cpu,
  Handshake,
  Coins,
  Microscope,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles
} from 'lucide-react';
import { CapabilityItem } from '@/types';

interface CapabilitiesGridProps {
  capabilities: CapabilityItem[];
}

export default function CapabilitiesGrid({ capabilities }: CapabilitiesGridProps) {
  const [selectedCapability, setSelectedCapability] = useState<CapabilityItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-gold" />;
      case 'Network':
        return <Network className="w-5 h-5 text-gold" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-gold" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-gold" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-gold" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-gold" />;
      case 'Handshake':
        return <Handshake className="w-5 h-5 text-gold" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-gold" />;
      case 'Microscope':
        return <Microscope className="w-5 h-5 text-gold" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-gold" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 sm:py-28 relative bg-[#0D1322]/60 border-t border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171F2E] border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest">
              <span>Strategic Offerings</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
              Executive Capabilities &amp; Advisory Services
            </h2>
            <p className="text-sm sm:text-base text-ivory/70 leading-relaxed">
              Ten structured advisory and leadership practices deployed to transform institutions, co-create scalable ventures, and accelerate enterprise growth.
            </p>
          </div>

          <a
            href="#engagement-desk"
            className="px-5 py-3 rounded-xl bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2 shrink-0"
          >
            <span>Consulting Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 10 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.id}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/20 hover:border-gold/45 transition-all duration-300 shadow-xl flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedCapability(cap)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition duration-300">
                    {getIcon(cap.iconName)}
                  </div>
                  <span className="font-mono text-xs text-gold/60 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-gold-light transition">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-gold/80 font-medium">
                    {cap.tagline}
                  </p>
                </div>

                <p className="text-xs text-ivory/65 leading-relaxed line-clamp-3">
                  {cap.description}
                </p>

                {/* Key Deliverables Preview */}
                <div className="pt-3 border-t border-gold/10 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gold/70">
                    Primary Deliverables
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.deliverables.slice(0, 2).map((d, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-[#101827] border border-ivory/10 text-ivory/80"
                      >
                        {d}
                      </span>
                    ))}
                    {cap.deliverables.length > 2 && (
                      <span className="text-[10px] px-2 py-1 rounded-md bg-gold/10 text-gold font-mono">
                        +{cap.deliverables.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-gold/15 flex items-center justify-between text-xs font-semibold text-gold group-hover:text-gold-light">
                <span>View Full Scope &amp; Focus Areas</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCapability && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#101827] border border-gold/40 rounded-3xl p-6 sm:p-8 space-y-6 text-ivory shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gold/20 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center">
                  {getIcon(selectedCapability.iconName)}
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory">
                    {selectedCapability.title}
                  </h3>
                  <span className="text-xs text-gold font-mono">
                    {selectedCapability.tagline}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCapability(null)}
                className="p-2 rounded-xl bg-[#171C25] hover:bg-[#232A37] text-ivory/70 hover:text-ivory transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-ivory/80 leading-relaxed">
              {selectedCapability.description}
            </p>

            {/* Strategic Focus Areas */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-gold">
                Strategic Focus Areas
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedCapability.focusAreas.map((f, i) => (
                  <div key={i} className="flex items-start space-x-2 p-2.5 rounded-xl bg-[#171C25] border border-ivory/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                    <span className="text-ivory/90">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-gold">
                Key Strategic Deliverables
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedCapability.deliverables.map((d, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-[#171C25] border border-gold/15 text-ivory/90">
                    &bull; {d}
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Modes */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-gold">
                Typical Engagement Modes
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {selectedCapability.engagementTypes.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-gold/15 text-gold-light border border-gold/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-4 border-t border-gold/20 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-xs text-ivory/60">
                Ready to explore this capability for your organization?
              </span>
              <a
                href="#engagement-desk"
                onClick={() => setSelectedCapability(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light text-[#0A0F1D] font-bold text-xs uppercase tracking-wider text-center"
              >
                Initiate Engagement
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
