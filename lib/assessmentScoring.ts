// SOLUNAI JFC (Japanese Fit Coefficient) Assessment Scoring System
// Based on Situational Judgment Test (SJT) methodology
// 14 scenarios measuring 5 cultural dimensions

export interface ScenarioOption {
  id: string;
  text: string;
  textJA: string;
  scores: DimensionScores;
}

export interface Scenario {
  id: string;
  title: string;
  titleJA: string;
  context: string;
  contextJA: string;
  options: ScenarioOption[];
  // Scenarios that check consistency with this one
  consistencyPairs?: string[];
}

export interface DimensionScores {
  WA: number;      // Harmony & consensus
  LOYALTY: number; // Long-term commitment
  COMM: number;    // Communication style
  TEAM: number;    // Team integration
  HIER: number;    // Hierarchy respect
}

export interface AssessmentResult {
  dimensions: DimensionScores;
  normalizedScores: DimensionScores;
  jfc: number;
  consistencyIndex: number;
  riskFlags: RiskFlag[];
  strengths: string[];
  developmentAreas: string[];
  managementStyle: string;
  culturalStressPoints: string[];
}

export interface RiskFlag {
  level: 'critical' | 'moderate' | 'low';
  dimension: string;
  message: string;
  messageJA: string;
}

// Complete 14 scenarios with Chachie's scoring matrix
export const scenarios: Scenario[] = [
  // Scenario 1: The Quiet Deadline
  {
    id: 'S1',
    title: 'The Quiet Deadline',
    titleJA: '静かな締め切り',
    context: 'Yamamoto-san, a senior colleague (senpai), assigns you a task due Friday. By Wednesday, you realize you\'ll miss the deadline. Yamamoto-san hasn\'t checked in.',
    contextJA: '山本さん（先輩）が金曜日締め切りの仕事を割り当てました。水曜日になって、締め切りに間に合わないことに気づきます。山本さんからの確認はありません。',
    options: [
      {
        id: 'S1A',
        text: 'Wait until Thursday evening and explain then, hoping to minimize disruption',
        textJA: '木曜日の夕方まで待ち、混乱を最小限にするよう説明する',
        scores: { WA: -1, LOYALTY: 0, COMM: -2, TEAM: -1, HIER: 0 }
      },
      {
        id: 'S1B',
        text: 'Immediately tell Yamamoto-san you may be late and ask for guidance',
        textJA: 'すぐに山本さんに遅れる可能性を伝え、指導を求める',
        scores: { WA: +2, LOYALTY: +1, COMM: +2, TEAM: +1, HIER: +2 }
      },
      {
        id: 'S1C',
        text: 'Send a brief email updating progress but don\'t mention the delay',
        textJA: '進捗を簡潔にメールで報告するが、遅延には触れない',
        scores: { WA: 0, LOYALTY: 0, COMM: -1, TEAM: 0, HIER: -1 }
      },
      {
        id: 'S1D',
        text: 'Work overtime to finish on time without telling anyone',
        textJA: '誰にも言わず残業して時間通りに完了させる',
        scores: { WA: 0, LOYALTY: +1, COMM: -1, TEAM: -1, HIER: 0 }
      }
    ],
    consistencyPairs: ['S14']
  },

  // Scenario 2: The Unspoken Concern
  {
    id: 'S2',
    title: 'The Unspoken Concern',
    titleJA: '語られない懸念',
    context: 'During a team meeting, Manager Tanaka presents a project plan. You notice a potential flaw that could cause delays. No one else speaks up.',
    contextJA: 'チームミーティング中、田中マネージャーがプロジェクト計画を発表します。遅延を引き起こす可能性のある欠陥に気づきますが、誰も発言しません。',
    options: [
      {
        id: 'S2A',
        text: 'Raise your concern publicly during the meeting',
        textJA: '会議中に公に懸念を提起する',
        scores: { WA: -2, LOYALTY: 0, COMM: +1, TEAM: -1, HIER: -2 }
      },
      {
        id: 'S2B',
        text: 'Stay silent during the meeting but speak with Tanaka-san privately afterward',
        textJA: '会議中は黙っていて、後で田中さんと個別に話す',
        scores: { WA: +2, LOYALTY: +1, COMM: +2, TEAM: +1, HIER: +2 }
      },
      {
        id: 'S2C',
        text: 'Mention the concern to a close colleague after the meeting',
        textJA: '会議後に親しい同僚に懸念を伝える',
        scores: { WA: 0, LOYALTY: 0, COMM: 0, TEAM: 0, HIER: 0 }
      },
      {
        id: 'S2D',
        text: 'Assume Tanaka-san has considered everything and say nothing',
        textJA: '田中さんがすべて考慮済みと仮定して何も言わない',
        scores: { WA: +1, LOYALTY: -1, COMM: -1, TEAM: -1, HIER: +1 }
      }
    ],
    consistencyPairs: ['S10']
  },

  // Scenario 3: The Offsite Invitation
  {
    id: 'S3',
    title: 'The Offsite Invitation',
    titleJA: '飲み会の誘い',
    context: 'After a long week, your team plans to go for drinks. You\'re exhausted and have personal plans, but the team lead Suzuki-san insists everyone should join.',
    contextJA: '長い一週間の後、チームで飲みに行く計画があります。疲れていて個人的な予定もありますが、チームリーダーの鈴木さんが全員参加を強調しています。',
    options: [
      {
        id: 'S3A',
        text: 'Politely decline explaining your personal situation',
        textJA: '個人的な事情を説明して丁寧に断る',
        scores: { WA: -1, LOYALTY: -1, COMM: +1, TEAM: -2, HIER: -1 }
      },
      {
        id: 'S3B',
        text: 'Join and stay for an appropriate time before leaving',
        textJA: '参加して適切な時間までいてから帰る',
        scores: { WA: +2, LOYALTY: +1, COMM: +1, TEAM: +2, HIER: +1 }
      },
      {
        id: 'S3C',
        text: 'Join but leave early without explanation',
        textJA: '参加するが説明なく早めに帰る',
        scores: { WA: -1, LOYALTY: 0, COMM: -1, TEAM: -1, HIER: 0 }
      },
      {
        id: 'S3D',
        text: 'Ask if you can join another time and skip this one',
        textJA: '別の機会に参加すると言って今回はスキップする',
        scores: { WA: 0, LOYALTY: 0, COMM: +1, TEAM: -1, HIER: 0 }
      }
    ],
    consistencyPairs: ['S11']
  },

  // Scenario 4: The Process Shortcut
  {
    id: 'S4',
    title: 'The Process Shortcut',
    titleJA: 'プロセスの近道',
    context: 'You\'ve found a faster way to complete a recurring task that bypasses some established checkpoints. The current process takes 3x longer.',
    contextJA: '確立されたチェックポイントをいくつかバイパスして、繰り返しのタスクを完了するより速い方法を見つけました。現在のプロセスは3倍の時間がかかります。',
    options: [
      {
        id: 'S4A',
        text: 'Start using the shortcut immediately to save time',
        textJA: '時間節約のためすぐにショートカットを使い始める',
        scores: { WA: -2, LOYALTY: -1, COMM: -1, TEAM: -2, HIER: -2 }
      },
      {
        id: 'S4B',
        text: 'Propose the change formally to your supervisor with documentation',
        textJA: '文書を添えて上司に正式に変更を提案する',
        scores: { WA: +2, LOYALTY: +1, COMM: +2, TEAM: +2, HIER: +2 }
      },
      {
        id: 'S4C',
        text: 'Use it quietly but keep the old documentation',
        textJA: '静かに使用するが古い文書は保持する',
        scores: { WA: -1, LOYALTY: 0, COMM: -1, TEAM: -1, HIER: -1 }
      },
      {
        id: 'S4D',
        text: 'Mention it casually to the team during coffee break',
        textJA: 'コーヒーブレイク中にチームにカジュアルに言及する',
        scores: { WA: 0, LOYALTY: 0, COMM: 0, TEAM: +1, HIER: 0 }
      }
    ]
  },

  // Scenario 5: The Conflicting Instructions
  {
    id: 'S5',
    title: 'The Conflicting Instructions',
    titleJA: '矛盾する指示',
    context: 'Department Head Nakamura gives you a directive, but your immediate supervisor Kato-san has already asked you to prioritize a different task. They haven\'t communicated with each other.',
    contextJA: '中村部長から指示を受けましたが、直属の上司の加藤さんは既に別のタスクを優先するよう求めています。二人は互いに連絡を取っていません。',
    options: [
      {
        id: 'S5A',
        text: 'Follow Nakamura-san\'s directive since they\'re higher ranked',
        textJA: '中村さんの方が上位なので中村さんの指示に従う',
        scores: { WA: -1, LOYALTY: 0, COMM: -1, TEAM: -1, HIER: 0 }
      },
      {
        id: 'S5B',
        text: 'Inform Kato-san of the situation and ask for guidance',
        textJA: '加藤さんに状況を伝え、指導を求める',
        scores: { WA: +2, LOYALTY: +1, COMM: +2, TEAM: +1, HIER: +2 }
      },
      {
        id: 'S5C',
        text: 'Try to do both tasks simultaneously',
        textJA: '両方のタスクを同時に行おうとする',
        scores: { WA: 0, LOYALTY: +1, COMM: -1, TEAM: 0, HIER: 0 }
      },
      {
        id: 'S5D',
        text: 'Email both managers explaining the conflict',
        textJA: '両方のマネージャーに競合を説明するメールを送る',
        scores: { WA: -1, LOYALTY: 0, COMM: 0, TEAM: 0, HIER: -1 }
      }
    ]
  },

  // Scenario 6: The Quality Question
  {
    id: 'S6',
    title: 'The Quality Question',
    titleJA: '品質の問題',
    context: 'You notice a small error in a document that\'s already been approved by your manager and is about to be sent to a client. The deadline is in 30 minutes.',
    contextJA: 'マネージャーが既に承認し、クライアントに送られようとしている文書に小さなエラーを見つけました。締め切りは30分後です。',
    options: [
      {
        id: 'S6A',
        text: 'Send it as-is since the error is minor and already approved',
        textJA: 'エラーは小さく既に承認されているのでそのまま送る',
        scores: { WA: -1, LOYALTY: -1, COMM: -1, TEAM: 0, HIER: 0 }
      },
      {
        id: 'S6B',
        text: 'Alert your manager immediately about the error',
        textJA: 'すぐにマネージャーにエラーを報告する',
        scores: { WA: +2, LOYALTY: +2, COMM: +2, TEAM: +1, HIER: +2 }
      },
      {
        id: 'S6C',
        text: 'Fix it yourself and send the corrected version',
        textJA: '自分で修正して訂正版を送る',
        scores: { WA: 0, LOYALTY: +1, COMM: 0, TEAM: 0, HIER: -1 }
      },
      {
        id: 'S6D',
        text: 'Fix it and quietly inform your manager afterward',
        textJA: '修正して後でマネージャーに静かに報告する',
        scores: { WA: +1, LOYALTY: +1, COMM: +1, TEAM: +1, HIER: 0 }
      }
    ]
  },

  // Scenario 7: The Recognition Dilemma
  {
    id: 'S7',
    title: 'The Recognition Dilemma',
    titleJA: '評価のジレンマ',
    context: 'You\'ve solved a major problem that saved the team significant time. Your manager asks who was responsible in front of the whole team.',
    contextJA: 'チームの大幅な時間節約につながる重要な問題を解決しました。マネージャーがチーム全員の前で誰が担当したか尋ねます。',
    options: [
      {
        id: 'S7A',
        text: 'Explain clearly that you solved the problem',
        textJA: '自分が問題を解決したと明確に説明する',
        scores: { WA: -1, LOYALTY: 0, COMM: +1, TEAM: -2, HIER: 0 }
      },
      {
        id: 'S7B',
        text: 'Credit the team effort and mention others who helped',
        textJA: 'チームの努力を称え、助けてくれた人を挙げる',
        scores: { WA: +2, LOYALTY: +1, COMM: +2, TEAM: +2, HIER: +1 }
      },
      {
        id: 'S7C',
        text: 'Briefly acknowledge your role and move on quickly',
        textJA: '自分の役割を簡単に認め、素早く次に進む',
        scores: { WA: +1, LOYALTY: 0, COMM: +1, TEAM: +1, HIER: 0 }
      },
      {
        id: 'S7D',
        text: 'Deflect completely and say it was a team win',
        textJA: '完全に回避して、チームの勝利だと言う',
        scores: { WA: +1, LOYALTY: 0, COMM: 0, TEAM: +1, HIER: 0 }
      }
    ]
  },

  // Scenario 8: Senpai-Kohai Dynamics
  {
    id: 'S8',
    title: 'Senpai-Kohai Dynamics',
    titleJA: '先輩・後輩の関係',
    context: 'Your senpai (senior colleague) Watanabe-san has been with the company for 10 years. They ask you to help with a task using outdated methods. You know a more efficient approach.',
    contextJA: '10年勤務の先輩、渡辺さんから、古い方法でタスクを手伝うよう頼まれました。あなたはより効率的なアプローチを知っています。',
    options: [
      {
        id: 'S8A',
        text: 'Suggest your method immediately to show initiative',
        textJA: 'すぐに自分の方法を提案してイニシアチブを示す',
        scores: { WA: -1, LOYALTY: 0, COMM: 0, TEAM: 0, HIER: -2 }
      },
      {
        id: 'S8B',
        text: 'Follow their method exactly as instructed this time',
        textJA: '今回は指示通りに彼らの方法に従う',
        scores: { WA: +2, LOYALTY: +1, COMM: +1, TEAM: +1, HIER: +2 }
      },
      {
        id: 'S8C',
        text: 'Ask questions that might lead them to consider alternatives',
        textJA: '代替案を検討するきっかけになるような質問をする',
        scores: { WA: +1, LOYALTY: +1, COMM: +2, TEAM: +1, HIER: +1 }
      },
      {
        id: 'S8D',
        text: 'Do it their way but document the better method for later',
        textJA: '彼らの方法で行いつつ、より良い方法を後のために文書化する',
        scores: { WA: +1, LOYALTY: +1, COMM: 0, TEAM: 0, HIER: +1 }
      }
    ]
  },

  // Scenario 9: Team Under Pressure
  {
    id: 'S9',
    title: 'Team Under Pressure',
    titleJA: 'プレッシャー下のチーム',
    context: 'A critical project deadline is tomorrow. A colleague Sato-san is struggling with their portion. Without their part, the entire project will fail. You\'ve finished your work.',
    contextJA: '重要なプロジェクトの締め切りは明日です。同僚の佐藤さんが自分の担当部分で苦戦しています。彼らの部分がなければプロジェクト全体が失敗します。あなたは自分の作業を終えています。',
    options: [
      {
        id: 'S9A',
        text: 'Offer to take over their portion completely',
        textJA: '彼らの部分を完全に引き受けることを申し出る',
        scores: { WA: 0, LOYALTY: +1, COMM: 0, TEAM: 0, HIER: 0 }
      },
      {
        id: 'S9B',
        text: 'Stay late to help while letting them lead their section',
        textJA: '彼らにセクションを主導させながら遅くまで残って手伝う',
        scores: { WA: +2, LOYALTY: +2, COMM: +1, TEAM: +2, HIER: +1 }
      },
      {
        id: 'S9C',
        text: 'Report the situation to the team lead',
        textJA: 'チームリーダーに状況を報告する',
        scores: { WA: -1, LOYALTY: 0, COMM: +1, TEAM: -1, HIER: +1 }
      },
      {
        id: 'S9D',
        text: 'Go home since your part is done',
        textJA: '自分の部分は終わったので帰宅する',
        scores: { WA: -2, LOYALTY: -2, COMM: -1, TEAM: -2, HIER: 0 }
      }
    ]
  },

  // Scenario 10: Corporate Rituals
  {
    id: 'S10',
    title: 'Corporate Rituals',
    titleJA: '企業の儀式',
    context: 'Every Monday morning, the team has a 30-minute morning meeting (asa-rei) where everyone shares their weekly goals. You find these meetings unproductive.',
    contextJA: '毎週月曜日の朝、チームは30分の朝礼があり、全員が週間目標を共有します。あなたはこれらの会議は非生産的だと感じています。',
    options: [
      {
        id: 'S10A',
        text: 'Propose to skip or shorten the meetings',
        textJA: '会議をスキップまたは短縮することを提案する',
        scores: { WA: -2, LOYALTY: -1, COMM: 0, TEAM: -2, HIER: -1 }
      },
      {
        id: 'S10B',
        text: 'Participate fully and use them to understand team priorities',
        textJA: '完全に参加し、チームの優先事項を理解するために活用する',
        scores: { WA: +2, LOYALTY: +1, COMM: +1, TEAM: +2, HIER: +1 }
      },
      {
        id: 'S10C',
        text: 'Attend but mentally disengage',
        textJA: '出席するが精神的には離れている',
        scores: { WA: 0, LOYALTY: 0, COMM: -1, TEAM: -1, HIER: 0 }
      },
      {
        id: 'S10D',
        text: 'Suggest improvements to make them more effective',
        textJA: 'より効果的にするための改善を提案する',
        scores: { WA: +1, LOYALTY: +1, COMM: +1, TEAM: +1, HIER: 0 }
      }
    ],
    consistencyPairs: ['S2']
  },

  // Scenario 11: Ambiguous Feedback
  {
    id: 'S11',
    title: 'Ambiguous Feedback',
    titleJA: '曖昧なフィードバック',
    context: 'After completing a major task, your manager says "This is interesting work. It will require careful consideration." You\'re unsure if this is positive or negative feedback.',
    contextJA: '大きな仕事を完了した後、マネージャーが「これは興味深い仕事です。慎重な検討が必要です」と言います。これが肯定的か否定的なフィードバックか分かりません。',
    options: [
      {
        id: 'S11A',
        text: 'Ask directly if there are specific issues to address',
        textJA: '対処すべき具体的な問題があるか直接尋ねる',
        scores: { WA: -1, LOYALTY: 0, COMM: 0, TEAM: 0, HIER: -1 }
      },
      {
        id: 'S11B',
        text: 'Wait and observe how they act on the work over the next few days',
        textJA: '次の数日間、彼らがどのように行動するか観察する',
        scores: { WA: +1, LOYALTY: +1, COMM: +1, TEAM: 0, HIER: +1 }
      },
      {
        id: 'S11C',
        text: 'Assume it\'s positive and move on',
        textJA: '肯定的だと仮定して次に進む',
        scores: { WA: 0, LOYALTY: 0, COMM: -1, TEAM: 0, HIER: 0 }
      },
      {
        id: 'S11D',
        text: 'Ask a colleague what that feedback typically means',
        textJA: 'そのフィードバックが通常何を意味するか同僚に尋ねる',
        scores: { WA: +1, LOYALTY: 0, COMM: +2, TEAM: +1, HIER: 0 }
      }
    ],
    consistencyPairs: ['S3']
  },

  // Scenario 12: Long-term Commitment
  {
    id: 'S12',
    title: 'Long-term Commitment',
    titleJA: '長期的なコミットメント',
    context: 'In an interview, the hiring manager asks about your career plans. You\'re genuinely interested in the role but uncertain about staying more than 2-3 years.',
    contextJA: '面接で、採用マネージャーがキャリアプランについて尋ねます。その役割に本当に興味がありますが、2〜3年以上いるかは不確かです。',
    options: [
      {
        id: 'S12A',
        text: 'Express interest in long-term growth with the company',
        textJA: '会社での長期的な成長への関心を表明する',
        scores: { WA: +1, LOYALTY: +2, COMM: +1, TEAM: +1, HIER: +1 }
      },
      {
        id: 'S12B',
        text: 'Be honest about your uncertainty',
        textJA: '不確かさについて正直に話す',
        scores: { WA: -1, LOYALTY: -2, COMM: +1, TEAM: 0, HIER: -1 }
      },
      {
        id: 'S12C',
        text: 'Focus on learning opportunities rather than timeline',
        textJA: 'タイムラインよりも学習機会に焦点を当てる',
        scores: { WA: +1, LOYALTY: 0, COMM: +1, TEAM: 0, HIER: 0 }
      },
      {
        id: 'S12D',
        text: 'Ask what typical career paths look like in the company',
        textJA: '会社での典型的なキャリアパスはどのようなものか尋ねる',
        scores: { WA: +1, LOYALTY: +1, COMM: +2, TEAM: 0, HIER: +1 }
      }
    ]
  },

  // Scenario 13: Manager Unavailable
  {
    id: 'S13',
    title: 'Manager Unavailable',
    titleJA: 'マネージャー不在',
    context: 'An urgent client request comes in requiring a quick decision. Your manager is unreachable and there\'s no clear protocol. The client needs an answer within the hour.',
    contextJA: '緊急のクライアントリクエストが入り、迅速な決定が必要です。マネージャーに連絡が取れず、明確なプロトコルもありません。クライアントは1時間以内に回答が必要です。',
    options: [
      {
        id: 'S13A',
        text: 'Make the decision yourself based on best judgment',
        textJA: '最善の判断に基づいて自分で決定する',
        scores: { WA: -1, LOYALTY: 0, COMM: 0, TEAM: -1, HIER: -2 }
      },
      {
        id: 'S13B',
        text: 'Escalate to another senior manager or team lead',
        textJA: '別のシニアマネージャーまたはチームリーダーにエスカレートする',
        scores: { WA: +2, LOYALTY: +1, COMM: +2, TEAM: +1, HIER: +2 }
      },
      {
        id: 'S13C',
        text: 'Tell the client you need more time',
        textJA: 'クライアントにもっと時間が必要だと伝える',
        scores: { WA: 0, LOYALTY: 0, COMM: +1, TEAM: 0, HIER: +1 }
      },
      {
        id: 'S13D',
        text: 'Consult with team members before responding',
        textJA: '回答前にチームメンバーと相談する',
        scores: { WA: +1, LOYALTY: 0, COMM: +1, TEAM: +2, HIER: 0 }
      }
    ]
  },

  // Scenario 14: Consistency Check (mirrors S1)
  {
    id: 'S14',
    title: 'The Late Report',
    titleJA: '遅れるレポート',
    context: 'You realize a monthly report you\'re responsible for will be 2 days late. Your director hasn\'t specifically asked about it yet.',
    contextJA: '担当している月次レポートが2日遅れることに気づきました。ディレクターはまだ具体的に尋ねていません。',
    options: [
      {
        id: 'S14A',
        text: 'Complete it quietly and submit when ready',
        textJA: '静かに完成させ、準備ができたら提出する',
        scores: { WA: -1, LOYALTY: 0, COMM: -2, TEAM: -1, HIER: -1 }
      },
      {
        id: 'S14B',
        text: 'Proactively inform your director and provide a new timeline',
        textJA: '積極的にディレクターに報告し、新しいタイムラインを提供する',
        scores: { WA: +2, LOYALTY: +1, COMM: +2, TEAM: +1, HIER: +2 }
      },
      {
        id: 'S14C',
        text: 'Wait until asked and then explain',
        textJA: '尋ねられるまで待ってから説明する',
        scores: { WA: -1, LOYALTY: 0, COMM: -1, TEAM: 0, HIER: 0 }
      },
      {
        id: 'S14D',
        text: 'Ask colleagues if the director really needs it on time',
        textJA: 'ディレクターが本当に時間通りに必要か同僚に尋ねる',
        scores: { WA: 0, LOYALTY: 0, COMM: 0, TEAM: 0, HIER: -1 }
      }
    ],
    consistencyPairs: ['S1']
  }
];

