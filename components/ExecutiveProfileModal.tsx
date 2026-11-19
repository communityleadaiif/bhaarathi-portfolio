'use client';

import { X, Download, Printer, Shield, CheckCircle2, Mail, Phone, ExternalLink } from 'lucide-react';
import { ExecutiveProfile, ImpactMetric } from '@/types';

interface ExecutiveProfileModalProps {
  profile: ExecutiveProfile;
  metrics: ImpactMetric[];
  onClose: () => void;
}

export default function ExecutiveProfileModal({
  profile,
  metrics,
  onClose
}: ExecutiveProfileModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#101827] border border-gold/40 rounded-3xl shadow-2xl p-6 sm:p-10 my-8 space-y-8 text-ivory max-h-[90vh] overflow-y-auto">
        {/* Modal Controls */}
        <div className="flex items-center justify-between border-b border-gold/20 pb-4">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-gold">
              Executive Profile &bull; Confidential Summary
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-[#171C25] hover:bg-gold/20 text-gold transition border border-gold/30 flex items-center space-x-1.5 text-xs font-semibold px-3"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#171C25] hover:bg-[#232A37] text-ivory/70 hover:text-ivory transition border border-ivory/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Executive Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="space-y-1.5">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory tracking-tight">
              {profile.name}
            </h2>
            <p className="text-sm font-semibold text-gold uppercase tracking-wider font-mono">
              {profile.positioning}
            </p>
            <p className="text-xs text-ivory/60 max-w-xl">
              Chief Executive Officer &bull; AJK Innovation Incubator Foundation | Co-Founder &bull; ACTIEV
            </p>
          </div>

          <div className="text-xs text-ivory/70 space-y-1 bg-[#171C25] p-3.5 rounded-xl border border-gold/20">
            <div>
              <span className="text-gold font-mono text-[10px] block">EXECUTIVE DESK:</span>
              <span className="font-semibold">{profile.officialEmail}</span>
            </div>
            <div>
              <span className="text-gold font-mono text-[10px] block">LOCATION:</span>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        {/* Executive Credo */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-gold/10 via-[#171C25] to-transparent border-l-4 border-gold">
          <div className="text-[10px] font-mono uppercase tracking-widest text-gold mb-1">
            Executive Leadership Credo
          </div>
          <p className="font-serif italic text-base text-ivory/90 leading-relaxed">
            &ldquo;{profile.credo}&rdquo;
          </p>
        </div>

        {/* Career-Wide Verified Metrics */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-gold mb-3">
            Career-Wide Cumulative Impact Metrics
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {metrics.map((m) => (
              <div key={m.id} className="p-3 rounded-xl bg-[#171C25] border border-gold/15 text-center">
                <div className="font-serif text-2xl font-bold text-gold-light">{m.displayValue}</div>
                <div className="text-[10px] font-semibold text-ivory/80 uppercase">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-gold">Executive Summary</div>
          {profile.fullBio.map((para, i) => (
            <p key={i} className="text-xs leading-relaxed text-ivory/80">
              {para}
            </p>
          ))}
        </div>

        {/* Core Capabilities */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-gold mb-3">
            Strategic Capabilities & Domains
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              'Institutional Transformation & Section 8 Governance',
              'Venture Building & Studio Architecture',
              'Startup Ecosystem Development PAN-India',
              'GTM & Industrial Corridor Pilot Deployment',
              'AI & Enterprise Digital Transformation',
              'Fundraising Strategy & Multiplier Seed Structuring',
              'CSR Schedule VII Incubation Partnerships',
              'Research Commercialisation & Patent Licensing'
            ].map((cap, i) => (
              <div key={i} className="flex items-center space-x-2 p-2 rounded-lg bg-[#171C25]/60 border border-ivory/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                <span className="text-ivory/90">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Roles & Directorships */}
        <div className="border-t border-gold/20 pt-4 space-y-2 text-xs text-ivory/70">
          <div className="text-[10px] font-mono uppercase tracking-widest text-gold">
            Current Leadership & Advisory Engagements
          </div>
          <ul className="list-disc list-inside space-y-1 text-ivory/80">
            <li><strong>CEO</strong>, AJK Innovation Incubator Foundation (AIIF) – Coimbatore</li>
            <li><strong>Co-Founder & Venture Architect</strong>, ACTIEV Venture Studio</li>
            <li><strong>Strategic Growth Consultant</strong>, GoAlong Mobility</li>
            <li><strong>Strategic Growth Advisor (Exploratory)</strong>, JB Group / JB Water Harvesting</li>
            <li><strong>Ecosystem Advisory Board & Mentor</strong>: iTNT, AIC-BIMTECH, AIC-IIITK, APIS, Sathyabama Innovation Council, KCIL, KBCNMU-CIIL</li>
            <li><strong>Business Mentor</strong>: Cyfotok Pvt Ltd, Auvetra Labs Pvt Ltd, IAS Mary Maritime Models</li>
          </ul>
        </div>

        {/* Footer Note */}
        <div className="border-t border-gold/20 pt-4 flex flex-col sm:flex-row justify-between items-center text-[11px] text-ivory/50">
          <span>Prepared by Executive Office of Prof. Bhaarathi Ilango &bull; {new Date().getFullYear()}</span>
          <span className="mt-1 sm:mt-0 font-mono">Status: Verified Executive Record</span>
        </div>
      </div>
    </div>
  );
}
