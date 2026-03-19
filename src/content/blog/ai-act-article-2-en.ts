// AI Act Article 2 - English
// AI in HR as High-Risk

export const aiActArticle2EN = {
  slug: "ki-recruiting-hochrisiko-ai-act",
  title: "AI in Recruitment: Why Your HR Tool Is Suddenly High-Risk",
  description:
    "AI Act and HR: AI in recruitment, application screening and performance evaluation is classified as high-risk. What this means for employers — and why Equal Pay makes it more complex.",
  date: "2026-03-20",
  author: "Jens Druckenmüller",
  keywords: [
    "AI Act HR",
    "AI recruitment high-risk",
    "applicant tracking AI",
    "AI Act employment",
    "high-risk AI employer",
    "AI performance evaluation",
    "Annex III AI Act",
    "deployer obligations HR",
    "Equal Pay AI",
    "pay transparency AI",
    "human oversight HR",
    "AI screening",
  ],
  lang: "en" as const,
  content: `
    <p><strong>AI in human resources is already everyday reality.</strong> Pre-filtering applications, optimising job ads, evaluating performance, benchmarking salaries — in many companies, an algorithm handles all of this. Efficient, fast, scalable.</p>

    <p>And from now on: <strong>high-risk.</strong></p>

    <p>The EU AI Act explicitly classifies AI systems in the area of employment and workforce management as high-risk (Annex III, point 4). This means: the strictest requirements, comprehensive documentation, human oversight — and serious penalties for non-compliance. For companies that must simultaneously implement the EU Pay Transparency Directive, this creates a dual compliance challenge.</p>

    <p>This article explains which HR systems are affected, what employers face, and how to address both regulations together.</p>

    <h2>What exactly is "high-risk" in HR?</h2>

    <p>Annex III of the AI Act lists eight areas where AI systems are considered high-risk. Point 4 — "Employment, workers' management and access to self-employment" — is the most important for employers. It covers two categories:</p>

    <h3>Category (a): Recruitment and selection</h3>
    <ul>
      <li>AI for <strong>targeted job advertisements</strong> (e.g. algorithmic distribution on LinkedIn)</li>
      <li>AI for <strong>analysing and filtering applications</strong> (CV screening)</li>
      <li>AI for <strong>evaluating candidates</strong> (assessment tools, video interview analysis)</li>
    </ul>

    <h3>Category (b): Employment decisions and monitoring</h3>
    <ul>
      <li>AI for <strong>promotion and termination decisions</strong></li>
      <li>AI for <strong>task allocation</strong> based on individual behaviour or personality traits</li>
      <li>AI for <strong>monitoring and evaluating performance and behaviour</strong></li>
    </ul>

    <p><strong>Important:</strong> This isn't limited to specialised HR software. If you use ChatGPT to evaluate CVs, or an AI-assisted spreadsheet for pay analysis — that too may fall under high-risk if it influences decisions about people.</p>

    <h2>Are there exceptions?</h2>

    <p>Yes — but they are narrow. Art. 6(3) provides four exceptions where a system listed in Annex III is <em>not</em> considered high-risk:</p>

    <ul>
      <li>It performs only a <strong>narrow procedural task</strong> (e.g. automated interview scheduling)</li>
      <li>It <strong>improves a previously completed human result</strong> (e.g. spell-checking job ads)</li>
      <li>It detects <strong>patterns or deviations</strong> but does not replace the human decision</li>
      <li>It performs a <strong>preparatory task</strong> for a human assessment</li>
    </ul>

    <p><strong>But watch out:</strong> As soon as a system performs <strong>profiling</strong> — i.e. automatically processes personal data to evaluate aspects such as work performance, reliability, or behaviour — it is <em>always</em> high-risk. No exception.</p>

    <h2>What must employers do as deployers?</h2>

    <p>The obligations for deployers of high-risk AI in HR are comprehensive (Art. 26). Here are the key requirements:</p>

    <h3>1. Use according to instructions</h3>
    <p>You may only use the system as the provider intended. If a tool is designed for "support in pre-selection," you may not use it for automated rejection decisions.</p>

    <h3>2. Human oversight</h3>
    <p>You must assign natural persons to oversee the system — and they must have the <strong>competence, training, and authority</strong> to understand, question, and override AI decisions. This is not a formality: the AI Act explicitly names the risk of "automation bias" — the tendency to uncritically accept AI outputs.</p>

    <h3>3. Inform workers</h3>
    <p><strong>Before deployment</strong>, workers' representatives and affected employees must be informed. In Germany: the works council. In Luxembourg: the employee delegation. This is not a recommendation — it's a legal obligation.</p>

    <h3>4. Retain logs</h3>
    <p>Automatically generated logs must be retained for <strong>at least 6 months</strong>. In the event of an audit or legal dispute, you must be able to demonstrate how the system operated.</p>

    <h3>5. Monitoring and reporting</h3>
    <p>You must monitor the system's operation. If you identify risks, you must <strong>immediately suspend</strong> use and inform the provider and authorities.</p>

    <h3>6. Data protection impact assessment</h3>
    <p>For high-risk AI in HR, a <strong>DPIA under Art. 35 GDPR</strong> is generally required. The AI Act and GDPR interlock here.</p>

    <h2>The double trap: AI Act + Pay Transparency</h2>

    <p>This is where it gets particularly relevant for many companies: those using AI for <strong>pay analysis, compensation benchmarking, or performance evaluations</strong> face dual regulation:</p>

    <ul>
      <li>The <strong>EU AI Act</strong> classifies AI in employment decisions as high-risk</li>
      <li>The <strong>EU Pay Transparency Directive</strong> (deadline: 7 June 2026) requires transparent, gender-neutral pay criteria and gap assessments</li>
    </ul>

    <p>If your compensation system relies on AI-supported analysis, you must simultaneously demonstrate that:</p>

    <ul>
      <li>The AI operates correctly and without discrimination (AI Act)</li>
      <li>Pay criteria are gender-neutral and transparent (Pay Transparency)</li>
      <li>Human oversight is ensured (both regulations)</li>
      <li>Affected individuals are informed (both regulations)</li>
    </ul>

    <p>The good news: many measures address both requirements simultaneously. A gender-neutral job evaluation system with documented criteria satisfies both the transparency requirements of the directive and the explainability requirements of the AI Act.</p>

    <h2>Emotion recognition: the red line</h2>

    <p>One special case deserves particular attention: <strong>emotion recognition in the workplace is banned</strong> (Art. 5(1)(f)). Since February 2025.</p>

    <p>This covers any system that infers emotions or intentions of employees based on biometric data — whether facial recognition, voice analysis, or body language evaluation. Some HR tools and video interview platforms use such technologies. Check your deployed systems.</p>

    <p><strong>Only exception:</strong> Medical reasons (e.g. fatigue detection for professional drivers) or safety reasons.</p>

    <h2>What you should do now — a checklist</h2>

    <ol>
      <li><strong>HR AI inventory:</strong> List all AI systems used in your HR department — including the "small" tools.</li>
      <li><strong>High-risk check:</strong> For each system, ask: Does it fall under Annex III point 4? Does an exception apply? Does it perform profiling?</li>
      <li><strong>Check your provider:</strong> Does the provider meet their obligations? (Technical documentation, CE marking, EU database registration)</li>
      <li><strong>Set up human oversight:</strong> Appoint competent individuals. Train them. Document their authority.</li>
      <li><strong>Inform works council / employee delegation:</strong> Now — not after the system is already running.</li>
      <li><strong>Check for emotion recognition:</strong> Does any of your systems use emotion recognition? If so: discontinue immediately.</li>
      <li><strong>Conduct a DPIA:</strong> Create or update a data protection impact assessment for each HR high-risk system.</li>
      <li><strong>Link to Equal Pay:</strong> If AI is used in compensation — address both regulations together.</li>
    </ol>

    <h2>Conclusion: HR is high-risk zone No. 1</h2>

    <p>Of all the AI Act's high-risk areas, none affects as many companies as the HR domain. AI in recruitment, performance evaluation, and compensation — this is everyday practice in European businesses. The combination of the AI Act and the Pay Transparency Directive makes coordinated compliance a necessity.</p>

    <p>The deadlines may shift. The obligations won't.</p>

    <p><em>Do you use AI in HR and want to know what's coming? We help with the stocktake — for AI Act and Equal Pay alike. <a href="/en/ai-act#contact" class="text-gold hover:text-gold-light">Book a free initial call.</a></em></p>
  `,
  faqItems: [
    {
      question: "Which HR tools are classified as high-risk under the AI Act?",
      answer:
        "All AI systems used for recruitment, application filtering, candidate assessment, promotion or termination decisions, performance monitoring, or task allocation based on personality traits are classified as high-risk (Annex III point 4). This includes ATS with AI screening, video interview analysis tools, AI-powered performance management systems, and algorithmic pay optimisation.",
    },
    {
      question: "Can I use ChatGPT to pre-screen job applications?",
      answer:
        "In principle yes, but it would likely constitute a high-risk system. You must ensure that a competent person reviews the AI pre-selection (human oversight), that usage is documented, that the works council has been informed, and that no automated rejection decisions are made without human review. A purely AI-driven rejection without human oversight would be problematic.",
    },
    {
      question: "What if my HR tool analyses emotions?",
      answer:
        "Emotion recognition in the workplace has been banned since February 2025 (Art. 5(1)(f)). If a deployed HR tool — such as during video interviews — analyses emotions, mood, or stress levels of candidates or employees, its use must be discontinued immediately. The only exception is for medical or safety reasons (e.g. fatigue detection for professional drivers).",
    },
    {
      question: "Do I have to inform the works council about AI in HR?",
      answer:
        "Yes. Art. 26(7) of the AI Act requires employers to inform workers' representatives and affected workers before deploying or using a high-risk AI system in the workplace. In Germany, this is the works council (Betriebsrat); in Luxembourg, the employee delegation (Personaldelegation). This obligation exists in addition to existing co-determination rights under national employment law.",
    },
    {
      question: "How are the AI Act and Pay Transparency Directive connected?",
      answer:
        "Companies using AI for pay analysis, compensation benchmarking, or performance evaluations may be subject to both regulations simultaneously. The AI Act requires transparency, documentation, and human oversight for high-risk AI in HR. The Pay Transparency Directive requires gender-neutral, transparent pay criteria and gap assessments. Both requirements can be addressed efficiently together — a gender-neutral job evaluation system with documented criteria fulfils parts of both regulations.",
    },
    {
      question: "What documentation must I keep as an employer?",
      answer:
        "For high-risk AI in HR: (1) Which systems are deployed and for what purpose, (2) who provides human oversight and what authority they have, (3) automatically generated logs (minimum 6 months), (4) the provider's instructions for use, (5) information provided to works council/employee delegation, (6) training conducted, and (7) the data protection impact assessment.",
    },
  ],
};
