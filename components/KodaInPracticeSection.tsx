// components/KodaInPracticeSection.tsx

export default function KodaInPracticeSection() {
  const scenarios = [
    {
      key: "reports",
      label: "Daily reports and handovers",
      title: "Turn daily reports into useful summaries",
      body: [
        "Many teams create daily reports, but managers do not have time to read everything.",
        "KODA can organise report text by theme, highlight risks, and prepare a short summary that management can actually use."
      ],
      result: "Less time reading, more time deciding."
    },
    {
      key: "handover",
      label: "Veteran know-how and handover",
      title: "Capture knowledge before someone leaves",
      body: [
        "When an experienced staff member moves or resigns, much of their know-how exists only in their head.",
        "KODA helps structure procedures, checklists, and tips into a reusable format so that the next person can learn faster."
      ],
      result: "Handover becomes a process, not a crisis."
    },
    {
      key: "training",
      label: "Training and on-the-job learning",
      title: "Support new staff while they learn",
      body: [
        "New employees often hesitate to ask the same question many times.",
        "KODA can provide a quiet first point of reference for manuals, FAQs, and basic procedures, while supervisors focus on important decisions."
      ],
      result: "Supervisors spend less time on repeat questions."
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 md:text-sm">
            KODA IN PRACTICE
          </p>
          <h2 className="mt-2 text-xl font-semibold leading-relaxed text-neutral-900 md:text-2xl">
            How KODA actually shows up in your workplace
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
            KODA is not introduced as a large IT project. It usually starts in one small,
            concrete area of work, and grows only as people become comfortable with it.
            Here are three common starting points for small and mid-sized companies.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {scenarios.map((s) => (
            <div
              key={s.key}
              className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm md:p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700 md:text-xs">
                {s.label}
              </p>
              <h3 className="mt-2 text-sm font-semibold leading-relaxed text-neutral-900 md:text-base">
                {s.title}
              </h3>
              <div className="mt-2 space-y-1.5 text-xs leading-relaxed text-neutral-700 md:text-sm">
                {s.body.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <p className="mt-3 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-neutral-800 md:text-xs">
                Result: {s.result}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-900 md:text-base">
              Start with one area, then expand step by step.
            </p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-700 md:text-sm">
              Most clients begin with daily reports, handover, or basic training support.
              As trust builds, KODA is gradually connected to more documents and workflows.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-sky-700 bg-sky-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-800 md:px-5 md:py-2.5 md:text-sm"
            >
              Talk about where to start
            </a>
            <a
              href="/en/koda-products"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-800 hover:border-neutral-400 hover:bg-neutral-50 md:px-5 md:py-2.5 md:text-sm"
            >
              See all KODA products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
