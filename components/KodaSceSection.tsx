// components/KodaSceSection.tsx

export default function KodaSceSection() {
  const coreCapabilities = [
    {
      icon: "semantic",
      title: "Semantic Processing",
      description: "Understands meaning, intent, and context in Japanese business communication without complex prompts."
    },
    {
      icon: "cultural",
      title: "Cultural Intelligence",
      description: "Responds with Japanese business etiquette, keigo awareness, and organisational sensitivity."
    },
    {
      icon: "security",
      title: "Enterprise Security",
      description: "Japan-based infrastructure with encryption and governance compatible with enterprise IT policies."
    }
  ];

  const products = [
    {
      key: "medcomm",
      name: "KODA MedComm",
      tagline: "Medical Communication",
      description: "Interview practice, explanation support, and structured feedback for healthcare learners."
    },
    {
      key: "docintel",
      name: "KODA DocIntel",
      tagline: "Document Intelligence",
      description: "Understanding contracts, manuals, and reports for high documentation workloads."
    },
    {
      key: "assist",
      name: "KODA Assist",
      tagline: "Custom Assistants",
      description: "Department-specific AI assistants without exposing corporate data externally."
    },
    {
      key: "cultural",
      name: "KODA Cultural",
      tagline: "Cross-Cultural Alignment",
      description: "Tools for supporting foreign and Japanese staff through workplace fit analysis."
    },
    {
      key: "training",
      name: "KODA Training",
      tagline: "Learning Support",
      description: "Knowledge checks, summaries, and scenario-based exercises for training programmes."
    },
    {
      key: "industry",
      name: "KODA Industry",
      tagline: "Industrial Operations",
      description: "Structured knowledge capture and procedural assistance for daily operations."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5">
            <div className="h-2 w-2 rounded-full bg-sky-600"></div>
            <span className="text-xs font-semibold tracking-wide text-sky-700">
              KODA SCE ENGINE
            </span>
          </div>
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl" style={{ lineHeight: '1.4' }}>
            Semantic Computing for Japanese Workplaces
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600 md:text-lg" style={{ lineHeight: '1.7' }}>
            The KODA SCE Engine is Solunai&apos;s core platform—calm, predictable AI designed
            specifically for Japanese communication styles and enterprise requirements.
          </p>
        </div>

        {/* Core Capabilities - 3 Column Feature Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-3 md:gap-10">
          {coreCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-md md:p-10"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                {cap.icon === "semantic" && (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
                {cap.icon === "cultural" && (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )}
                {cap.icon === "security" && (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
              </div>
              <h3 className="mb-5 text-xl font-semibold text-neutral-900" style={{ lineHeight: '1.6' }}>
                {cap.title}
              </h3>
              <p className="text-base text-neutral-600" style={{ lineHeight: '1.5' }}>
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* Product Line Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-12 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 md:text-2xl" style={{ lineHeight: '1.4' }}>
              KODA Product Line
            </h3>
            <p className="mt-1 text-sm text-neutral-600 md:text-base">
              Six specialised products built on the same trusted engine.
            </p>
          </div>
          <a
            href="/en/koda-products"
            className="inline-flex items-center gap-2 rounded-full border border-sky-600 bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
          >
            View All Products
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Product Cards - 3x2 Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.key}
              className="group relative flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-sky-200 hover:shadow-lg md:p-6"
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-sky-600">
                    {product.tagline}
                  </p>
                  <h4 className="mt-1 text-base font-semibold text-neutral-900 md:text-lg" style={{ lineHeight: '1.6' }}>
                    {product.name}
                  </h4>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 transition-colors group-hover:bg-sky-50 group-hover:text-sky-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-neutral-600" style={{ lineHeight: '1.5' }}>
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 rounded-xl bg-neutral-50 p-6 text-center md:p-8">
          <p className="text-sm text-neutral-700 md:text-base" style={{ lineHeight: '1.5' }}>
            All KODA products share the same governance standards, ensuring consistent behaviour,
            traceability, and enterprise-grade data handling across your organisation.
          </p>
        </div>

      </div>
    </section>
  );
}
