import { getStore } from '@/lib/store';
import Navbar from '@/components/Navbar';
import ExecutiveHero from '@/components/ExecutiveHero';
import AboutLeadership from '@/components/AboutLeadership';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import PortfolioSection from '@/components/PortfolioSection';
import EcosystemLeadership from '@/components/EcosystemLeadership';
import ImpactObservatory from '@/components/ImpactObservatory';
import JourneyTimeline from '@/components/JourneyTimeline';
import VentureRadar from '@/components/VentureRadar';
import ThoughtLeadership from '@/components/ThoughtLeadership';
import CredentialsAwards from '@/components/CredentialsAwards';
import EngagementDesk from '@/components/EngagementDesk';
import Footer from '@/components/Footer';
import AskBhaarathiAssistant from '@/components/AskBhaarathiAssistant';

export const revalidate = 0; // Dynamic server rendering to always reflect store updates

export default function HomePage() {
  const store = getStore();
  const { profile, capabilities, portfolio, metrics, articles, credentials } = store;

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-ivory relative selection:bg-gold selection:text-[#0A0F1D]">
      {/* Top Executive Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero & Executive Credentials */}
        <ExecutiveHero profile={profile} metrics={metrics} />

        {/* 2. About & Leadership Credo */}
        <AboutLeadership profile={profile} />

        {/* 3. Professional Capabilities & Strategic Services */}
        <CapabilitiesGrid capabilities={capabilities} />

        {/* 4. Venture & Strategic Engagement Portfolio */}
        <PortfolioSection portfolio={portfolio} />

        {/* 5. Institutional Ecosystem Leadership (4-Readiness Level Model & CoEs) */}
        <EcosystemLeadership />

        {/* 6. Special Feature 1: Impact Observatory */}
        <ImpactObservatory metrics={metrics} />

        {/* 7. Special Feature 2: Interactive Professional Journey Timeline */}
        <JourneyTimeline />

        {/* 8. Special Feature 3: Venture Radar */}
        <VentureRadar portfolio={portfolio} />

        {/* 9. Publications & Thought Leadership */}
        <ThoughtLeadership articles={articles} />

        {/* 10. Credentials, Appointments & Education */}
        <CredentialsAwards credentials={credentials} />

        {/* 11. Special Feature 5: Strategic Engagement Desk */}
        <EngagementDesk profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Special Feature 4: Ask Bhaarathi AI Assistant (Floating) */}
      <AskBhaarathiAssistant />
    </div>
  );
}
