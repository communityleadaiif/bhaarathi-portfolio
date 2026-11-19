'use client';

import { Award, Shield, CheckCircle2, GraduationCap, Building2, Briefcase } from 'lucide-react';
import { AwardCredential } from '@/types';

interface CredentialsAwardsProps {
  credentials: AwardCredential[];
}

export default function CredentialsAwards({ credentials }: CredentialsAwardsProps) {
  return (
    <section id="credentials" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171F2E] border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-gold" />
            <span>Honors &amp; Appointments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            Credentials, Board Roles &amp; Ecosystem Recognitions
          </h2>
          <p className="text-base text-ivory/70 leading-relaxed">
            Verified institutional leadership positions, advisory board appointments, and state-level innovation recognitions.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred) => (
            <div
              key={cred.id}
              className="p-7 rounded-3xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/20 hover:border-gold/45 transition duration-300 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/25 text-gold uppercase tracking-wider font-semibold">
                    {cred.type}
                  </span>
                  <span className="text-ivory/50">{cred.year}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-ivory">
                    {cred.title}
                  </h3>
                  <div className="text-xs font-semibold text-gold font-mono">
                    {cred.issuer}
                  </div>
                </div>

                <p className="text-xs text-ivory/70 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gold/15 flex items-center space-x-2 text-[11px] text-ivory/60 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Verified Executive Appointment</span>
              </div>
            </div>
          ))}
        </div>

        {/* Governance & Educational Philosophy Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#171C25] via-[#121927] to-[#171C25] border border-gold/25 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono text-gold uppercase tracking-widest">
              Executive Governance Standard
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-ivory">
              Rigorous Separation of Institutional &amp; Private Engagements
            </h4>
            <p className="text-xs text-ivory/70 leading-relaxed">
              Every advisory engagement, board role, and venture affiliation operates with strict adherence to conflict-of-interest disclosures, Section 8 regulatory guidelines, and corporate governance best practices.
            </p>
          </div>

          <a
            href="#engagement-desk"
            className="px-6 py-3 rounded-xl bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold font-bold text-xs uppercase tracking-wider whitespace-nowrap transition"
          >
            Request Board Advisory
          </a>
        </div>
      </div>
    </section>
  );
}
