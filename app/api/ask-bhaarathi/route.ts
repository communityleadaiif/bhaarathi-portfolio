import { NextRequest, NextResponse } from 'next/server';
import { getStore } from '@/lib/store';

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const q = question.toLowerCase().trim();
    const store = getStore();
    const { profile, portfolio, metrics, capabilities } = store;

    // Grounded knowledge answers based strictly on owner-approved facts:
    let answer = '';

    if (
      q.includes('who is') ||
      q.includes('about') ||
      q.includes('background') ||
      q.includes('bio') ||
      q.includes('profile')
    ) {
      answer = `${profile.name} is positioned as an **${profile.positioning}**.\n\nHe currently serves as Chief Executive Officer at AJK Innovation Incubator Foundation (AIIF) and leads strategic growth, venture acceleration, and institutional ecosystem initiatives across India. His leadership centers on architecting sustainable, non-grant-dependent university innovation engines and translating ambitious early-stage research into commercially viable market outcomes.`;
    } else if (
      q.includes('4-readiness') ||
      q.includes('readiness model') ||
      q.includes('url') ||
      q.includes('trl') ||
      q.includes('irl') ||
      q.includes('crl') ||
      q.includes('methodology')
    ) {
      answer = `Prof. Bhaarathi Ilango pioneered the **4-Readiness Level Model** to eliminate "demo-ware" and solve early venture execution failure:\n\n1. **URL (1-4) - Uniqueness & Relevance Level**: Requires at least 50+ prospective customer validation interviews and verified Letters of Intent before grant funding.\n2. **TRL (1-4) - Technology Readiness Level**: Validates functional technical robustness under simulated stress and real operating conditions.\n3. **IRL (1-3) - Implementation Readiness Level**: Solves pilot hurdles by deploying live tests with MSMEs and regional industrial cluster partners.\n4. **CRL (1-3) - Commercial Readiness Level**: Focuses on unit economics, repeat transactions, gross margin sustainability, and a non-grant growth flywheel.`;
    } else if (
      q.includes('jb group') ||
      q.includes('water harvesting') ||
      q.includes('jb water')
    ) {
      answer = `**Important Note on Engagement Status:**\nProf. Bhaarathi Ilango's engagement with **JB Group / JB Water Harvesting** is strictly an **exploratory strategic discussion**, not a confirmed corporate appointment.\n\nThe discussions center on exploring sustainable industrial rainwater harvesting frameworks, ESG positioning, and regional industrial cluster water resilience models.`;
    } else if (
      q.includes('actiev') ||
      q.includes('venture studio') ||
      q.includes('venture building')
    ) {
      answer = `**ACTIEV** is a venture studio and accelerator where Prof. Bhaarathi Ilango serves as **Co-Founder & Venture Architect**.\n\nAt ACTIEV, he structured the venture validation framework, established deeptech cohorts, and built corporate pilot pipelines connecting industrial IoT, automation, and enterprise AI startups directly to manufacturing corridors across South India.`;
    } else if (
      q.includes('goalong') ||
      q.includes('mobility')
    ) {
      answer = `At **GoAlong**, an urban shared mobility platform, Prof. Bhaarathi served as **Strategic Growth Consultant**.\n\nHe restructured customer acquisition funnels, optimized route profitability, and devised institutional fleet partnerships to drive sustainable unit economics in suburban and intercity transit corridors.`;
    } else if (
      q.includes('aiif') ||
      q.includes('ajk') ||
      q.includes('incubator') ||
      q.includes('operating system')
    ) {
      answer = `Prof. Bhaarathi Ilango serves as **Chief Executive Officer** of **AJK Innovation Incubator Foundation (AIIF)**, backed by AJK College of Arts and Science (Autonomous, NAAC A+ accredited).\n\nKey achievements include:\n- Formulating the 4-Readiness Level Model\n- Establishing 6 daily campus Centers of Excellence\n- Securing StartupTN Partner Multiplier Fund incubator status\n- Deploying the digital incubation operating system (AIIF AMS at [aiif-ams.vercel.app](https://aiif-ams.vercel.app))\n- Fostering 54+ startups, mobilizing ₹1.64+ Cr in capital, and generating 175+ jobs.`;
    } else if (
      q.includes('mentor') ||
      q.includes('mentorship') ||
      q.includes('cyfotok') ||
      q.includes('auvetra') ||
      q.includes('ias mary')
    ) {
      answer = `Prof. Bhaarathi Ilango actively serves as Business Mentor to selected high-potential enterprises:\n\n- **Cyfotok Pvt Ltd**: Mentoring leadership on enterprise cybersecurity sales, institutional GTM, and strategic capital positioning.\n- **Auvetra Labs Pvt Ltd**: Mentoring founders on industrial IoT hardware productization, bill of materials (BOM) optimization, and manufacturing pilot deployments.\n- **IAS Mary Maritime Models**: Guiding maritime scale model engineering and defense exhibition capture for domestic and export naval procurement channels.`;
    } else if (
      q.includes('pan india') ||
      q.includes('ecosystem') ||
      q.includes('itnt') ||
      q.includes('bimtech') ||
      q.includes('iiitk') ||
      q.includes('kcil') ||
      q.includes('apis') ||
      q.includes('sathyabama')
    ) {
      answer = `Prof. Bhaarathi serves the broader Indian startup ecosystem across premier national bodies:\n\n- **iTNT (Tamil Nadu Technology Hub)**: Ecosystem Partner & Deeptech Mentor\n- **Atal Incubation Centre - BIMTECH**: Mentor & Innovation Collaborator\n- **AIC-IIITK (IIIT Kottayam)**: Sectoral Mentor & Selection Jury\n- **Andhra Pradesh Innovation Society (APIS)**: State Startup Mentor & Evaluator\n- **Sathyabama Innovation Council**: External Advisory Board & Pitch Jury\n- **KCIL (Knowledge Corridor)**: Advisory Board & Innovation Council\n- **KBCNMU - CIIL (Maharashtra)**: Strategic Mentor & Incubation Advisor.`;
    } else if (
      q.includes('metrics') ||
      q.includes('impact') ||
      q.includes('numbers') ||
      q.includes('how many') ||
      q.includes('stat')
    ) {
      answer = `**Career-Wide Impact Metrics** (accumulated across institutional leadership, venture building, and ecosystem advisory):\n\n- **300+** Startups Mentored\n- **₹2+ Crore** Startup Funding Support Ecosystem\n- **38** Strategic Partnerships Forged\n- **100+** High-Impact Venture Events & Pitch Marathons\n- **10,000+** Students Impacted\n\n*Note: These represent career-wide cumulative metrics and do not belong to any single institution.*`;
    } else if (
      q.includes('services') ||
      q.includes('capabilities') ||
      q.includes('consulting') ||
      q.includes('hire') ||
      q.includes('offer')
    ) {
      answer = `Prof. Bhaarathi Ilango provides strategic executive engagement across 10 core capability domains:\n\n1. Institutional Transformation\n2. Startup Ecosystem Development\n3. Venture Building (Studio model)\n4. GTM & Industrial Corridor Market Adoption\n5. Growth Consulting & Unit Economics Optimization\n6. AI & Digital Transformation\n7. CSR Partnerships & Schedule VII Impact Structuring\n8. Fundraising Strategy & Dilution Planning\n9. Research Commercialisation & Patent Licensing\n10. Executive Advisory & Board-Level Mentorship.`;
    } else if (
      q.includes('contact') ||
      q.includes('email') ||
      q.includes('engage') ||
      q.includes('meeting') ||
      q.includes('book') ||
      q.includes('collaborate')
    ) {
      answer = `You can engage with Prof. Bhaarathi Ilango through the **Strategic Engagement Desk** on this platform, or via official executive channels:\n\n- **Official Correspondence**: \`${profile.officialEmail}\`\n- **Direct WhatsApp / Executive Desk**: \`${profile.phoneWhatsApp}\`\n- **Direct Calendar Booking**: Available via the engagement desk\n- **Location**: Coimbatore & Chennai, Tamil Nadu, India.\n\nAll formal advisory, consulting, and board enquiries are reviewed directly by the executive office.`;
    } else {
      answer = `Prof. Bhaarathi Ilango is an **Institution Builder, Venture Architect, and Growth Strategist** with expertise spanning institutional transformation, venture creation (ACTIEV), university incubation (AIIF), and pan-India startup advisory.\n\nTo explore specific strategic engagements (Advisory, Growth Consulting, Board Roles, or Speaking), please submit your detailed proposal via the **Strategic Engagement Desk** below or schedule a direct briefing session.`;
    }

    return NextResponse.json({
      success: true,
      answer,
      disclaimer: 'Grounded strictly in owner-approved public records. No unverified claims or private client data.'
    });
  } catch (error) {
    console.error('Error in Ask Bhaarathi assistant:', error);
    return NextResponse.json({ error: 'Unable to process question at this time' }, { status: 500 });
  }
}
