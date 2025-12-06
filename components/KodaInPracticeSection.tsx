// components/KodaInPracticeSection.tsx
import './KodaInPractice.css';

export default function KodaInPracticeSection() {
  const scenarios = [
    {
      key: "reports",
      badge: "Daily reports and handovers",
      title: "Turn daily reports into useful summaries",
      body: [
        "Many teams create daily reports, but managers do not have time to read everything.",
        "KODA can organise report text by theme, highlight risks, and prepare a short summary that management can actually use."
      ],
      result: "Less time reading, more time deciding."
    },
    {
      key: "handover",
      badge: "Veteran know-how and handover",
      title: "Capture knowledge before someone leaves",
      body: [
        "When an experienced staff member moves or resigns, much of their know-how exists only in their head.",
        "KODA helps structure procedures, checklists, and tips into a reusable format so that the next person can learn faster."
      ],
      result: "Handover becomes a process, not a crisis."
    },
    {
      key: "training",
      badge: "Training and on-the-job learning",
      title: "Support new staff while they learn",
      body: [
        "New employees often hesitate to ask the same question many times.",
        "KODA can provide a quiet first point of reference for manuals, FAQs, and basic procedures, while supervisors focus on important decisions."
      ],
      result: "Supervisors spend less time on repeat questions."
    }
  ];

  return (
    <section className="koda-practice-section">
      <div className="koda-practice-container">

        {/* Section Header */}
        <div className="koda-practice-header">
          <span className="koda-practice-badge">KODA IN PRACTICE</span>
          <h2 className="koda-practice-title">
            How KODA actually shows up in your workplace
          </h2>
          <p className="koda-practice-subtitle">
            KODA is not introduced as a large IT project. It usually starts in one small,
            concrete area of work, and grows only as people become comfortable with it.
          </p>
        </div>

        {/* Three Starting Points Label */}
        <div className="koda-practice-divider">
          <div className="divider-line"></div>
          <span className="divider-text">Three common starting points</span>
          <div className="divider-line"></div>
        </div>

        {/* Scenario Cards - Expanded Version */}
        <div className="koda-practice-grid">
          {scenarios.map((s, index) => (
            <div key={s.key} className="koda-practice-card koda-practice-card-expanded">
              <div className="card-content">
                {/* Step number */}
                <div className="card-step">{String(index + 1).padStart(2, '0')}</div>

                {/* Badge */}
                <span className="card-badge">{s.badge}</span>

                {/* Title */}
                <h3 className="card-title">{s.title}</h3>

                {/* Body paragraphs */}
                <div className="card-body">
                  {s.body.map((paragraph, idx) => (
                    <p key={idx} className="card-body-text">{paragraph}</p>
                  ))}
                </div>

                {/* Result highlight */}
                <p className="card-result">{s.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Line Visual */}
        <div className="koda-practice-flow">
          <div className="flow-step flow-step-1">
            <span>1</span>
          </div>
          <div className="flow-line flow-line-1"></div>
          <div className="flow-step flow-step-2">
            <span>2</span>
          </div>
          <div className="flow-line flow-line-2"></div>
          <div className="flow-step flow-step-3">
            <span>3</span>
          </div>
          <div className="flow-line flow-line-3"></div>
          <div className="flow-step flow-step-arrow">
            <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="koda-practice-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h3 className="cta-title">Start with one area, then expand step by step.</h3>
              <p className="cta-description">
                Most clients begin with daily reports, handover, or basic training support.
                As trust builds, KODA is gradually connected to more documents and workflows.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="#contact" className="cta-primary">
                Talk about where to start
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/en/koda-products" className="cta-secondary">
                See all KODA products
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