// Calculate dimension scores from responses
export function calculateDimensionScores(responses: Record<string, string>): DimensionScores {
  const scores: DimensionScores = { WA: 0, LOYALTY: 0, COMM: 0, TEAM: 0, HIER: 0 };

  for (const scenario of scenarios) {
    const selectedOptionId = responses[scenario.id];
    if (selectedOptionId) {
      const option = scenario.options.find(o => o.id === selectedOptionId);
      if (option) {
        scores.WA += option.scores.WA;
        scores.LOYALTY += option.scores.LOYALTY;
        scores.COMM += option.scores.COMM;
        scores.TEAM += option.scores.TEAM;
        scores.HIER += option.scores.HIER;
      }
    }
  }

  return scores;
}

// Normalize scores to 0-100 scale
export function normalizeScores(scores: DimensionScores): DimensionScores {
  // Max possible per dimension: +28 (14 scenarios × +2)
  // Min possible per dimension: -28 (14 scenarios × -2)
  // Range: 56
  const normalize = (raw: number) => Math.round(((raw + 28) / 56) * 100);

  return {
    WA: normalize(scores.WA),
    LOYALTY: normalize(scores.LOYALTY),
    COMM: normalize(scores.COMM),
    TEAM: normalize(scores.TEAM),
    HIER: normalize(scores.HIER)
  };
}

