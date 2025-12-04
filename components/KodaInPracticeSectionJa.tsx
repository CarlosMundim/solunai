// components/KodaInPracticeSectionJa.tsx

export default function KodaInPracticeSectionJa() {
  const scenarios = [
    {
      key: "reports",
      label: "日報・報告書",
      title: "日報を「読むだけで終わらない」情報に変える",
      body: [
        "多くの現場で日報は作成されていますが、忙しくてすべてに目を通せないことも少なくありません。",
        "KODAは日報の文章をテーマごとに整理し、リスクや気づきを拾い、管理職が確認しやすい要約を作成することができます。"
      ],
      result: "読む時間を減らし、判断する時間を増やします。"
    },
    {
      key: "handover",
      label: "引き継ぎ・属人化",
      title: "人が動く前に、業務の「知恵」を残す",
      body: [
        "ベテラン社員が異動・退職する際、その人にしか分からない業務のコツや注意点が残らないままになることがあります。",
        "KODAは手順やチェックポイント、注意事項などを整理し、次の担当者が学びやすい形にまとめることを支援します。"
      ],
      result: "引き継ぎを「一度きりのイベント」ではなく、仕組みに近づけます。"
    },
    {
      key: "training",
      label: "教育・OJT",
      title: "新人が質問しやすい「もう一つの窓口」をつくる",
      body: [
        "新入社員は、同じ質問を何度もすることに気が引けてしまい、分からないまま進んでしまうことがあります。",
        "KODAはマニュアルやよくある質問をベースに、まず相談できる窓口として機能し、上司や先輩は判断が必要な場面に集中できるようにします。"
      ],
      result: "現場の指導負担を減らしつつ、学ぶ側の不安を軽くします。"
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-700 md:text-sm">
            KODA の使い方イメージ
          </p>
          <h2 className="mt-2 text-xl font-semibold leading-relaxed text-neutral-900 md:text-2xl">
            KODAが実際に「どこで」役に立つのか
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
            KODAは、大がかりなシステム導入として一度に全社展開するのではなく、
            まずは一つの業務領域から小さく始めることを基本としています。
            少しずつ慣れていただきながら、必要に応じて利用範囲を広げていく考え方です。
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-base">
            以下は、中小企業・現場部門で導入が始まりやすい、代表的な3つの例です。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {scenarios.map((s) => (
            <div
              key={s.key}
              className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm md:p-5"
            >
              <p className="text-[11px] font-semibold tracking-[0.16em] text-sky-700 md:text-xs">
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
                ポイント：{s.result}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-900 md:text-base">
              まずは一つの業務から、無理なく始めることができます。
            </p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-700 md:text-sm">
              多くのお客様は、日報・引き継ぎ・教育支援のいずれかから導入を開始し、
              現場での手応えを確認しながら、徐々に対象業務を広げていらっしゃいます。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-sky-700 bg-sky-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-800 md:px-5 md:py-2.5 md:text-sm"
            >
              導入のご相談をする
            </a>
            <a
              href="/koda"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-800 hover:border-neutral-400 hover:bg-neutral-50 md:px-5 md:py-2.5 md:text-sm"
            >
              KODA製品を詳しく見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
