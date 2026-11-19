'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

interface ExecutivePortraitProps {
  portraitUrl?: string;
  name?: string;
  title?: string;
  className?: string;
}

export default function ExecutivePortrait({
  portraitUrl = '/images/portrait.jpg',
  name = 'Prof. Bhaarathi Ilango',
  title = 'Institution Builder | Venture Architect',
  className = ''
}: ExecutivePortraitProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative group ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-gold/40 via-gold/10 to-gold/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

      {/* Main Portrait Container */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1C2433] via-[#121927] to-[#0A0F1D] border border-gold/30 shadow-2xl flex flex-col items-center justify-center">
        {!imageError ? (
          <>
            <Image
              src={portraitUrl}
              alt={name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top filter brightness-[0.97] contrast-[1.02] transition duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
            {/* Subtle Gradient Overlay for executive depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </>
        ) : (
          /* Distinguished Executive Monogram & Crest Fallback (Ensures zero AI fake portraits) */
          <div className="relative w-full h-full flex flex-col items-center justify-between p-8 text-center bg-gradient-to-b from-[#171F2E] via-[#101827] to-[#0A0F1D]">
            <div className="w-full flex justify-between items-center text-[10px] uppercase tracking-widest text-gold/70 font-mono">
              <span>Executive Profile</span>
              <span>EST. 2012</span>
            </div>

            <div className="my-auto space-y-4">
              <div className="relative mx-auto w-28 h-28 rounded-full border-2 border-gold/40 flex items-center justify-center bg-gradient-to-br from-[#232F42] to-[#101827] shadow-xl shadow-gold/10">
                <div className="absolute inset-2 rounded-full border border-gold/20 flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-gold tracking-tight">BI</span>
                </div>
                <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-gold text-[#0A0F1D]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-ivory tracking-tight">{name}</h3>
                <p className="text-xs text-gold/80 font-medium mt-1 uppercase tracking-wider">{title}</p>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-[11px] text-gold-light">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Verified Executive Office</span>
              </div>
            </div>

            <div className="text-[11px] text-ivory/60 border-t border-gold/15 w-full pt-3">
              Chief Executive Officer &bull; AIIF | Co-Founder &bull; ACTIEV
            </div>
          </div>
        )}

        {/* Executive Identification Corner Badge */}
        <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-xl bg-[#0A0F1D]/85 backdrop-blur-md border border-gold/25 shadow-xl flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-gold">Official Executive Desk</div>
            <div className="text-xs font-bold text-ivory font-serif">{name}</div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
            <Award className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