// Calculate Japanese Fit Coefficient (JFC)
export function calculateJFC(normalizedScores: DimensionScores): number {
  // Weighted average based on importance in Japanese workplace
  // Updated per Uncle Chachie's Master Methodology V1
  const weights = {
    WA: 0.25,      // Harmony is critical (25%)
    LOYALTY: 0.15, // Long-term commitment (15%)
    COMM: 0.20,    // Communication style (20%)
    TEAM: 0.20,    // Team integration (20%)
    HIER: 0.20     // Hierarchy respect (20%)
  };

  const jfc =
    normalizedScores.WA * weights.WA +
    normalizedScores.LOYALTY * weights.LOYALTY +
    normalizedScores.COMM * weights.COMM +
    normalizedScores.TEAM * weights.TEAM +
    normalizedScores.HIER * weights.HIER;

  return Math.round(jfc);
}

// Calculate Consistency Index
export function calculateConsistencyIndex(responses: Record<string, string>): number {
  const consistencyPairs = [
    ['S1', 'S14'], // Both test proactive communication about delays
    ['S2', 'S10'], // Both test approach to meetings and speaking up
    ['S3', 'S11']  // Both test social integration and indirect communication
  ];

  let consistentPairs = 0;
  let totalPairs = 0;

  for (const [s1Id, s2Id] of consistencyPairs) {
    const s1 = scenarios.find(s => s.id === s1Id);
    const s2 = scenarios.find(s => s.id === s2Id);

    if (s1 && s2 && responses[s1Id] && responses[s2Id]) {
      totalPairs++;

      const opt1 = s1.options.find(o => o.id === responses[s1Id]);
      const opt2 = s2.options.find(o => o.id === responses[s2Id]);

      if (opt1 && opt2) {
        // Calculate behavioral similarity
        const diff =
          Math.abs(opt1.scores.WA - opt2.scores.WA) +
          Math.abs(opt1.scores.COMM - opt2.scores.COMM) +
          Math.abs(opt1.scores.HIER - opt2.scores.HIER);

        // If difference is small, responses are consistent
        if (diff <= 3) {
          consistentPairs++;
        }
      }
    }
  }

  return totalPairs > 0 ? Math.round((consistentPairs / totalPairs) * 100) : 100;
}

