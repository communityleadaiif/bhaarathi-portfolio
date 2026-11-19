'use client';

import { useState } from 'react';
import {
  Send,
  MessageSquare,
  Calendar,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Briefcase,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { EngagementCategory, ExecutiveProfile } from '@/types';
import AskBhaarathiAssistant from './AskBhaarathiAssistant';

interface EngagementDeskProps {
  profile: ExecutiveProfile;
}

export default function EngagementDesk({ profile }: EngagementDeskProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    designation: '',
    email: '',
    phone: '',
    category: 'Strategic Advisory' as EngagementCategory,
    description: '',
    timeline: '1-3 months',
    budget: '',
    consent: true,
    website_trap: '' // honeypot
  });

  const categories: EngagementCategory[] = [
    'Growth Consulting',
    'Venture Partnership',
    'Institutional Leadership',
    'Strategic Advisory',
    'CSR & Funding',
    'Speaking Engagements',
    'Mentorship',
    'AI Transformation'
  ];

  const timelines = [
    'Immediate (1-3 weeks)',
    '1-3 months',
    '3-6 months',
    'Long-term Retainer / Board Seat'
  ];

  const budgetTiers = [
    'Exploratory / Discovery Call',
    '< ₹5 Lakhs',
    '₹5L – ₹15 Lakhs',
    '₹15L – ₹50 Lakhs',
    '₹50L+ / Institutional Grant',
    'Equity / Advisory Retainer'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit proposal. Please verify your details.');
      }
    } catch (err) {
      setErrorMessage('Network error communicating with the executive desk.');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Prof. Bhaarathi Ilango, I am reaching out from your executive website regarding an engagement opportunity in ${formData.category}.`
  );

  return (
    <section id="engagement-desk" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#171F2E] border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-gold" />
            <span>Strategic Engagement Desk</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight">
            Initiate a Strategic Engagement
          </h2>
          <p className="text-base text-ivory/70 leading-relaxed">
            Directly connect with Prof. Bhaarathi Ilango for growth consulting, venture advisory, institutional transformation, board appointments, speaking keynotes, or executive mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Grounded Assistant */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Executive Contact Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/25 shadow-xl space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold block">
                  Confidential Channels
                </span>
                <h3 className="font-serif text-2xl font-bold text-ivory">
                  Executive Office Protocols
                </h3>
                <p className="text-xs text-ivory/60 leading-relaxed">
                  All submissions are treated with strict executive confidentiality. You may also initiate immediate dialogue via official direct channels.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {/* Official Email */}
                <a
                  href={`mailto:${profile.officialEmail}`}
                  className="flex items-center space-x-3.5 p-4 rounded-2xl bg-[#101827] border border-gold/15 hover:border-gold/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-ivory/50 uppercase font-mono block">Official Email</span>
                    <span className="font-semibold text-ivory group-hover:text-gold transition">
                      {profile.officialEmail}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/919486356789?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-4 rounded-2xl bg-[#101827] border border-gold/15 hover:border-gold/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-ivory/50 uppercase font-mono block">Direct Executive WhatsApp</span>
                    <span className="font-semibold text-ivory group-hover:text-emerald-300 transition">
                      {profile.phoneWhatsApp}
                    </span>
                  </div>
                </a>

                {/* Calendar Booking */}
                <a
                  href={profile.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-4 rounded-2xl bg-[#101827] border border-gold/15 hover:border-gold/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-ivory/50 uppercase font-mono block">Schedule Briefing</span>
                    <span className="font-semibold text-gold group-hover:text-gold-light transition flex items-center space-x-1">
                      <span>Reserve Calendar Slot</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#0D121F] border border-gold/10 space-y-1.5 text-[11px] text-ivory/60">
                <div className="flex items-center space-x-1.5 text-gold font-mono uppercase font-semibold text-[10px]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Privacy &amp; Data Safeguards</span>
                </div>
                <p>
                  No inquiry data is ever exposed publicly or monetized. Confidential discussions proceed under standard reciprocal NDA protocols.
                </p>
              </div>
            </div>

            {/* Embedded Grounded Assistant */}
            <div className="h-96">
              <AskBhaarathiAssistant embedded={true} />
            </div>
          </div>

          {/* Right Column: Structured Interactive Engagement Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/30 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold block">
                Structured Engagement Proposal
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory mt-1">
                Engagement Specification Form
              </h3>
              <p className="text-xs text-ivory/60 mt-1">
                Please provide structured context regarding your organization, strategic objectives, and timeline.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-gold/10 border border-gold/40 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-ivory">
                  Proposal Successfully Received
                </h4>
                <p className="text-xs text-ivory/80 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out. Your engagement proposal has been encrypted and routed directly to Prof. Bhaarathi Ilango’s executive office for review. You can anticipate a response within 48 business hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        designation: '',
                        email: '',
                        phone: '',
                        category: 'Strategic Advisory',
                        description: '',
                        timeline: '1-3 months',
                        budget: '',
                        consent: true,
                        website_trap: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider shadow-gold"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot field (hidden) */}
                <input
                  type="text"
                  name="website_trap"
                  value={formData.website_trap}
                  onChange={(e) => setFormData({ ...formData, website_trap: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Engagement Category Picker */}
                <div className="space-y-1.5">
                  <label className="font-bold text-ivory block uppercase tracking-wider text-[11px]">
                    Engagement Category *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat })}
                        className={`p-2.5 rounded-xl border text-[11px] font-semibold text-left transition ${
                          formData.category === cat
                            ? 'bg-gold text-[#0A0F1D] border-gold font-bold shadow-gold'
                            : 'bg-[#101827] text-ivory/80 border-gold/20 hover:border-gold/40'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-ivory block uppercase tracking-wider text-[11px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Raghavan Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#101827] border border-gold/25 rounded-xl text-ivory placeholder-ivory/35 outline-none focus:border-gold transition font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-ivory block uppercase tracking-wider text-[11px]">
                      Corporate / Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-[#101827] border border-gold/25 rounded-xl text-ivory placeholder-ivory/35 outline-none focus:border-gold transition font-medium"
                    />
                  </div>
                </div>

                {/* Organization & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-ivory block uppercase tracking-wider text-[11px]">
                      Organization / University / Venture
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Precision Robotics Ltd"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full p-3 bg-[#101827] border border-gold/25 rounded-xl text-ivory placeholder-ivory/35 outline-none focus:border-gold transition font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-ivory block uppercase tracking-wider text-[11px]">
                      Designation / Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Managing Director / Founder"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full p-3 bg-[#101827] border border-gold/25 rounded-xl text-ivory placeholder-ivory/35 outline-none focus:border-gold transition font-medium"
                    />
                  </div>
                </div>

                {/* Phone & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-ivory block uppercase tracking-wider text-[11px]">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-[#101827] border border-gold/25 rounded-xl text-ivory placeholder-ivory/35 outline-none focus:border-gold transition font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-ivory block uppercase tracking-wider text-[11px]">
                      Expected Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full p-3 bg-[#101827] border border-gold/25 rounded-xl text-ivory outline-none focus:border-gold transition font-medium"
                    >
                      {timelines.map((tl) => (
                        <option key={tl} value={tl} className="bg-[#101827]">
                          {tl}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Budget Range */}
                <div className="space-y-1.5">
                  <label className="font-bold text-ivory block uppercase tracking-wider text-[11px]">
                    Expected Scope / Budget Parameter (Optional)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full p-3 bg-[#101827] border border-gold/25 rounded-xl text-ivory outline-none focus:border-gold transition font-medium"
                  >
                    <option value="" className="bg-[#101827]">Select budget tier (or leave open)</option>
                    {budgetTiers.map((b) => (
                      <option key={b} value={b} className="bg-[#101827]">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Scope & Description */}
                <div className="space-y-1.5">
                  <label className="font-bold text-ivory block uppercase tracking-wider text-[11px]">
                    Strategic Proposal Scope &amp; Objectives *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the challenge, institutional goals, expected deliverables, or speaking brief..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full p-3 bg-[#101827] border border-gold/25 rounded-xl text-ivory placeholder-ivory/35 outline-none focus:border-gold transition font-medium"
                  />
                </div>

                {/* Privacy Consent */}
                <div className="flex items-start space-x-3 pt-1">
                  <input
                    type="checkbox"
                    id="consentCheck"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 accent-[#C5A46D] w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="consentCheck" className="text-[11px] text-ivory/70 leading-relaxed cursor-pointer">
                    I acknowledge that this submission will be confidentially received by Prof. Bhaarathi Ilango’s executive office under non-disclosure governance. No public exposure will occur.
                  </label>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider shadow-gold hover:shadow-gold-lg transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Transmitting Proposal...' : 'Transmit Strategic Proposal'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
