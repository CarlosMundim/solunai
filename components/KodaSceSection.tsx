// components/KodaSceSection.tsx

export default function KodaSceSection() {
  const products = [
    {
      key: "medcomm",
      name: "KODA MedComm",
      description:
        "Tools to support medical communication training, including interview practice, explanation support, and structured feedback for healthcare learners."
    },
    {
      key: "docintel",
      name: "KODA DocIntel",
      description:
        "Document understanding for contracts, manuals, reports, and internal procedures—designed for organisations with high documentation workloads."
    },
    {
      key: "assist",
      name: "KODA Assist",
      description:
        "Customisable assistants built for specific departments or teams, enabling safe internal use of AI without exposing corporate data externally."
    },
    {
      key: "cultural",
      name: "KODA Cultural",
      description:
        "Cross-cultural alignment tools that help organisations support foreign and Japanese staff through clearer expectations and workplace fit analysis."
    },
    {
      key: "training",
      name: "KODA Training",
      description:
        "Learning-support modules for corporate training programmes, including knowledge checks, summaries, and simple scenario-based exercises."
    },
    {
      key: "industry",
      name: "KODA Industry",
      description:
        "AI support for industrial operations, enabling structured knowledge capture, procedural assistance, and consistency in daily tasks."
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:px-6">
        {/* Left column – engine explanation */}
        <div className="w-full md:w-5/12">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 md:text-sm">
            KODA SCE ENGINE
          </p>
          <h2 className="mt-2 text-xl font-semibold leading-relaxed text-slate-900 md:text-2xl">
            Semantic Computing for Japanese Workplaces
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
            The KODA SCE Engine is Solunai&apos;s core platform technology. It provides calm,
            predictable AI support designed specifically for Japanese communication styles,
            workplace expectations, and enterprise requirements.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
            Rather than aiming for complexity, KODA focuses on three principles:
          </p>

          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-800 md:text-base">
            <li>
              <span className="font-semibold">Contextual clarity</span>{" "}
              – understands workplace instructions, procedural language, and common business
              expressions.
            </li>
            <li>
              <span className="font-semibold">Cultural alignment</span>{" "}
              – responds in a manner consistent with Japanese professional etiquette and
              communication norms.
            </li>
            <li>
              <span className="font-semibold">Operational stability</span>{" "}
              – designed for controlled enterprise environments where accuracy, traceability,
              and data handling are essential.
            </li>
          </ul>

          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            All KODA products are built on this engine, ensuring consistent behaviour and
            governance across use cases.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-slate-800">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Semantic processing
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-700 md:text-sm">
                Identifies meaning, intent, and context across routine business scenarios
                without relying on complicated prompts.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Cultural intelligence
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-700 md:text-sm">
                Provides responses aligned with Japanese business culture, including respect
                language, interpersonal formality, and organisational expectations.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Multi-format input
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-700 md:text-sm">
                Supports text, structured documents, and customer-provided datasets within
                approved enterprise workflows.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Enterprise security
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-700 md:text-sm">
                Operates within Japan-based infrastructure and follows strict encryption and
                governance standards compatible with enterprise IT policies.
              </p>
            </div>
          </div>
        </div>

        {/* Right column – product line */}
        <div className="w-full md:w-7/12">
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              KODA Product Line
            </h3>
            <p className="text-xs text-slate-600 md:text-sm">
              Built on the KODA SCE Engine for consistent behaviour and governance.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {products.map((p) => (
              <div
                key={p.key}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5"
              >
                <h4 className="text-sm font-semibold text-slate-900 md:text-base">
                  {p.name}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 md:text-sm">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-slate-600 md:text-sm">
            Each KODA solution is introduced and governed through standard enterprise
            processes, allowing organisations to adopt AI support gradually, with clear
            boundaries and oversight.
          </p>
        </div>
      </div>
    </section>
  );
}