// Generate risk flags based on scores
export function generateRiskFlags(normalizedScores: DimensionScores): RiskFlag[] {
  const flags: RiskFlag[] = [];

  // Critical risks (score < 30)
  if (normalizedScores.WA < 30) {
    flags.push({
      level: 'critical',
      dimension: 'WA',
      message: 'May struggle with consensus-based decision making',
      messageJA: '合意に基づく意思決定に苦労する可能性があります'
    });
  }
  if (normalizedScores.HIER < 30) {
    flags.push({
      level: 'critical',
      dimension: 'HIER',
      message: 'May conflict with hierarchical structures',
      messageJA: '階層構造と衝突する可能性があります'
    });
  }

  // Moderate risks (score < 50)
  if (normalizedScores.LOYALTY < 50 && normalizedScores.LOYALTY >= 30) {
    flags.push({
      level: 'moderate',
      dimension: 'LOYALTY',
      message: 'May need support for long-term commitment',
      messageJA: '長期的なコミットメントのサポートが必要かもしれません'
    });
  }
  if (normalizedScores.COMM < 50 && normalizedScores.COMM >= 30) {
    flags.push({
      level: 'moderate',
      dimension: 'COMM',
      message: 'Communication style may require adaptation',
      messageJA: 'コミュニケーションスタイルの適応が必要かもしれません'
    });
  }
  if (normalizedScores.TEAM < 50 && normalizedScores.TEAM >= 30) {
    flags.push({
      level: 'moderate',
      dimension: 'TEAM',
      message: 'Team integration may take additional time',
      messageJA: 'チームへの統合に追加の時間がかかるかもしれません'
    });
  }

  return flags;
}

