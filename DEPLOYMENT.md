# Prof. Bhaarathi Ilango — Executive Platform Architecture & Deployment Manual

## 1. Executive Positioning & Architecture Overview
This executive website and strategic engagement platform has been built exclusively for **Prof. Bhaarathi Ilango** under the core positioning:
> **Institution Builder | Venture Architect | Growth Strategist**

### Design System & Visual Identity
- **Primary Navy**: `#101827` (Deep Executive Navy)
- **Primary Charcoal**: `#171C25` (Obsidian Base)
- **Champagne Gold**: `#C5A46D` (Luxury Trim & Accents)
- **Ivory**: `#F5F2EA` (Warm High-Legibility Typography)
- **Typography**: Editorial Serif Display (`Playfair Display`, `Cormorant Garamond`) paired with modern executive sans-serif (`Plus Jakarta Sans`).
- **Portrait Policy**: Zero fabricated AI portraits. If an owner portrait is not present at `public/images/portrait.jpg`, the platform renders a distinguished gold-embossed executive crest and monogram.

---

## 2. Site Architecture (10 Sections + 5 Special Features)

1. **Executive Hero**: Name, positioning, headline, subheading, action buttons (*Explore My Work*, *Engage with Me*, *Download Executive Profile* modal), and career-wide metric ribbon.
2. **About & Leadership Profile**: Executive Credo (*"We do not merely ideate; we architect resilient systems that execute with unwavering purpose."*), 4 Pillars of Leadership, Section 8 fiduciary governance principles.
3. **Capabilities & Strategic Services**: 10 distinct advisory practices with deliverables and focus area inspection modals.
4. **Venture & Engagement Portfolio**: Structured into 7 strict categories (A through G):
   - **Category A: Venture Leadership** – ACTIEV (Venture Studio)
   - **Category B: Growth Consulting** – GoAlong (Mobility)
   - **Category C: Strategic Discussions** – JB Group / JB Water Harvesting (*explicitly disclosed as exploratory engagement*)
   - **Category D: Institutional Leadership** – AJK Group of Institutions & AJK Innovation Incubator Foundation (AIIF)
   - **Category E: Previous Leadership** – Rathinam Startup School
   - **Category F: PAN-India Startup Ecosystem** – KCIL, AIC-IIITK, iTNT, Sathyabama Innovation Council, KBCNMU-CIIL, Andhra Pradesh Innovation Society (APIS), Atal Incubation Centre-BIMTECH
   - **Category G: Business Mentorship** – Cyfotok Pvt Ltd, Auvetra Labs Pvt Ltd, IAS Mary Maritime Models
5. **Institutional Ecosystem Leadership**:
   - The **4-Readiness Level Model** (URL, TRL, IRL, CRL) milestone progression.
   - The **6 Daily Campus Centers of Excellence** (QXF, Fashion, Culinary, Bio, Starfrys, IIC) with review schedules.
   - The **Non-Grant-Dependent Incubation Flywheel**.
   - Direct link to the live AIIF Operating System (`https://aiif-ams.vercel.app`).
6. **Special Feature 1: Impact Observatory**:
   - 300+ Startups Mentored
   - ₹2+ Crore Funding Ecosystem Mobilized
   - 38 Strategic Partnerships
   - 100+ High-Impact Events
   - 10,000+ Students Impacted
   - *Career-Wide Attribution Notice*: Explicitly clarifies that these reflect career-wide achievements across institutions and not a single entity.
7. **Special Feature 2: Interactive Professional Journey Timeline**:
   - Multi-phase milestone tracker tracing institution building, venture architecture, and ecosystem scaling.
8. **Special Feature 3: Executive Venture Radar**:
   - Multi-stage matrix mapping active ventures across Problem Relevance (URL), Prototype Stress (TRL), Industrial Pilots (IRL), and Commercial Scale (CRL).
9. **Publications & Thought Leadership**:
   - Curated executive essays with interactive reader modal.
10. **Awards, Credentials & Education**:
    - State and national honors, board appointments, and university leadership milestones.
11. **Special Feature 4: Ask Bhaarathi AI Assistant**:
    - Grounded strictly in owner-approved public facts (bio, capabilities, ACTIEV, AIIF, JB Group exploratory status, mentor roles, and engagement protocols). Available as both a floating widget and embedded in the engagement desk.
12. **Special Feature 5: Strategic Engagement Desk**:
    - Interactive 8-category enquiry system with validation, anti-spam honeypot, expected timeline, optional budget parameters, privacy consent, direct WhatsApp connect, email, and meeting booking links.
13. **Executive Admin Desk (`/admin`)**:
    - Password-protected command console to view and export inquiries, edit portfolio statuses, update headline metrics, publish articles, and update executive bio settings.

---

## 3. How to Supply the Owner's Portrait
Place the official high-resolution portrait photograph here:
```
public/images/portrait.jpg
```
Recommended format: JPG, WebP, or PNG (aspect ratio 4:5 or 3:4). The site will automatically display it inside the custom gold-trimmed executive frame.

---

## 4. Admin Access
- **URL**: `https://your-domain.com/admin` (or `http://localhost:3000/admin`)
- **Default Passcode**: `bhaarathi2026!`
- **To change passcode**: Set the `ADMIN_PASSWORD` variable in `.env.local` or in the Vercel project settings.

---

## 5. Production Deployment to Vercel

### Step 1: Deploy with Vercel CLI
From the project directory:
```bash
# In your terminal
vercel --prod
```

### Step 2: Configure Environment Variables in Vercel
In your Vercel Project Dashboard (`Settings` -> `Environment Variables`), configure:
- `ADMIN_PASSWORD`: Your private admin passcode
- `ADMIN_SESSION_SECRET`: A secure random string for the session cookie
- `NEXT_PUBLIC_SITE_URL`: `https://yourcustomdomain.com`

### Step 3: Connect Custom Domain
1. In Vercel, navigate to **Settings** -> **Domains**.
2. Add your custom domain (e.g., `bhaarathi.com` or `profbhaarathi.com`).
3. Set your DNS records at your registrar:
   - For Apex domain (`bhaarathi.com`): `A` record pointing to `76.76.21.21`
   - For Subdomain (`www.bhaarathi.com`): `CNAME` record pointing to `cname.vercel-dns.com`
