import { useEffect } from 'react'
import './Story.css'

export default function StoryPage() {
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
          <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80" alt="Cove Associates HQ" />
          <div className="ep-hero-veil" />
        </div>
        <div className="ep-hero-content">
          <span className="ep-kicker">Est. 2012 · Lagos, Nigeria</span>
          <h1 className="ep-hero-title">We Build More Than<br /><em>Buildings.</em></h1>
          <p className="ep-hero-sub">Twelve years of turning ambitious visions into permanent landmarks across Nigeria.</p>
        </div>
      </div>

      {/* ORIGIN STORY */}
      <section className="ep-section ep-origin">
        <div className="ep-two-col">
          <div className="ep-text-col">
            <span className="ep-tag">Our Beginning</span>
            <h2 className="ep-heading">Started With One Belief: Great Design Should Be Accessible.</h2>
            <p className="ep-body">
              Cove Associates was founded in 2012 by Emeka Okafor and Sade Williams — two friends who met on a building site in Victoria Island and shared a single frustration: the Nigerian construction industry was letting its clients down.
            </p>
            <p className="ep-body">
              Projects ran over budget. Timelines slipped by months. Materials were substandard. And worst of all, homeowners were being left to manage the chaos themselves. Emeka and Sade believed there was a better way — one rooted in accountability, design excellence, and radical transparency.
            </p>
            <p className="ep-body">
              They started with a three-bedroom duplex in Lekki. Today, Cove Associates has delivered over 50 residential and commercial projects valued at more than ₦2 billion across Lagos, Abuja, and Port Harcourt.
            </p>
          </div>
          <div className="ep-img-col">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" alt="Our first project" className="ep-img" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="ep-section ep-values-section">
        <div className="ep-center">
          <span className="ep-tag">What We Stand For</span>
          <h2 className="ep-heading">Our Values Are Not on the Wall.<br />They're on the Site.</h2>
        </div>
        <div className="ep-values-grid">
          {[
            { icon: '◈', title: 'Precision', body: 'We measure twice, build once. From structural calculations to tile spacing — precision is non-negotiable on every Cove Associates site.' },
            { icon: '◇', title: 'Transparency', body: "You'll always know where your money is going and when your project milestones are due — no surprises, no hidden costs." },
            { icon: '◉', title: 'Ownership', body: "Your problem is our problem. We don't pass blame to subcontractors or suppliers. We own every outcome from day one to handover." },
            { icon: '◐', title: 'Excellence', body: "We don't chase volume. We chase quality. We'd rather deliver fewer, exceptional projects than many average ones." },
            { icon: '◑', title: 'Relationships', body: "Most of our clients return. Many refer their network. We build relationships the same way we build structures — with care and durability." },
            { icon: '◒', title: 'Innovation', body: 'From passive cooling design to solar integration and smart-home systems, we stay ahead of technology so your building stays future-proof.' },
          ].map(v => (
            <div className="ep-value-card" key={v.title}>
              <span className="ep-value-icon">{v.icon}</span>
              <h3 className="ep-value-title">{v.title}</h3>
              <p className="ep-value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="ep-section ep-team-section">
        <div className="ep-center" style={{ marginBottom: '56px' }}>
          <span className="ep-tag">The Founders</span>
          <h2 className="ep-heading">Built by People Who Care</h2>
        </div>
        <div className="ep-team-grid">
          {[
            {
              name: 'Emeka Okafor',
              role: 'Co-Founder & Chief Executive',
              bio: "With a B.Sc. in Civil Engineering from University of Lagos and an MBA from INSEAD, Emeka leads Cove Associates' operations and strategic direction. He's been on over 40 sites and still visits every active project weekly.",
              img: 'https://images.unsplash.com/photo-1578758803946-2c4f6738df87?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBidXNpbmVzcyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
              initials: 'EO',
            },
            {
              name: 'Sade Williams',
              role: 'Co-Founder & Creative Director',
              bio: "Trained at the Architectural Association in London, Sade leads all design direction at Cove Associates. Her eye for space, material, and detail is the invisible hand behind every beautiful Cove Associates project.",
              img: 'https://images.unsplash.com/photo-1563132337-f159f484226c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwYnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D',
              initials: 'SW',
            },
          ].map(p => (
            <div className="ep-team-card" key={p.name}>
              <div className="ep-team-img-wrap">
                <img src={p.img} alt={p.name} className="ep-team-img" />
              </div>
              <div className="ep-team-info">
                <h3 className="ep-team-name">{p.name}</h3>
                <span className="ep-team-role">{p.role}</span>
                <p className="ep-team-bio">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MILESTONES */}
      <section className="ep-section ep-timeline-section">
        <div className="ep-center" style={{ marginBottom: '64px' }}>
          <span className="ep-tag">Our Journey</span>
          <h2 className="ep-heading">Twelve Years of Growth</h2>
        </div>
        <div className="ep-timeline">
          {[
            { year: '2012', event: 'Cove Associates founded by Emeka & Sade. First project: a 3-bedroom duplex in Lekki.' },
            { year: '2014', event: 'Expanded to commercial fit-outs. First major corporate client: a fintech firm on Victoria Island.' },
            { year: '2016', event: 'Opened Abuja office. Won our first government-commissioned residential complex.' },
            { year: '2018', event: 'Launched interior design and smart-home integration arm. Team grows to 45.' },
            { year: '2020', event: 'Navigated COVID with zero project cancellations. Delivered ₦500M+ in projects that year.' },
            { year: '2022', event: 'Crossed 50 completed projects. Launched the Cove Solar & Energy division.' },
            { year: '2024', event: "Expanded to Port Harcourt. Named in BusinessDay's Top 10 Construction Firms in Nigeria." },
          ].map((m) => (
            <div className="ep-timeline-row" key={m.year}>
              <div className="ep-timeline-year">{m.year}</div>
              <div className="ep-timeline-dot" />
              <div className="ep-timeline-event">{m.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ep-cta-section">
        <h2 className="ep-cta-heading">Ready to Be Part of Our Next Chapter?</h2>
        <p className="ep-cta-sub">Let's discuss your project — no pressure, no obligation.</p>
        <a href="https://wa.me/2348000000000" className="ep-cta-btn" target="_blank" rel="noopener noreferrer">
          Start the Conversation →
        </a>
      </section>

      <footer className="ep-footer">
        <span>© {new Date().getFullYear()} Cove Associates Ltd.</span>
        <a href="/">← Back to Home</a>
      </footer>
    </div>
  )
}