// Generate strengths based on high scores
export function generateStrengths(normalizedScores: DimensionScores): string[] {
  const strengths: string[] = [];

  if (normalizedScores.WA >= 70) {
    strengths.push('Strong alignment with harmony and consensus culture');
  }
  if (normalizedScores.LOYALTY >= 70) {
    strengths.push('High potential for long-term organizational commitment');
  }
  if (normalizedScores.COMM >= 70) {
    strengths.push('Good understanding of indirect communication patterns');
  }
  if (normalizedScores.TEAM >= 70) {
    strengths.push('Natural fit for team-oriented work environment');
  }
  if (normalizedScores.HIER >= 70) {
    strengths.push('Comfortable with hierarchical structures');
  }

  return strengths;
}

// Generate development areas based on lower scores
export function generateDevelopmentAreas(normalizedScores: DimensionScores): string[] {
  const areas: string[] = [];

  if (normalizedScores.WA < 50) {
    areas.push('Adapting to consensus-based decision making');
  }
  if (normalizedScores.LOYALTY < 50) {
    areas.push('Building long-term organizational commitment');
  }
  if (normalizedScores.COMM < 50) {
    areas.push('Understanding indirect communication cues');
  }
  if (normalizedScores.TEAM < 50) {
    areas.push('Integrating with team dynamics and rituals');
  }
  if (normalizedScores.HIER < 50) {
    areas.push('Navigating hierarchical relationships');
  }

  return areas;
}

