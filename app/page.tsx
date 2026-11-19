'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Rocket, 
  Users, 
  GraduationCap, 
  Calendar, 
  Briefcase, 
  TrendingUp, 
  DollarSign, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Send,
  Building2,
  Sparkles
} from 'lucide-react';

export default function PortfolioPage() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({ name: '', email: '', organization: '', message: '' });
      alert('Thank you for reaching out! Your message has been sent to Bhaarathi.');
    }, 1200);
  };

  const coeList = [
    { code: 'QXF.INC', title: 'Industry 4.0, AI & Robotics', day: 'Monday', stat: '9 Startups &bull; ₹48.5L', color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-400' },
    { code: 'FASHION.INC', title: 'Sustainable Textiles & Smart Wearables', day: 'Tuesday', stat: '6 Startups &bull; ₹22.0L', color: 'border-blue-500/40 bg-blue-950/20 text-blue-400' },
    { code: 'CUL.INC', title: 'Food Science & CSHM Innovations', day: 'Wednesday', stat: '7 Startups &bull; ₹26.5L', color: 'border-purple-500/40 bg-purple-950/20 text-purple-400' },
    { code: 'BIO.INC', title: 'Life Sciences, AgriTech & Drone Tech', day: 'Thursday', stat: '8 Startups &bull; ₹35.0L', color: 'border-rose-500/40 bg-rose-950/20 text-rose-400' },
    { code: 'STARFRYS', title: 'Casual Campus Meetups & Pitch Nights', day: 'Friday', stat: '14 Startups &bull; 850 Students', color: 'border-amber-500/40 bg-amber-950/20 text-amber-400' },
    { code: 'IIC', title: 'Institution’s Innovation Council & IPR', day: 'Saturday', stat: '10 Startups &bull; 1,200 Students', color: 'border-teal-500/40 bg-teal-950/20 text-teal-400' },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-emerald-500/20">
              B
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white block leading-tight">Bhaarathi</span>
              <span className="text-[11px] text-emerald-400 font-semibold block leading-tight">CEO &bull; AJK Innovation Incubator Foundation</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition">About</a>
            <a href="#framework" className="hover:text-emerald-400 transition">Incubation Model</a>
            <a href="#coehubs" className="hover:text-emerald-400 transition">Centers of Excellence</a>
            <a href="#trackrecord" className="hover:text-emerald-400 transition">Impact</a>
            <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="#contact"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-900/30 transition transform hover:-translate-y-0.5"
            >
              Collaborate
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-8 sm:p-14 border border-slate-800/80 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Incubation Leader &bull; Ecosystem Architect</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none">
              Purpose-Driven, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Execution-First
              </span> Incubation.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Chief Executive Officer at <strong>AJK Innovation Incubator Foundation (AIIF)</strong>, Coimbatore. Translating campus talent, research, and regional MSME challenges into high-growth, commercially viable startups with non-grant-dependent sustainability.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#framework"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-900/40 transition flex items-center space-x-2"
              >
                <span>Explore Incubation Model</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://aiif-ams.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold text-xs uppercase tracking-wider rounded-xl border border-slate-700 transition flex items-center space-x-2"
              >
                <span>Live AIIF Ecosystem OS</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">54+</div>
              <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Startups Incubated</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">₹1.64 Cr</div>
              <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Capital Mobilized</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-purple-400 tracking-tight">3,780+</div>
              <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Students Empowered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 tracking-tight">6 COEs</div>
              <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Campus Centers of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 bg-gradient-to-tr from-slate-900 to-slate-800 p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-2xl">
              AIIF
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Executive Credo</span>
              <blockquote className="text-2xl font-black text-white leading-tight">
                &ldquo;We don&apos;t just ideate; we execute with purpose.&rdquo;
              </blockquote>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Backed by AJK College of Arts and Science (Autonomous), NAAC A+ accredited, AIIF operates under Section 8 governance to build self-sustaining innovation capacity in Tamil Nadu.
            </p>
            <div className="pt-2 border-t border-slate-700/60 flex items-center space-x-2 text-xs font-bold text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>StartupTN Partner Multiplier Fund</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">About Bhaarathi</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Transforming Academic Talent Into Industry-Ready Startups
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              As CEO of AJK Innovation Incubator Foundation, Bhaarathi spearheads a multi-dimensional, execution-centric incubation model that moves far beyond traditional pitch competitions. Under this leadership, AIIF bridges academic learning and real-world execution by embedding 6 Centers of Excellence into engineering and life science streams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-300">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-sm">StartupTN Multiplier</div>
                <p className="text-slate-400 text-[11px]">Leveraged ₹5L seed grant into ₹28.5L program value in Year 1.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-sm">Non-Grant Flywheel</div>
                <p className="text-slate-400 text-[11px]">Commercial revenue via sponsored challenges, CSR teams, and bootcamps.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-sm">Industrial Pilots</div>
                <p className="text-slate-400 text-[11px]">Active testing across Coimbatore, Tirupur, and Pollachi manufacturing corridors.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-sm">Strict Governance</div>
                <p className="text-slate-400 text-[11px]">Section 8 fiduciary discipline, statutory due diligence, and grace exit policies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incubation Model Framework Section (URL -> TRL -> IRL -> CRL) */}
      <section id="framework" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Signature Methodology</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            The 4-Readiness Level Model
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A milestone-based progression framework that eliminates tech-only demos and solves real-world execution failure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 space-y-3 relative overflow-hidden shadow-lg">
            <div className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">Dimension 1</div>
            <div className="text-2xl font-black text-white">URL (1-4)</div>
            <div className="text-xs font-bold text-emerald-300">Uniqueness &amp; Relevance</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mandatory field validation with 50+ prospective customer interactions before grant allocation. Filters weak ideas early.
            </p>
          </div>

          <div className="bg-slate-900 border border-blue-500/30 rounded-3xl p-6 space-y-3 relative overflow-hidden shadow-lg">
            <div className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">Dimension 2</div>
            <div className="text-2xl font-black text-white">TRL (1-4)</div>
            <div className="text-xs font-bold text-blue-300">Technology Readiness</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ensures technical soundness. Laboratory prototypes are tested under real operating stress to eliminate demo-ware.
            </p>
          </div>

          <div className="bg-slate-900 border border-purple-500/30 rounded-3xl p-6 space-y-3 relative overflow-hidden shadow-lg">
            <div className="text-xs font-extrabold text-purple-400 uppercase tracking-widest">Dimension 3</div>
            <div className="text-2xl font-black text-white">IRL (1-3)</div>
            <div className="text-xs font-bold text-purple-300">Implementation Readiness</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Solves execution failure. Startups deploy live pilot tests with MSMEs and industrial cluster partners in Western Tamil Nadu.
            </p>
          </div>

          <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 space-y-3 relative overflow-hidden shadow-lg">
            <div className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">Dimension 4</div>
            <div className="text-2xl font-black text-white">CRL (1-3)</div>
            <div className="text-xs font-bold text-amber-300">Commercial Readiness</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ensures sustainability. Focuses on unit profitability, customer retention, repeat revenue, and non-grant growth logic.
            </p>
          </div>
        </div>
      </section>

      {/* Centers of Excellence Section */}
      <section id="coehubs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Campus Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              6 Campus Centers of Excellence
            </h2>
          </div>
          <div className="text-xs font-bold text-slate-400 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
            Daily Reviews: 4:00 PM – 5:00 PM @ AIIF Office
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coeList.map((c, i) => (
            <div key={i} className={`p-6 rounded-3xl border ${c.color} space-y-3 flex flex-col justify-between shadow-md`}>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span>{c.day}</span>
                  <span className="text-[10px] font-mono opacity-80">4-5 PM Review</span>
                </div>
                <h3 className="text-xl font-black text-white">{c.code}</h3>
                <p className="text-xs text-slate-300 font-medium">{c.title}</p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-xs font-bold opacity-90" dangerouslySetInnerHTML={{ __html: c.stat }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Track Record & Strategic Impact */}
      <section id="trackrecord" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Measurable Outcomes</span>
            <h2 className="text-3xl font-black text-white tracking-tight">
              AIIF Tracks Outcomes, Not Mere Participation Counts
            </h2>
            <p className="text-xs text-slate-400">
              Clear accountability metrics driving employment generation, patent drafting, and commercial translation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white">54</div>
              <div className="text-[11px] font-semibold text-slate-400 mt-1 uppercase">Active Startups</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">69</div>
              <div className="text-[11px] font-semibold text-slate-400 mt-1 uppercase">Curated Mentors</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-purple-400">175+</div>
              <div className="text-[11px] font-semibold text-slate-400 mt-1 uppercase">Jobs Created</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">73</div>
              <div className="text-[11px] font-semibold text-slate-400 mt-1 uppercase">Industry MoUs</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">115</div>
              <div className="text-[11px] font-semibold text-slate-400 mt-1 uppercase">Bootcamps &amp; Events</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-rose-400">₹1.64Cr</div>
              <div className="text-[11px] font-semibold text-slate-400 mt-1 uppercase">Funds Mobilized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Collaboration Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Get in Touch</span>
              <h2 className="text-3xl font-black text-white tracking-tight">Let&apos;s Build Together</h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Open to discussions with angel investors, CSR partners, industrial MSMEs seeking automation, and visionary startup founders.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center space-x-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Official Correspondence</span>
                  <span className="font-semibold text-white">ibhaarathi@gmail.com / info@aiif.in</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Incubator Office</span>
                  <span className="font-semibold text-white">AJK College Campus, Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
                <ExternalLink className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Incubator Operating System</span>
                  <a href="https://aiif-ams.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 hover:underline">
                    aiif-ams.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-4">Direct Message to Bhaarathi</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Sundar Rajan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">Organization / Startup Name</label>
                <input
                  type="text"
                  placeholder="e.g. Coimbatore Precision MSME"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">Collaboration Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detail your inquiry regarding incubation, corporate partnership, speaking engagement, or angel investment..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-900/40 transition flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>{contactSubmitted ? 'Dispatching Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 pt-8 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-400">Bhaarathi &bull; Chief Executive Officer</p>
        <p className="mt-1">AJK Innovation Incubator Foundation (AIIF), Coimbatore, Tamil Nadu, India</p>
        <p className="mt-2 text-[11px] text-slate-600">&copy; {new Date().getFullYear()} Bhaarathi. All rights reserved.</p>
      </footer>
    </div>
  );
}
