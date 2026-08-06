/**
 * Single source of truth for identity, contact, and nav.
 *
 * Reconciled against the LinkedIn profile export in /resumes/Profile.pdf.
 * Where LinkedIn and a résumé disagree on a title, date, or location, LinkedIn
 * wins and the more descriptive version moves to the role's `note` field.
 *
 * Three things LinkedIn does not carry, so the résumés are the only source:
 * the Reel Estate role, the 2014 FCC and USCIS contracts, and the self-directed
 * period in 2022. Nothing here is inferred beyond that.
 */

export const site = {
  name: 'Jeff Goyette',
  /** Legal / résumé name. Emitted as schema.org alternateName so search
   *  engines connect this site to the LinkedIn profile in `profiles`. */
  fullName: 'Jeffrey Goyette',
  domain: 'jeffgoyette.com',
  url: 'https://jeffgoyette.com',
  email: 'jeff@jeffgoyette.com',
  location: 'Charlotte, NC',

  /** Used in <title>, OG tags, and the JSON-LD Person schema. */
  role: 'Cofounder, CTO, and full-stack engineer',
  description:
    'Cofounder and CTO at Reel Estate, an AI platform for real estate. Twelve years building production systems in regulated environments — federal agencies, banking, telecom, and AI SaaS.',

  /** Hero statement. Short sentences, no hedging. */
  headline: ['I build the system,', 'then the pipeline', 'that proves it works.'],
  // Keep this a claim, not a list. The pipeline diagram below it in the hero
  // does the enumerating; if both list capabilities, the hero says one thing
  // twice.
  standfirst:
    'Cofounder and CTO at Reel Estate. Twelve years of production engineering behind that — federal agencies, banking, telecom, retail — and the instrumentation that tells you whether any of it landed.',
} as const;

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Résumé', href: '/resume' },
] as const;

/**
 * Profile links. Delete any you do not want; the footer renders whatever
 * survives. `handle` is what's shown, `href` is where it goes.
 *
 * The LinkedIn slug is `jeffrey-g-a3520410a` — verified against the profile
 * export. The `jeffrey-goyette-a3520410a` variant printed on both current
 * résumés 404s, which is worth fixing on the documents themselves.
 */
export const profiles: { label: string; handle: string; href: string }[] = [
  {
    label: 'LinkedIn',
    handle: 'jeffrey-g-a3520410a',
    href: 'https://www.linkedin.com/in/jeffrey-g-a3520410a/',
  },
  // Add GitHub here once you have a public profile worth linking — none of
  // the résumés carry one, so I left it out rather than guess the handle.
];

/**
 * The two ways the résumé is currently aimed. Both documents describe the same
 * twelve years; they differ in which half leads. Rendered as a toggle on
 * /resume so a reader can pick the lens rather than being handed one.
 *
 * `domains` are keys from the role `domain` enum — they drive which career
 * spans stay lit when a lens is active.
 */
export const lenses = [
  {
    key: 'ai',
    label: 'AI and product',
    blurb:
      'AI in production since 2023 — first the telephony platform behind AI voice agents, now generative image and video, with the provenance and compliance layer underneath it.',
    domains: ['ai', 'telecom'],
  },
  {
    key: 'platform',
    label: 'Platform and infrastructure',
    blurb:
      'Production infrastructure in regulated environments — a bank payments platform, the on-prem Federal Reserve connection, certificate and key lifecycle, Kubernetes and Istio down through VPC design.',
    domains: ['finance', 'commerce', 'public'],
  },
] as const;

/**
 * Rendered as a filterable grid on the homepage and at the foot of /resume.
 * Order matters: the first three groups are the differentiated ones, so they
 * lead. `blurb` is what the group is for, in one line — without it a skills
 * list is just a keyword dump.
 */