// Determine management style recommendation
export function getManagementStyle(normalizedScores: DimensionScores): string {
  const avgScore = (normalizedScores.WA + normalizedScores.LOYALTY + normalizedScores.COMM + normalizedScores.TEAM + normalizedScores.HIER) / 5;

  if (avgScore >= 70) {
    return 'Standard Management - Candidate shows strong cultural alignment and can work independently within Japanese team structures.';
  } else if (avgScore >= 50) {
    return 'Guided Onboarding - Provide cultural mentorship for first 3-6 months with regular check-ins on team dynamics.';
  } else {
    return 'Structured Support - Assign a dedicated senpai mentor and provide explicit cultural training for 6-12 months.';
  }
}

// Generate cultural stress points
export function getCulturalStressPoints(normalizedScores: DimensionScores): string[] {
  const stressPoints: string[] = [];

  if (normalizedScores.WA < 50 && normalizedScores.HIER < 50) {
    stressPoints.push('Nemawashi (consensus-building) processes may feel slow');
  }
  if (normalizedScores.COMM < 50) {
    stressPoints.push('Ambiguous feedback may cause frustration');
  }
  if (normalizedScores.TEAM < 50) {
    stressPoints.push('After-work social obligations may feel burdensome');
  }
  if (normalizedScores.HIER < 60) {
    stressPoints.push('Strict seniority protocols may feel limiting');
  }
  if (normalizedScores.LOYALTY < 50) {
    stressPoints.push('Long-term project cycles may test patience');
  }

  return stressPoints;
}

