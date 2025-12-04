// components/KodaSceSectionJa.tsx

export default function KodaSceSectionJa() {
  const products = [
    {
      key: "medcomm",
      name: "KODA MedComm",
      description:
        "医療面接、説明練習、フィードバック支援など、医療・介護教育の現場で活用できるコミュニケーション支援ツールです。"
    },
    {
      key: "docintel",
      name: "KODA DocIntel",
      description:
        "契約書、マニュアル、報告書、社内手順書など、文書量が多い職場向けのドキュメント整理・理解支援ツールです。"
    },
    {
      key: "assist",
      name: "KODA Assist",
      description:
        "部署やチームの業務に合わせて調整できる、社内専用のAIアシスタント。外部に情報を出さない安全な運用が可能です。"
    },
    {
      key: "cultural",
      name: "KODA Cultural",
      description:
        "外国人材と日本人社員の働き方の「相性」を分かりやすく整理し、職場定着・コミュニケーション支援に役立てるツールです。"
    },
    {
      key: "training",
      name: "KODA Training",
      description:
        "企業研修や社内学習を支援するためのツール。要点整理、理解度チェック、簡単なシナリオ演習などに活用できます。"
    },
    {
      key: "industry",
      name: "KODA Industry",
      description:
        "製造・インフラなどの現場で、手順の標準化や知識の引き継ぎを支援するための落ち着いたAIツールです。"
    }
  ];

  return (
    <section className="w-full bg-neutral-50 py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:px-6">

        {/* 左カラム：SCE説明 */}
        <div className="w-full md:w-5/12">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 md:text-sm">
            KODA SCE エンジン
          </p>
          <h2 className="mt-2 text-xl font-semibold leading-relaxed text-neutral-900 md:text-2xl">
            日本の職場文化に合わせた
            セマンティック・コンピューティング基盤
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
            KODA SCE エンジンは、Solunaiが開発したAI基盤です。
            日本語の表現、職場の伝え方、企業文化に合わせて設計されており、
            現場の業務を静かに支える「裏方」の役割を目指しています。
          </p>

          <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-base">
            KODAは次の3つを大切にしています。
          </p>

          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-800 md:text-base">
            <li>
              <span className="font-semibold">文脈の理解力</span>
              — 業務指示、手順、ビジネス表現の意図を落ち着いて読み取ります。
            </li>
            <li>
              <span className="font-semibold">文化への配慮</span>
              — 敬語、丁寧さ、社内コミュニケーションの温度感に合わせた応答を行います。
            </li>
            <li>
              <span className="font-semibold">安定した運用</span>
              — 正確さや再現性が求められる場面でも使えるよう、落ち着いた挙動を重視しています。
            </li>
          </ul>

          <p className="mt-4 text-sm leading-relaxed text-neutral-700 md:text-base">
            すべてのKODA製品は、このSCEエンジンを土台に開発されています。
            そのため、用途が異なる製品間でも共通した使い心地とガバナンスが保たれます。
          </p>

          {/* コア機能 */}
          <div className="mt-6 grid gap-3 text-sm text-neutral-800">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 md:text-base">
                セマンティック処理
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-700 md:text-sm">
                複雑な操作を必要とせず、日常業務で使われる言い回しや意図を丁寧に理解します。
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-900 md:text-base">
                文化的な配慮
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-700 md:text-sm">
                日本のビジネス慣習に配慮した応答基準で、安心して社内利用が可能です。
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-900 md:text-base">
                マルチフォーマット対応
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-700 md:text-sm">
                文章や社内文書、業務データなどに対応し、既存のワークフローでの活用を想定しています。
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-900 md:text-base">
                エンタープライズセキュリティ
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-700 md:text-sm">
                日本国内の環境で運用し、企業のセキュリティ基準に沿ったデータ取り扱いを行います。
              </p>
            </div>
          </div>
        </div>

        {/* 右カラム：KODA製品ライン */}
        <div className="w-full md:w-7/12">
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <h3 className="text-base font-semibold text-neutral-900 md:text-lg">
              KODA 製品ライン
            </h3>
            <p className="text-xs text-neutral-600 md:text-sm">
              すべての製品がKODA SCE エンジンを基盤に設計されています。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {products.map((p) => (
              <div
                key={p.key}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm md:p-5"
              >
                <h4 className="text-sm font-semibold text-neutral-900 md:text-base">
                  {p.name}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-neutral-700 md:text-sm">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-relaxed text-neutral-600 md:text-sm">
            いずれの製品も段階的な導入を前提としており、企業の体制やご要件に合わせて
            無理なくご活用いただけます。
          </p>
        </div>
      </div>
    </section>
  );
}