export const skills: { group: string; blurb: string; items: string[] }[] = [
  {
    group: 'AI engineering',
    blurb: 'Agentic tooling, built and operated rather than evaluated.',
    items: [
      'Claude Code',
      'Anthropic API',
      'Custom skill authoring',
      'Custom MCP servers',
      'MCP integration',
      'Agentic workflows',
      'Prompt engineering',
    ],
  },
  {
    group: 'Generative pipelines',
    blurb: 'Model calls are slow, expensive, and fail oddly. None of it runs inline.',
    items: [
      'Runway Gen-4',
      'Image staging models',
      'Image-to-video',
      'Replicate',
      'Retell AI',
      'LiveKit (SIP and Agents)',
      'Queue-based orchestration',
    ],
  },
  {
    group: 'Compliance and security',
    blurb: 'The gate is legal review, not the demo.',
    items: [
      'C2PA provenance',
      'California AB 723 / SB 942',
      'TCPA',
      'SOC 2 readiness',
      'mTLS',
      'PGP',
      'Certificate and key lifecycle',
      'Log4j2 remediation',
      'Disaster recovery',
    ],
  },
  {
    group: 'Languages',
    blurb: 'Java first, TypeScript daily, the rest where they fit.',
    items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'Lua', 'C#', 'SQL', 'CQL'],
  },
  {
    group: 'Frameworks',
    blurb: 'Twelve years of Spring, and the front end that sits on top of it.',
    items: [
      'Spring Boot',
      'Spring WebFlux',
      'Spring Cloud',
      'Spring Data',
      'JPA / Hibernate',
      'React',
      'Next.js',
      'Node.js',
    ],
  },
  {
    group: 'Infrastructure',
    blurb: 'From Istio routing down through VPC design.',
    items: [
      'Terraform',
      'CloudFormation',
      'Docker',
      'Kubernetes (GKE)',
      'Istio',
      'CI/CD',
      'VPC and network design',
      'Autoscaling',
    ],
  },
  {
    group: 'Cloud',
    blurb: 'Three providers, each with production behind it.',
    items: [
      'AWS — Lambda, Step Functions, Glue',
      'AWS — S3, RDS, Route 53, ELB',
      'GCP — GKE, Pub/Sub',
      'GCP — Cloud Run, Firestore',
      'Vercel',
    ],
  },
  {
    group: 'Data and messaging',
    blurb: 'Chosen for the write pattern, not the résumé line.',
    items: [
      'Cassandra',
      'MongoDB',
      'Postgres',
      'Kafka',
      'RabbitMQ',
      'Apache Camel',
      'Redis',
      'Spring Reactive',
    ],
  },
  {
    group: 'Testing',
    blurb: 'The habit that came out of teaching it for eighteen months.',
    items: ['JUnit 5', 'Mockito', 'Spring Test', 'WireMock', 'Jest', 'Playwright'],
  },
  {
    group: 'Growth and analytics',
    blurb: 'Which ad group produced a paying customer, not which produced clicks.',
    items: ['GA4', 'Google Tag Manager', 'Google Ads', 'Enhanced Conversions', 'UTM attribution'],
  },
  {
    group: 'Practice',
    blurb: 'How the work gets done when someone else has to maintain it.',
    items: [
      'Test-driven development',
      'Extreme programming',
      'Pair programming',
      'Code review',
      'Mentoring',
    ],
  },
];

export const education = [
  {
    credential: 'B.S. Software and Information Systems',
    institution: 'University of North Carolina at Charlotte',
    year: '',
  },
];

/**
 * `expired: true` renders the credential labelled as lapsed. Listing it that
 * way is stronger than either dropping it — the exam was still passed — or
 * leaving it looking current.
 */
export const certifications: {
  credential: string;
  institution: string;
  year: string;
  expired?: boolean;
}[] = [
  {
    credential: 'Professional Cloud Architect',
    institution: 'Google Cloud',
    year: '',
    expired: true,
  },
  {
    credential: 'Azure AI Fundamentals (AI-900)',
    institution: 'Microsoft',
    year: '',
  },
];
