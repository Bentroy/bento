import { useEffect, useState } from 'react'
import './Portfolio.css'

const projects = [
  {
    id: 1,
    category: 'residential',
    title: 'The Meridian Residences',
    location: 'Lekki Phase 1, Lagos',
    year: '2023',
    value: '₦380M',
    tag: 'Residential',
    desc: '4-unit luxury apartment block with rooftop terraces, smart-home automation, and a full solar grid.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    size: 'large',
  },
  {
    id: 2,
    category: 'commercial',
    title: 'Meridian Capital HQ',
    location: 'Victoria Island, Lagos',
    year: '2022',
    value: '₦210M',
    tag: 'Commercial Fit-Out',
    desc: 'Full office fit-out for a leading investment firm across 3 floors and 4,200 sqm of workspace.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
    size: 'medium',
  },
  {
    id: 3,
    category: 'interior',
    title: 'The Osei Penthouse',
    location: 'Ikoyi, Lagos',
    year: '2023',
    value: '₦95M',
    tag: 'Interior Design',
    desc: 'Bespoke interior design and custom furniture for a 6-bedroom duplex. Full art direction included.',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
    size: 'medium',
  },
  {
    id: 4,
    category: 'residential',
    title: 'Adeyemi Family Compound',
    location: 'GRA Ikeja, Lagos',
    year: '2021',
    value: '₦520M',
    tag: 'Residential',
    desc: 'A multi-generational 6-bedroom estate featuring a landscaped courtyard, pool, and smart security.',
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80',
    size: 'large',
  },
  {
    id: 5,
    category: 'energy',
    title: 'SolarCore Office Complex',
    location: 'Garki, Abuja',
    year: '2022',
    value: '₦72M',
    tag: 'Solar & Energy',
    desc: '480kWp solar PV system with 3-day battery backup for a 10-storey commercial complex.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    size: 'medium',
  },
  {
    id: 6,
    category: 'commercial',
    title: 'Bloom Hospitality Group',
    location: 'Wuse II, Abuja',
    year: '2023',
    value: '₦165M',
    tag: 'Commercial Fit-Out',
    desc: 'Three restaurant and bar venues across one building — each with a distinct brand identity and kitchen.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    size: 'medium',
  },
  {
    id: 7,
    category: 'residential',
    title: 'Nwosu Residence',
    location: 'Old GRA, Port Harcourt',
    year: '2024',
    value: '₦290M',
    tag: 'Residential',
    desc: 'Contemporary 5-bedroom home with passive cooling design, a home cinema, and a gym.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
    size: 'medium',
  },
  {
    id: 8,
    category: 'interior',
    title: 'Kalu Executive Suite',
    location: 'Maitama, Abuja',
    year: '2021',
    value: '₦58M',
    tag: 'Interior Design',
    desc: 'High-spec interior fit-out of a 14th-floor executive suite. Custom joinery, lighting design, and Italian stone finishes.',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    size: 'medium',
  },
  {
    id: 9,
    category: 'residential',
    title: 'Eko Heights — Block A',
    location: 'Lekki, Lagos',
    year: '2020',
    value: '₦440M',
    tag: 'Residential',
    desc: "Our largest residential project to date — a 12-unit apartment block that set a new benchmark for Lagos' mid-market luxury housing.",
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
    size: 'large',
  },
]

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'residential', label: 'Residential' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'interior', label: 'Interior Design' },
  { key: 'energy', label: 'Solar & Energy' },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('all')
  const [visible, setVisible] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])
 useEffect(() => {
    // Queue the "hide" state slightly so it's not synchronous
    const tHide = setTimeout(() => setVisible(false), 0)
    
    // Queue the "show" state 60ms later to trigger the animation
    const tShow = setTimeout(() => setVisible(true), 60)
    
    return () => {
      clearTimeout(tHide)
      clearTimeout(tShow)
    }
  }, [active])

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="pf-root">

      {/* NAV */}
      <header className="pf-nav">
        <div className="pf-nav-inner">
          <a href="/" className="pf-logo">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
              <rect width="36" height="36" rx="4" fill="rgba(200,169,110,0.15)" />
              <path d="M25 11.5C23.2 9.9 20.7 9 18 9C12.5 9 8 13.5 8 19C8 24.5 12.5 29 18 29C20.7 29 23.2 28.1 25 26.5" stroke="#c8a96e" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M15 19H27" stroke="#c8a96e" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M23 15.5L27 19L23 22.5" stroke="#c8a96e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="pf-logo-text">COVE ASSOCIATES</span>
          </a>
          <a href="https://wa.me/2348000000000" className="pf-nav-cta" target="_blank" rel="noopener noreferrer">
            Talk to Us →
          </a>
        </div>
      </header>

      {/* HERO */}
      <div className="pf-hero">
        <div className="pf-hero-bg">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" alt="Cove Associates Portfolio" />
          <div className="pf-hero-veil" />
        </div>
        <div className="pf-hero-collage">
          <div className="pf-collage-img pf-collage-1">
            <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80" alt="" />
          </div>
          <div className="pf-collage-img pf-collage-2">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" alt="" />
          </div>
          <div className="pf-collage-img pf-collage-3">
            <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80" alt="" />
          </div>
        </div>
        <div className="pf-hero-content">
          <span className="pf-kicker">50+ Completed Projects · Lagos · Abuja · Port Harcourt</span>
          <h1 className="pf-hero-title">Our Work<br /><em>Speaks.</em></h1>
          <p className="pf-hero-sub">Every project tells a story of precision, ambition, and people who refused to settle.</p>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="pf-stats-strip">
        {[['50+', 'Projects Completed'], ['₦2B+', 'Value Delivered'], ['3', 'Cities'], ['12', 'Years Experience']].map(([v, l]) => (
          <div className="pf-stat" key={l}>
            <span className="pf-stat-val">{v}</span>
            <span className="pf-stat-lbl">{l}</span>
          </div>
        ))}
      </div>

      {/* FILTERS + GRID */}
      <section className="pf-section">
        <div className="pf-filter-header">
          <div>
            <span className="pf-tag">Our Portfolio</span>
            <h2 className="pf-heading">Projects We're Proud Of</h2>
          </div>
          <div className="pf-filters">
            {filters.map(f => (
              <button
                key={f.key}
                className={`pf-filter-btn ${active === f.key ? 'pf-filter-btn--active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`pf-grid ${visible ? 'pf-grid--visible' : ''}`}>
          {filtered.map((p, i) => (
            <div
              className={`pf-card ${p.size === 'large' ? 'pf-card--large' : ''}`}
              key={p.id}
              style={{ '--i': i }}
            >
              <div className="pf-card-img-wrap">
                <img src={p.img} alt={p.title} className="pf-card-img" />
                <div className="pf-card-overlay">
                  <div className="pf-card-overlay-content">
                    <p className="pf-card-desc">{p.desc}</p>
                    <div className="pf-card-meta-row">
                      <span className="pf-card-value">{p.value}</span>
                      <span className="pf-card-year">{p.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pf-card-info">
                <span className="pf-card-tag">{p.tag}</span>
                <h3 className="pf-card-title">{p.title}</h3>
                <p className="pf-card-location">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ display:'inline', marginRight:'5px', verticalAlign:'middle' }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                  {p.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="pf-empty">No projects in this category yet — check back soon.</div>
        )}
      </section>

      {/* FEATURED PROJECT */}
      <section className="pf-featured-section">
        <div className="pf-featured-inner">
          <div className="pf-featured-text">
            <span className="pf-tag">Featured Project</span>
            <h2 className="pf-heading">Eko Heights — Block A</h2>
            <p className="pf-body">
              Our largest and most complex residential undertaking to date. A 12-unit apartment block in Lekki built over 22 months with zero cost overruns and delivered two weeks ahead of schedule.
            </p>
            <p className="pf-body">
              Every apartment features smart-home controls, Bosch kitchen appliances, Italian marble finishes, and dedicated solar backup. Fully sold before completion.
            </p>
            <div className="pf-featured-stats">
              {[['12', 'Units'], ['22', 'Months'], ['₦440M', 'Value'], ['100%', 'Sold']].map(([v, l]) => (
                <div className="pf-feat-stat" key={l}>
                  <span className="pf-feat-stat-val">{v}</span>
                  <span className="pf-feat-stat-lbl">{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pf-featured-img-col">
            <div className="pf-featured-img-stack">
              <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80" alt="Eko Heights" className="pf-feat-img pf-feat-img--main" />
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Eko Heights interior" className="pf-feat-img pf-feat-img--secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pf-cta-section">
        <h2 className="pf-cta-heading">Your Project Could Be Next.</h2>
        <p className="pf-cta-sub">Free consultation. Detailed proposal. No obligation.</p>
        <a href="https://wa.me/2348000000000" className="pf-cta-btn" target="_blank" rel="noopener noreferrer">
          Start the Conversation →
        </a>
      </section>

      <footer className="pf-footer">
        <span>© {new Date().getFullYear()} Cove Associates Ltd.</span>
        <a href="/">← Back to Home</a>
      </footer>

    </div>
  )
}
