import { useEffect } from 'react'
import './Services.css'

const services = [
  {
    icon: '◈',
    title: 'Residential Construction',
    tag: 'Core Service',
    desc: 'From bespoke duplexes to multi-unit developments, we build homes that stand apart. Every Cove Associates residential project starts with your brief and ends with a fully inspected, snag-free handover.',
    features: ['Custom architectural design', 'Structural engineering', 'Full project management', '12-month post-handover support'],
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
  },
  {
    icon: '◇',
    title: 'Commercial Fit-Outs',
    tag: 'Core Service',
    desc: 'Office spaces, retail interiors, hospitality venues — we deliver commercial environments that communicate your brand and inspire the people who work and live in them.',
    features: ['Workplace strategy & space planning', 'Brand-aligned interior design', 'MEP coordination', 'Fast-track delivery programmes'],
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
  },
  {
    icon: '◉',
    title: 'Interior Design',
    tag: 'Specialist Service',
    desc: 'Our in-house design team creates interiors that feel considered, not curated. We source premium materials, custom furniture, and bespoke finishes — all coordinated under one budget.',
    features: ['Concept development & mood boards', 'Material & finish specification', 'Custom furniture procurement', 'Art direction & styling'],
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
  },
  {
    icon: '◐',
    title: 'Renovations & Extensions',
    tag: 'Popular Service',
    desc: 'Breathing new life into existing structures requires a different kind of expertise. Our renovation team works around your schedule, with minimal disruption and maximum transformation.',
    features: ['Structural assessment & planning', 'Extensions & additional floors', 'Kitchen & bathroom overhauls', 'Full gut renovations'],
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
  },
  {
    icon: '◑',
    title: 'Solar & Smart-Home Integration',
    tag: 'Cove Energy Division',
    desc: "Nigeria's energy challenges deserve a permanent answer. Our Cove Energy team designs and installs solar systems, battery storage, and smart-home automation that keep your property running — always.",
    features: ['Solar PV system design & installation', 'Battery storage & inverter systems', 'Smart-home automation (lighting, security, climate)', 'Energy audits for existing buildings'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
  },
  {
    icon: '◒',
    title: 'Project Management & Consulting',
    tag: 'Advisory Service',
    desc: "Already have a contractor? Bring us in as your owner's representative. We provide independent oversight, cost control, and quality assurance — so you always know what's really happening on site.",
    features: ["Owner's representative services", 'Cost management & QS', 'Programme monitoring', 'Contractor procurement & vetting'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
  },
]

const process = [
  { num: '01', title: 'Initial Consultation', desc: 'A no-obligation conversation to understand your project scope, timeline, and budget.' },
  { num: '02', title: 'Scope & Proposal', desc: 'We produce a detailed proposal with a full scope of works, programme, and cost estimate.' },
  { num: '03', title: 'Design Development', desc: 'Architectural drawings, 3D renders, and material selections — all refined with your input.' },
  { num: '04', title: 'Construction', desc: 'On-site execution led by a dedicated project manager, with weekly progress reports.' },
  { num: '05', title: 'Handover', desc: 'A fully snagged, inspected, and documented project — with 12 months of aftercare support.' },
]

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="ep-root">

      {/* MINI NAV */}
      <header className="ep-nav">
        <div className="ep-nav-inner">
          <a href="/" className="ep-logo">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
              <rect width="36" height="36" rx="4" fill="rgba(200,169,110,0.12)" />
              <path d="M25 11.5C23.2 9.9 20.7 9 18 9C12.5 9 8 13.5 8 19C8 24.5 12.5 29 18 29C20.7 29 23.2 28.1 25 26.5" stroke="#c8a96e" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M15 19H27" stroke="#c8a96e" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M23 15.5L27 19L23 22.5" stroke="#c8a96e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="ep-logo-text">COVE ASSOCIATES</span>
          </a>
          <a href="https://wa.me/2348000000000" className="ep-nav-cta" target="_blank" rel="noopener noreferrer">
            Talk to Us →
          </a>
        </div>
      </header>

      {/* HERO */}
      <div className="ep-hero">
        <div className="ep-hero-bg">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80" alt="Cove Associates Services" />
          <div className="ep-hero-veil" />
        </div>
        <div className="ep-hero-content">
          <span className="ep-kicker">Full-Service · End-to-End · One Team</span>
          <h1 className="ep-hero-title">Everything You Need.<br /><em>Under One Roof.</em></h1>
          <p className="ep-hero-sub">From the first line on paper to the final key in your hand — we handle it all.</p>
        </div>
      </div>

      {/* INTRO */}
      <section className="ep-section" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', paddingBottom: 0 }}>
        <span className="ep-tag">Our Services</span>
        <h2 className="ep-heading">Built Around Your Project,<br />Not the Other Way Round.</h2>
        <p className="ep-body" style={{ maxWidth: 600, margin: '0 auto' }}>
          Most construction firms hand off to subcontractors and hope for the best. At Cove Associates, every service — design, build, interior, energy — is delivered by our own teams, coordinated by a single project manager, accountable to you alone.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="ep-section ep-services-section">
        <div className="ep-services-list">
          {services.map((s, i) => (
            <div className={`ep-service-row ${i % 2 !== 0 ? 'ep-service-row--reverse' : ''}`} key={s.title}>
              <div className="ep-service-img-col">
                <div className="ep-service-img-wrap">
                  <img src={s.img} alt={s.title} className="ep-service-img" />
                  <div className="ep-service-img-overlay" />
                </div>
              </div>
              <div className="ep-service-text-col">
                <span className="ep-service-tag">{s.tag}</span>
                <div className="ep-service-icon">{s.icon}</div>
                <h3 className="ep-service-title">{s.title}</h3>
                <p className="ep-service-desc">{s.desc}</p>
                <ul className="ep-service-features">
                  {s.features.map(f => (
                    <li key={f} className="ep-service-feature">
                      <span className="ep-check">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="ep-section ep-timeline-section">
        <div className="ep-center" style={{ marginBottom: '64px' }}>
          <span className="ep-tag">How We Work</span>
          <h2 className="ep-heading">Our 5-Step Process</h2>
        </div>
        <div className="ep-process-steps">
          {process.map((p) => (
            <div className="ep-process-step" key={p.num}>
              <div className="ep-process-num">{p.num}</div>
              <div className="ep-process-info">
                <h3 className="ep-process-title">{p.title}</h3>
                <p className="ep-process-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY COVE */}
      <section className="ep-section ep-values-section">
        <div className="ep-center">
          <span className="ep-tag">Why Choose Us</span>
          <h2 className="ep-heading">The Cove Associates Difference</h2>
        </div>
        <div className="ep-values-grid">
          {[
            { icon: '①', title: 'One Point of Contact', body: 'One project manager. One phone number. Full accountability — no blame-shifting between contractors.' },
            { icon: '②', title: 'Fixed-Price Contracts', body: 'We agree the cost before we break ground. No surprise invoices. No budget creep.' },
            { icon: '③', title: 'Weekly Progress Reports', body: 'You receive a written update every Friday with photos, progress against programme, and upcoming milestones.' },
            { icon: '④', title: '12-Month Aftercare', body: "We don't disappear after handover. Our team is on call for 12 months for any issues that arise." },
          ].map(v => (
            <div className="ep-value-card" key={v.title}>
              <span className="ep-value-icon">{v.icon}</span>
              <h3 className="ep-value-title">{v.title}</h3>
              <p className="ep-value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ep-cta-section">
        <h2 className="ep-cta-heading">Tell Us About Your Project.</h2>
        <p className="ep-cta-sub">Free consultation. Detailed proposal. No obligation.</p>
        <a href="https://wa.me/2348000000000" className="ep-cta-btn" target="_blank" rel="noopener noreferrer">
          Book a Free Consultation →
        </a>
      </section>

      <footer className="ep-footer">
        <span>© {new Date().getFullYear()} Cove Associates Ltd.</span>
        <a href="/">← Back to Home</a>
      </footer>
    </div>
  )
}
