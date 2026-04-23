import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import './App.css'

/* ── Scroll-fade hook ─────────────────────────── */
function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ── Image Slider ─────────────────────────────── */
function Slider({ images }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 3800)
    return () => clearInterval(t)
  }, [images.length])
  return (
    <div className="slider">
      {images.map((src, i) => (
        <div key={src} className={`slide ${i === idx ? 'active' : ''}`}>
          <img src={src} alt="" />
        </div>
      ))}
      <div className="slider-dots">
        {images.map((_, i) => (
          <button key={i} className={`dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} />
        ))}
      </div>
    </div>
  )
}

/* ── Section ──────────────────────────────────── */
function Section({ id, tag, heading, body, images, reverse, cta, ctaLink }) {
  const ref = useFadeIn()
  return (
    <section id={id} className={`section ${reverse ? 'reverse' : ''}`} ref={ref}>
      <div className="section-text fade-child" style={{ '--delay': '0s' }}>
        <span className="section-tag">{tag}</span>
        <h2 className="section-heading">{heading}</h2>
        <p className="section-body">{body}</p>
        
        {/* If it has an external link, route to it. Otherwise, assume it's a WhatsApp link */}
        {cta && ctaLink ? (
          <Link to={ctaLink} className="section-cta">{cta} →</Link>
        ) : cta ? (
          <a href="https://wa.me/2348000000000" className="section-cta" target="_blank" rel="noopener noreferrer">
            {cta} →
          </a>
        ) : null}
        
      </div>
      <div className="section-visual fade-child" style={{ '--delay': '0.15s' }}>
        <Slider images={images} />
      </div>
    </section>
  )
}

/* ── Data ─────────────────────────────────────── */
const sections = [
  {
    id: 'about',
    tag: 'Who We Are',
    heading: 'Building Lagos\' Most Ambitious Spaces',
    body: 'Clutch is a premium design and construction firm delivering residential and commercial projects that exceed expectations. We combine architectural vision with flawless execution.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
    ],
    cta: 'Our Story',
    ctaLink: '/story' // External Link
  },
  {
    id: 'services',
    tag: 'What We Do',
    heading: 'From Blueprint to Final Key Handover',
    body: 'Residential builds, commercial fit-outs, interior design, solar & smart-home integration — we handle every phase under one roof so nothing falls between the cracks.',
    images: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    ],
    reverse: true,
    cta: 'View Services',
    ctaLink: '/services' // External Link
  },
  {
    id: 'projects',
    tag: 'Our Work',
    heading: '50+ Projects Delivered. Zero Compromises.',
    body: 'From luxury duplexes in Lekki to high-spec commercial offices on the Island — our portfolio speaks for itself. Every detail is deliberate, every finish is intentional.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
    ],
    cta: 'See Portfolio',
    ctaLink: '/portfolio' // External Link
  },
  {
    id: 'contact',
    tag: 'Get In Touch',
    heading: 'Let\'s Build Something Remarkable Together',
    body: 'Ready to start your project? Book a free consultation and our team will walk you through a full scope, timeline, and cost estimate — no obligation.',
    images: [
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80',
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    ],
    reverse: true,
    cta: 'Book Consultation' // No internal link, defaults to WhatsApp
  },
]

const navLinks = ['About', 'Services', 'Projects', 'Contact']

/* ── Placeholder Component for External Pages ─── */
function ExternalPage({ title }) {
  useEffect(() => { window.scrollTo(0, 0) }, []);
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh', textAlign: 'center', paddingInline: '28px' }}>
      <h1 className="section-heading">{title}</h1>
      <p className="section-body" style={{ margin: '0 auto 30px auto' }}>This is a dedicated external page.</p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-block' }}>← Back to Home</Link>
    </div>
  )
}

/* ── Main Home Page Component ─────────────────── */
function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" alt="" />
          <div className="hero-veil" />
        </div>
        <div className="hero-content">
          <p className="hero-kicker">Lagos · Abuja · Port Harcourt</p>
          <h1 className="hero-title">Architecture<br /><em>Redefined.</em></h1>
          <p className="hero-sub">Premium construction &amp; design for those who refuse to settle.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Book Consultation</button>
            <button className="btn-ghost" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>View Our Work</button>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>

      {/* STATS BAND */}
      <div className="stats-band">
        {[['50+', 'Projects Completed'], ['98%', 'Client Satisfaction'], ['12', 'Years of Excellence'], ['₦2B+', 'Value Delivered']].map(([v, l]) => (
          <div className="stat-item" key={l}>
            <span className="stat-val">{v}</span>
            <span className="stat-lbl">{l}</span>
          </div>
        ))}
      </div>

      {/* SECTIONS */}
      {sections.map((s) => <Section key={s.id} {...s} />)}
    </>
  )
}

/* ── App Wrapper ──────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Force solid navbar on external pages, or when scrolled on home page
  const isSolid = location.pathname !== '/' || scrolled;

  // Custom scroll handler that works even if you are on an external page
  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="page">
      {/* NAV */}
      <header className={`nav ${isSolid ? 'nav-solid' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-mark">C</span>
            <span className="logo-text">CLUTCH</span>
          </Link>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(l => (
              <button key={l} className="nav-link" onClick={() => handleNavClick(l)}>{l}</button>
            ))}
            <a href="https://wa.me/2348000000000" className="nav-wa" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
              </svg>
              WhatsApp
            </a>
          </nav>

          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span className={menuOpen ? 'bar open' : 'bar'} />
            <span className={menuOpen ? 'bar open' : 'bar'} />
            <span className={menuOpen ? 'bar open' : 'bar'} />
          </button>
        </div>
      </header>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<ExternalPage title="Our Story" />} />
        <Route path="/services" element={<ExternalPage title="Services Detail" />} />
        <Route path="/portfolio" element={<ExternalPage title="Portfolio Showcase" />} />
      </Routes>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-mark">C</span>
            <span className="logo-text" style={{ color: 'rgba(255,255,255,0.85)' }}>CLUTCH</span>
          </Link>
          <p className="footer-copy">© {new Date().getFullYear()} Clutch Build Ltd. All rights reserved.</p>
          <div className="footer-links">
            {navLinks.map(l => (
              <button key={l} className="footer-link" onClick={() => handleNavClick(l)}>{l}</button>
            ))}
          </div>
        </div>
      </footer>

      {/* STICKY CTA */}
      <a href="https://wa.me/2348000000000" className="sticky-cta" target="_blank" rel="noopener noreferrer">
        Book a Free Consultation →
      </a>
    </div>
  )
}