// Main function to calculate complete assessment result
export function calculateAssessment(responses: Record<string, string>): AssessmentResult {
  const dimensions = calculateDimensionScores(responses);
  const normalizedScores = normalizeScores(dimensions);
  const jfc = calculateJFC(normalizedScores);
  const consistencyIndex = calculateConsistencyIndex(responses);
  const riskFlags = generateRiskFlags(normalizedScores);
  const strengths = generateStrengths(normalizedScores);
  const developmentAreas = generateDevelopmentAreas(normalizedScores);
  const managementStyle = getManagementStyle(normalizedScores);
  const culturalStressPoints = getCulturalStressPoints(normalizedScores);

  return {
    dimensions,
    normalizedScores,
    jfc,
    consistencyIndex,
    riskFlags,
    strengths,
    developmentAreas,
    managementStyle,
    culturalStressPoints
  };
}

// Get JFC level label
export function getJFCLabel(jfc: number): string {
  if (jfc >= 80) return 'Excellent Cultural Fit';
  if (jfc >= 65) return 'Good Cultural Fit';
  if (jfc >= 50) return 'Moderate Cultural Fit';
  if (jfc >= 35) return 'Developing Cultural Fit';
  return 'Significant Adaptation Needed';
}

export function getJFCLabelJA(jfc: number): string {
  if (jfc >= 80) return '優秀な文化適合性';
  if (jfc >= 65) return '良好な文化適合性';
  if (jfc >= 50) return '中程度の文化適合性';
  if (jfc >= 35) return '成長中の文化適合性';
  return '大幅な適応が必要';
}
