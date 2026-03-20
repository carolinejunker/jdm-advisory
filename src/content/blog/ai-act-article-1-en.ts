// AI Act Article 1 - English
// Will be imported in posts.ts

export const aiActArticle1EN = {
  slug: "eu-ai-act-was-unternehmen-jetzt-tun-muessen",
  title: "EU AI Act: What Every Business Must Do Now — Even If You Only Use ChatGPT",
  description:
    "EU AI Act: First obligations have been in force since February 2025. AI literacy, transparency, high-risk rules — what businesses face and what the Digital Omnibus changes.",
  date: "2026-03-20",
  author: "Jens Druckenmüller",
  keywords: [
    "EU AI Act",
    "AI regulation",
    "AI Act obligations businesses",
    "AI literacy requirement",
    "high-risk AI",
    "Digital Omnibus",
    "AI regulation Europe",
    "AI Act SME",
    "AI transparency",
    "AI Act 2026",
    "AI governance",
  ],
  lang: "en" as const,
  category: "ai-act" as const,
  content: `
    <p><strong>You use ChatGPT at work? Microsoft Copilot? An AI tool for screening job applicants?</strong> Then the EU AI Act applies to you. Not someday — now.</p>

    <p>Regulation (EU) 2024/1689 — better known as the EU AI Act — has been in force since August 2024. First obligations have applied since February 2025. The main deadline was set for August 2026 but is likely to be partially postponed through the so-called Digital Omnibus. Still: those who don't act now risk fines of up to €35 million or 7% of global annual turnover.</p>

    <p>This article explains what the AI Act requires of your business — step by step, in plain language.</p>

    <h2>What is the EU AI Act?</h2>

    <p>The AI Act is the world's first comprehensive law regulating artificial intelligence. It applies to <strong>every business</strong> that develops, distributes, or deploys AI systems — in the EU or with effect in the EU. As an EU Regulation, it applies directly in all member states without the need for national transposition.</p>

    <p>The core principle: the higher the risk an AI system poses to fundamental rights, health, and safety, the stricter the requirements. The AI Act distinguishes four risk levels:</p>

    <ul>
      <li><strong>Unacceptable risk:</strong> Banned. Social scoring, manipulative AI, emotion recognition in the workplace.</li>
      <li><strong>High risk:</strong> Strict requirements. AI in recruitment, credit scoring, performance monitoring.</li>
      <li><strong>Limited risk:</strong> Transparency obligations. Chatbots, deepfakes, AI-generated content.</li>
      <li><strong>Minimal risk:</strong> No special requirements. Spam filters, search suggestions, AI in video games.</li>
    </ul>

    <h2>Who is affected? The roles under the AI Act</h2>

    <p>Most businesses don't develop AI — they <em>use</em> it. The AI Act calls them <strong>deployers</strong>. And the obligations for deployers are real.</p>

    <p>The AI Act distinguishes:</p>

    <ul>
      <li><strong>Providers:</strong> Those who develop an AI system and place it on the market. They bear the heaviest obligations.</li>
      <li><strong>Deployers:</strong> Those who use an AI system professionally — meaning almost every company using ChatGPT, Copilot, or other AI tools.</li>
      <li><strong>Importers/Distributors:</strong> Those who bring AI systems from outside the EU into the single market.</li>
    </ul>

    <p><strong>Key point:</strong> Even if you only use AI "on the side" — for drafting emails, translations, or data analysis — you are a deployer under the AI Act.</p>

    <h2>What already applies — since February 2025</h2>

    <h3>1. AI Literacy Obligation (Art. 4)</h3>

    <p>Since 2 February 2025, <strong>all businesses</strong> using AI must ensure that their staff has a sufficient level of AI competence. This applies to everyone working with AI systems — from the CEO to the administrative assistant.</p>

    <p>What "sufficient" means depends on:</p>

    <ul>
      <li>The person's role (an HR manager using AI for recruiting needs more knowledge than someone using ChatGPT for emails)</li>
      <li>The risk level of the system in use</li>
      <li>The groups of people affected</li>
    </ul>

    <p><strong>Practical tip:</strong> Document which AI systems are in use in your company and who works with them. Conduct training — and document it. In the event of an audit, you must be able to demonstrate that you have taken measures.</p>

    <h3>2. Prohibited Practices (Art. 5)</h3>

    <p>Also since February 2025, the following AI practices are <strong>banned</strong>:</p>

    <ul>
      <li><strong>Manipulative AI:</strong> Systems deploying subliminal or deceptive techniques to influence behaviour</li>
      <li><strong>Social scoring:</strong> Evaluating individuals based on social behaviour or personality traits</li>
      <li><strong>Emotion recognition in the workplace and education</strong> (exception: medical or safety reasons)</li>
      <li><strong>Untargeted facial recognition:</strong> Building facial databases through scraping</li>
      <li><strong>Biometric categorisation</strong> by sensitive attributes (race, religion, sexual orientation)</li>
    </ul>

    <p><strong>Watch out:</strong> The workplace emotion recognition ban is broad. If you use a tool that measures employee mood or satisfaction via AI — that may already be prohibited.</p>

    <h2>What comes from August 2026</h2>

    <h3>3. Transparency Obligations (Art. 50)</h3>

    <p>From 2 August 2026, businesses must:</p>

    <ul>
      <li><strong>Disclose AI interaction:</strong> If customers interact with an AI system (e.g. a chatbot on your website), they must be informed.</li>
      <li><strong>Label deepfakes:</strong> AI-generated or manipulated images, videos, and audio must be declared as such.</li>
      <li><strong>AI-generated text:</strong> If you publish AI-generated text intended to inform the public, you must disclose this — <em>unless</em> a human has editorially reviewed and takes responsibility for the content.</li>
    </ul>

    <h3>4. High-Risk Obligations</h3>

    <p>AI systems in particularly sensitive areas face the strictest requirements. The most relevant high-risk areas for businesses:</p>

    <ul>
      <li><strong>HR and recruitment:</strong> AI for job ads, application filtering, candidate assessment, performance monitoring, promotion and termination decisions</li>
      <li><strong>Credit scoring:</strong> AI-based creditworthiness assessment</li>
      <li><strong>Insurance:</strong> AI for risk assessment and pricing in life and health insurance</li>
      <li><strong>Education:</strong> AI for admission decisions and exam evaluation</li>
    </ul>

    <p>If you deploy such a system, you must among other things:</p>

    <ul>
      <li>Ensure human oversight by competent individuals</li>
      <li>Use the system in accordance with the provider's instructions</li>
      <li>Retain automatically generated logs for at least 6 months</li>
      <li>Inform workers <strong>before deployment</strong> (works council!)</li>
      <li>Immediately inform the provider and authorities if risks arise</li>
      <li>Conduct a data protection impact assessment where applicable</li>
    </ul>

    <h2>Digital Omnibus: Are the deadlines shifting?</h2>

    <p>Yes — likely. In November 2025, the European Commission proposed the <strong>Digital Omnibus</strong> package, which postpones several deadlines:</p>

    <ul>
      <li><strong>High-risk obligations (Annex III):</strong> Instead of August 2026, likely <strong>December 2027</strong></li>
      <li><strong>High-risk in products (Annex I):</strong> Postponed to <strong>August 2028</strong></li>
      <li><strong>AI content labelling (Art. 50(2)):</strong> For existing systems until <strong>February 2027</strong></li>
      <li><strong>SME reliefs</strong> extended to "small midcaps" (up to 750 employees)</li>
    </ul>

    <p><strong>Important:</strong> The Digital Omnibus has not been adopted yet. On 18 March 2026, the parliamentary committees IMCO and LIBE voted; trilogues with the Council are ongoing. Until the legislative process is complete, <strong>the original August 2026 deadline applies</strong>.</p>

    <p>The wisest strategy: <strong>Prepare as if August 2026 is real — and plan as if December 2027 is the likely enforcement date.</strong></p>

    <h2>What does this mean for your business specifically?</h2>

    <h3>You use ChatGPT or Copilot internally</h3>
    <p>→ The AI literacy obligation applies <strong>now</strong>. Train your staff and document it. From August 2026: transparency required when customers interact with AI.</p>

    <h3>You use AI in recruitment</h3>
    <p>→ This is a <strong>high-risk system</strong>. Human oversight, logs, worker information — full deployer obligations. Check whether your vendor meets provider obligations (CE marking, EU database registration).</p>

    <h3>You have a chatbot on your website</h3>
    <p>→ From August 2026: users must know they're interacting with AI. A simple notice is sufficient.</p>

    <h3>You use AI for pay analysis</h3>
    <p>→ Double issue: <strong>AI Act</strong> (potentially high-risk under Annex III) <em>and</em> <strong>EU Pay Transparency Directive</strong> (deadline: June 2026). Two regulations, one action needed.</p>

    <h2>The penalties</h2>

    <p>The AI Act mirrors the GDPR on penalties — with even higher ceilings in some cases:</p>

    <ul>
      <li><strong>Prohibited practices:</strong> Up to €35m or 7% of global annual turnover</li>
      <li><strong>High-risk and transparency obligations:</strong> Up to €15m or 3% of annual turnover</li>
      <li><strong>False information to authorities:</strong> Up to €7.5m or 1% of annual turnover</li>
    </ul>

    <p><strong>SME rule:</strong> For small and medium-sized enterprises, the lower of the two values applies. An SME with €5m turnover would face a maximum of €150,000 for a transparency violation (3% of €5m) — not €15 million.</p>

    <h2>Five steps you can take now</h2>

    <ol>
      <li><strong>AI inventory:</strong> Which AI systems do you use? List them all — including those used "only" by individual employees.</li>
      <li><strong>Clarify roles:</strong> Are you a deployer? In most cases: yes. For each system, identify who the provider is.</li>
      <li><strong>Determine risk class:</strong> Does a system fall into a high-risk area (HR, credit, insurance, education)? If so, stricter obligations apply.</li>
      <li><strong>Train AI competence:</strong> Train your staff. Document the training. This is not optional — it has been mandatory since February 2025.</li>
      <li><strong>Set up processes:</strong> Who is responsible for AI governance in your company? Who monitors deployment? Who documents?</li>
    </ol>

    <h2>Conclusion: Don't wait, prepare</h2>

    <p>The EU AI Act is not a future topic — it's the present. The AI literacy obligation is already in force. The prohibitions are already in force. And even if the high-risk deadlines shift through the Digital Omnibus: the risk classification of your systems doesn't change. Knowing where you stand is the first step — and you can take it today.</p>

    <p><em>Want to know what the AI Act means specifically for your business? We help with the stocktake — structured, practical, understandable. <a href="/en/ai-act#contact" class="text-gold hover:text-gold-light">Book a free initial call.</a></em></p>
  `,
  faqItems: [
    {
      question: "Does the AI Act apply to small businesses?",
      answer:
        "Yes. The core obligations — particularly the AI literacy requirement (Art. 4) and prohibited practices (Art. 5) — apply to all businesses using AI, regardless of size. However, SMEs benefit from specific reliefs: lower fines, simplified documentation, priority access to regulatory sandboxes, and free participation. The Digital Omnibus also proposes extending these reliefs to 'small midcaps' (up to 750 employees).",
    },
    {
      question: "We only use ChatGPT — does the AI Act even apply to us?",
      answer:
        "Yes. If employees use ChatGPT or other AI tools professionally, your company is a 'deployer' under the AI Act. Since February 2025, the AI literacy obligation applies: you must ensure your staff is trained in using AI. From August 2026, transparency obligations follow — for example, when customers interact with an AI system.",
    },
    {
      question: "What is the AI literacy obligation and how do I comply?",
      answer:
        "Art. 4 of the AI Act obliges all businesses using AI to ensure their staff has sufficient AI competence. This means: conduct training tailored to the person's role and the risk of the system in use. Training should be documented. There is no prescribed format — internal sessions, e-learning, or external workshops all fulfil the obligation as long as they are verifiable. The European Commission has published an FAQ and a database of AI literacy programmes.",
    },
    {
      question: "Is the August 2026 high-risk deadline really being postponed?",
      answer:
        "Possibly. The European Commission's Digital Omnibus (November 2025) proposes postponing high-risk obligations to December 2027. The European Council broadly agreed in March 2026, the Parliament is still deliberating. Until the legislative process is complete, the original August 2026 deadline applies. The safest strategy: prepare as if August 2026 is real.",
    },
    {
      question: "Is AI in recruitment really high-risk?",
      answer:
        "Yes. Annex III point 4 of the AI Act explicitly classifies AI systems for recruitment, application filtering, candidate assessment, and for promotion and termination decisions as high-risk. This also covers AI for performance monitoring and task allocation based on personality traits. Companies deploying such systems must meet full deployer obligations: human oversight, log retention, worker information, and potentially a data protection impact assessment.",
    },
    {
      question: "What does the AI Act have to do with Equal Pay?",
      answer:
        "Companies using AI for pay analysis, compensation benchmarking, or performance evaluations may be subject to both the AI Act (high-risk under Annex III point 4) and the EU Pay Transparency Directive (deadline: 7 June 2026). Both regulations affect the HR domain and require coordinated compliance. Businesses should address both topics together.",
    },
    {
      question: "What does non-compliance with the AI Act cost?",
      answer:
        "Fines are tiered: up to €35m or 7% of global annual turnover for prohibited practices, up to €15m or 3% for high-risk and transparency violations, up to €7.5m or 1% for false information to authorities. For SMEs, the lower value applies (fixed amount or percentage). The amount depends on factors like severity, duration, cooperation, and company size.",
    },
    {
      question: "Does my company need an AI officer?",
      answer:
        "The AI Act does not prescribe a formal 'AI officer' role — unlike the GDPR's data protection officer. However, it requires companies to define responsibilities for AI governance and appoint competent individuals for human oversight. In practice, it makes sense to establish clear accountability — whether as a dedicated role or as an extension of existing positions (e.g. compliance, IT, data protection).",
    },
  ],
};
