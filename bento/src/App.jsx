import './App.css'

/* ─── placeholder images using a reliable placeholder service ─── */
const IMGS = {
  hero:    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
  project: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
  solar:   'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  team:    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
}

/* ─── Logo ─── */
function Logo() {
  return (
    <div className="logo">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="0" y="0" width="12" height="12" rx="3" fill="var(--accent)"/>
        <rect x="16" y="0" width="12" height="12" rx="3" fill="var(--accent)" opacity="0.5"/>
        <rect x="0" y="16" width="12" height="12" rx="3" fill="var(--accent)" opacity="0.5"/>
        <rect x="16" y="16" width="12" height="12" rx="3" fill="var(--accent)" opacity="0.25"/>
      </svg>
      <span className="logo-name">Arcline<span className="logo-dot">.</span></span>
    </div>
  )
}

/* ─── WhatsApp icon ─── */
function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/2348000000000"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span>WhatsApp</span>
    </a>
  )
}

/* ─── Bento Boxes ─── */

function HeroBox() {
  return (
    <div className="bento-box box-hero">
      <img src={IMGS.hero} alt="Modern architecture render" className="box-img" />
      <div className="hero-overlay">
        <p className="hero-tag">Premium Design Studio</p>
        <h1 className="hero-title">Architecture<br /><em>&amp; Solar Integration</em></h1>
      </div>
      <div className="hero-badge">Lagos, NG</div>
    </div>
  )
}

function StatBox({ number, label, sub }) {
  return (
    <div className="bento-box box-stat">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
      {sub && <span className="stat-sub">{sub}</span>}
    </div>
  )
}

function ProjectBox() {
  return (
    <div className="bento-box box-project">
      <img src={IMGS.project} alt="Completed project" className="box-img" />
      <div className="project-label">Featured Project</div>
    </div>
  )
}

function SolarBox() {
  return (
    <div className="bento-box box-solar">
      <img src={IMGS.solar} alt="Solar installation" className="box-img" />
      <div className="solar-overlay">
        <span className="solar-tag">Solar Systems</span>
        <p className="solar-desc">Off-grid &amp; hybrid installations for modern builds</p>
      </div>
    </div>
  )
}

function QuoteBox() {
  return (
    <div className="bento-box box-quote">
      <svg className="quote-icon" width="28" height="20" viewBox="0 0 28 20" fill="none">
        <path d="M0 20V12C0 5.373 4.477 1.12 13.43 0l1.14 2.08C10.01 3.12 7.76 5.45 7.18 9H12V20H0zm16 0V12C16 5.373 20.477 1.12 29.43 0l1.14 2.08C26.01 3.12 23.76 5.45 23.18 9H28V20H16z" fill="var(--accent)" opacity="0.4"/>
      </svg>
      <p className="quote-text">
        "Every structure we design is built to outlast trends — and power itself."
      </p>
      <span className="quote-author">— Arcline Design Philosophy</span>
    </div>
  )
}

function ServicesBox() {
  const services = ['Architectural Design', 'Solar Integration', '3D Renders', 'Site Supervision', 'Interior Fit-out']
  return (
    <div className="bento-box box-services">
      <p className="services-heading">What We Do</p>
      <ul className="services-list">
        {services.map(s => (
          <li key={s} className="service-item">
            <span className="service-dot" />
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── CTA Button ─── */
function CTABar() {
  return (
    <div className="cta-bar">
      <p className="cta-copy">Ready to build something extraordinary?</p>
      <button className="cta-btn">
        Book a Free Consultation
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

/* ─── App ─── */
export default function App() {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <Logo />
        <WhatsAppIcon />
      </header>

      {/* Bento Grid */}
      <main className="bento-grid">
        <HeroBox />
        <StatBox number="50+" label="Projects Completed" sub="Across Lagos & Abuja" />
        <StatBox number="8yr" label="Industry Experience" />
        <ProjectBox />
        <SolarBox />
        <QuoteBox />
        <ServicesBox />
      </main>

      {/* Sticky CTA */}
      <CTABar />
    </div>
  )
}
