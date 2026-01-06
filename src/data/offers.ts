export interface Offer {
  id: string;
  provider: string;
  logo: string;
  category: OfferCategory;
  title: string;
  description: string;
  benefit: string;
  eligibility: string[];
  verificationMethod: string;
  validityPeriod: string;
  requiresCreditCard: boolean;
  claimSteps: string[];
  sourceUrl: string;
  regions: string[];
  tags: string[];
}

export type OfferCategory = 
  | 'cloud'
  | 'ai'
  | 'developer'
  | 'design'
  | 'learning'
  | 'productivity';

export const categoryLabels: Record<OfferCategory, string> = {
  cloud: 'Cloud Platforms',
  ai: 'AI Tools',
  developer: 'Developer Tools',
  design: 'Design Tools',
  learning: 'Learning Platforms',
  productivity: 'Productivity',
};

export const categoryColors: Record<OfferCategory, string> = {
  cloud: 'bg-blue-100 text-blue-700',
  ai: 'bg-violet-100 text-violet-700',
  developer: 'bg-emerald-100 text-emerald-700',
  design: 'bg-pink-100 text-pink-700',
  learning: 'bg-amber-100 text-amber-700',
  productivity: 'bg-cyan-100 text-cyan-700',
};

export const offers: Offer[] = [
  {
    id: 'github-education',
    provider: 'GitHub',
    logo: '🐙',
    category: 'developer',
    title: 'GitHub Student Developer Pack',
    description: 'Access to 100+ developer tools and services for free',
    benefit: 'Free GitHub Pro, Copilot, and 100+ partner offers worth $200k+',
    eligibility: ['.edu email', '.ac.in email', 'Valid student ID'],
    verificationMethod: 'Email verification + Student ID upload',
    validityPeriod: 'Until graduation',
    requiresCreditCard: false,
    claimSteps: [
      'Visit education.github.com',
      'Click "Get your pack"',
      'Verify your student status with school email',
      'Upload student ID if required',
      'Access all partner offers from dashboard'
    ],
    sourceUrl: 'https://education.github.com/pack',
    regions: ['Global'],
    tags: ['most-popular', 'verified']
  },
  {
    id: 'azure-students',
    provider: 'Microsoft Azure',
    logo: '☁️',
    category: 'cloud',
    title: 'Azure for Students',
    description: 'Free Azure credits and services for students',
    benefit: '$100 Azure credits + 25 free services for 12 months',
    eligibility: ['.edu email', '.ac.in email', 'Enrolled student'],
    verificationMethod: 'Academic email verification',
    validityPeriod: '12 months, renewable',
    requiresCreditCard: false,
    claimSteps: [
      'Go to azure.microsoft.com/free/students',
      'Sign in with your school email',
      'Verify your academic status',
      'Activate your free credits',
      'Start using Azure services'
    ],
    sourceUrl: 'https://azure.microsoft.com/free/students/',
    regions: ['Global'],
    tags: ['no-credit-card', 'verified']
  },
  {
    id: 'aws-educate',
    provider: 'Amazon Web Services',
    logo: '🔶',
    category: 'cloud',
    title: 'AWS Educate',
    description: 'Cloud learning and AWS credits for students',
    benefit: 'Free AWS credits + Cloud learning pathways',
    eligibility: ['Any student email', 'Self-certification'],
    verificationMethod: 'Email verification',
    validityPeriod: 'While enrolled',
    requiresCreditCard: false,
    claimSteps: [
      'Visit aws.amazon.com/education/awseducate',
      'Create an AWS Educate account',
      'Verify with your student email',
      'Access learning pathways and credits'
    ],
    sourceUrl: 'https://aws.amazon.com/education/awseducate/',
    regions: ['Global'],
    tags: ['no-credit-card', 'learning']
  },
  {
    id: 'google-cloud-students',
    provider: 'Google Cloud',
    logo: '🌐',
    category: 'cloud',
    title: 'Google Cloud Student Credits',
    description: 'Free Google Cloud credits through GitHub Student Pack',
    benefit: '$50-$300 Google Cloud credits',
    eligibility: ['GitHub Student Developer Pack member'],
    verificationMethod: 'GitHub Student verification',
    validityPeriod: '12 months',
    requiresCreditCard: false,
    claimSteps: [
      'Get GitHub Student Developer Pack first',
      'Access Google Cloud offer from pack dashboard',
      'Link your Google account',
      'Activate credits'
    ],
    sourceUrl: 'https://cloud.google.com/edu/',
    regions: ['Global'],
    tags: ['requires-github-pack']
  },
  {
    id: 'jetbrains-students',
    provider: 'JetBrains',
    logo: '🧠',
    category: 'developer',
    title: 'JetBrains All Products Pack',
    description: 'Free access to all JetBrains IDEs',
    benefit: 'All professional IDEs free (IntelliJ, PyCharm, WebStorm, etc.)',
    eligibility: ['.edu email', '.ac.in email', 'ISIC card'],
    verificationMethod: 'Academic email or ISIC verification',
    validityPeriod: '1 year, renewable',
    requiresCreditCard: false,
    claimSteps: [
      'Visit jetbrains.com/student',
      'Apply with your academic email',
      'Verify your student status',
      'Download and activate any JetBrains IDE'
    ],
    sourceUrl: 'https://www.jetbrains.com/community/education/',
    regions: ['Global'],
    tags: ['verified', 'premium-tools']
  },
  {
    id: 'figma-education',
    provider: 'Figma',
    logo: '🎨',
    category: 'design',
    title: 'Figma Education',
    description: 'Free Figma Professional for students',
    benefit: 'Figma Professional plan free + FigJam',
    eligibility: ['.edu email', '.ac.in email'],
    verificationMethod: 'Academic email verification',
    validityPeriod: '2 years, renewable',
    requiresCreditCard: false,
    claimSteps: [
      'Go to figma.com/education',
      'Apply with your school email',
      'Wait for verification (usually instant)',
      'Get full Professional access'
    ],
    sourceUrl: 'https://www.figma.com/education/',
    regions: ['Global'],
    tags: ['design', 'verified']
  },
  {
    id: 'notion-education',
    provider: 'Notion',
    logo: '📝',
    category: 'productivity',
    title: 'Notion Education',
    description: 'Free Notion Plus for students',
    benefit: 'Notion Plus plan with unlimited blocks',
    eligibility: ['.edu email', '.ac.in email'],
    verificationMethod: 'Academic email verification',
    validityPeriod: 'While student email is active',
    requiresCreditCard: false,
    claimSteps: [
      'Sign up at notion.so with school email',
      'Go to Settings & Members',
      'Claim your free education plan',
      'Enjoy unlimited blocks and features'
    ],
    sourceUrl: 'https://www.notion.so/product/notion-for-education',
    regions: ['Global'],
    tags: ['productivity', 'no-credit-card']
  },
  {
    id: 'canva-education',
    provider: 'Canva',
    logo: '🖼️',
    category: 'design',
    title: 'Canva for Education',
    description: 'Free Canva Pro for students and teachers',
    benefit: 'Canva Pro with premium templates and AI features',
    eligibility: ['.edu email', '.ac.in email', 'Student verification'],
    verificationMethod: 'SheerID verification',
    validityPeriod: 'Until graduation',
    requiresCreditCard: false,
    claimSteps: [
      'Visit canva.com/education',
      'Click "Get verified"',
      'Verify through SheerID',
      'Access all Pro features'
    ],
    sourceUrl: 'https://www.canva.com/education/',
    regions: ['Global'],
    tags: ['design', 'ai-features']
  },
  {
    id: 'copilot-students',
    provider: 'GitHub Copilot',
    logo: '🤖',
    category: 'ai',
    title: 'GitHub Copilot for Students',
    description: 'AI pair programmer for free',
    benefit: 'GitHub Copilot free with Student Developer Pack',
    eligibility: ['GitHub Student Developer Pack member'],
    verificationMethod: 'Part of GitHub Student Pack',
    validityPeriod: 'Until graduation',
    requiresCreditCard: false,
    claimSteps: [
      'Get GitHub Student Developer Pack',
      'Enable Copilot in GitHub settings',
      'Install Copilot extension in your IDE',
      'Start coding with AI assistance'
    ],
    sourceUrl: 'https://github.com/features/copilot',
    regions: ['Global'],
    tags: ['ai', 'coding']
  },
  {
    id: 'coursera-campus',
    provider: 'Coursera',
    logo: '📚',
    category: 'learning',
    title: 'Coursera for Campus',
    description: 'Free courses if your college has a partnership',
    benefit: 'Unlimited access to 4,000+ courses',
    eligibility: ['College must have Coursera partnership'],
    verificationMethod: 'Institutional login',
    validityPeriod: 'While enrolled',
    requiresCreditCard: false,
    claimSteps: [
      'Check if your institution is a Coursera partner',
      'Login with institutional credentials',
      'Access courses through campus portal',
      'Get certificates for completed courses'
    ],
    sourceUrl: 'https://www.coursera.org/campus',
    regions: ['Global'],
    tags: ['learning', 'certificates']
  },
  {
    id: 'linkedin-learning',
    provider: 'LinkedIn Learning',
    logo: '💼',
    category: 'learning',
    title: 'LinkedIn Learning for Students',
    description: 'Free access through many university libraries',
    benefit: '16,000+ courses on business, tech, and creative skills',
    eligibility: ['University library access required'],
    verificationMethod: 'Library/institutional login',
    validityPeriod: 'While enrolled',
    requiresCreditCard: false,
    claimSteps: [
      'Check your university library website',
      'Look for LinkedIn Learning access',
      'Login with your student credentials',
      'Add certificates to your LinkedIn profile'
    ],
    sourceUrl: 'https://learning.linkedin.com/',
    regions: ['Global'],
    tags: ['learning', 'career']
  },
  {
    id: 'mongodb-students',
    provider: 'MongoDB',
    logo: '🍃',
    category: 'developer',
    title: 'MongoDB Atlas Student Pack',
    description: 'Free MongoDB Atlas credits and certifications',
    benefit: '$50 MongoDB Atlas credits + free certification',
    eligibility: ['GitHub Student Developer Pack member'],
    verificationMethod: 'GitHub Student verification',
    validityPeriod: '12 months',
    requiresCreditCard: false,
    claimSteps: [
      'Get GitHub Student Developer Pack',
      'Access MongoDB offer from dashboard',
      'Create MongoDB Atlas account',
      'Apply credits and take free certification'
    ],
    sourceUrl: 'https://www.mongodb.com/students',
    regions: ['Global'],
    tags: ['database', 'certification']
  },
  {
    id: 'digitalocean-students',
    provider: 'DigitalOcean',
    logo: '🌊',
    category: 'cloud',
    title: 'DigitalOcean Student Credits',
    description: 'Free cloud credits for students',
    benefit: '$200 in DigitalOcean credits over 12 months',
    eligibility: ['GitHub Student Developer Pack member'],
    verificationMethod: 'GitHub Student verification',
    validityPeriod: '12 months',
    requiresCreditCard: false,
    claimSteps: [
      'Get GitHub Student Developer Pack',
      'Access DigitalOcean offer',
      'Create DigitalOcean account',
      'Credits applied automatically'
    ],
    sourceUrl: 'https://www.digitalocean.com/github-students',
    regions: ['Global'],
    tags: ['cloud', 'hosting']
  },
  {
    id: 'autodesk-students',
    provider: 'Autodesk',
    logo: '🏗️',
    category: 'design',
    title: 'Autodesk Education',
    description: 'Free access to AutoCAD, Maya, Fusion 360, and more',
    benefit: 'All Autodesk products free for students',
    eligibility: ['.edu email', '.ac.in email', 'Student verification'],
    verificationMethod: 'SheerID verification',
    validityPeriod: '1 year, renewable',
    requiresCreditCard: false,
    claimSteps: [
      'Visit autodesk.com/education',
      'Create an Autodesk account',
      'Verify student status through SheerID',
      'Download any Autodesk product'
    ],
    sourceUrl: 'https://www.autodesk.com/education/edu-software',
    regions: ['Global'],
    tags: ['3d', 'engineering']
  },
  {
    id: 'adobe-students',
    provider: 'Adobe',
    logo: '🎬',
    category: 'design',
    title: 'Adobe Creative Cloud Student',
    description: 'Discounted Creative Cloud for students',
    benefit: '60%+ discount on Creative Cloud All Apps',
    eligibility: ['Any student with valid ID'],
    verificationMethod: 'SheerID or student ID',
    validityPeriod: 'While enrolled',
    requiresCreditCard: true,
    claimSteps: [
      'Visit adobe.com/creativecloud/plans',
      'Select "Students and Teachers"',
      'Verify your status through SheerID',
      'Get discounted subscription'
    ],
    sourceUrl: 'https://www.adobe.com/creativecloud/plans.html',
    regions: ['Global'],
    tags: ['discounted', 'creative']
  },
  {
    id: 'microsoft365-education',
    provider: 'Microsoft',
    logo: '📊',
    category: 'productivity',
    title: 'Microsoft 365 Education',
    description: 'Free Office 365 for students',
    benefit: 'Word, Excel, PowerPoint, Teams, and 1TB OneDrive',
    eligibility: ['.edu email', '.ac.in email'],
    verificationMethod: 'Academic email verification',
    validityPeriod: 'While email is active',
    requiresCreditCard: false,
    claimSteps: [
      'Go to microsoft.com/education',
      'Enter your school email',
      'Verify your student status',
      'Download Office apps or use online'
    ],
    sourceUrl: 'https://www.microsoft.com/education/products/office',
    regions: ['Global'],
    tags: ['productivity', 'essential']
  },
  {
    id: 'namecheap-students',
    provider: 'Namecheap',
    logo: '🌐',
    category: 'developer',
    title: 'Free Domain via GitHub Student Pack',
    description: 'Free .me domain for students',
    benefit: 'Free .me domain for 1 year + SSL certificate',
    eligibility: ['GitHub Student Developer Pack member'],
    verificationMethod: 'GitHub Student verification',
    validityPeriod: '1 year',
    requiresCreditCard: false,
    claimSteps: [
      'Get GitHub Student Developer Pack',
      'Access Namecheap offer',
      'Choose your .me domain',
      'Domain + SSL activated'
    ],
    sourceUrl: 'https://nc.me/',
    regions: ['Global'],
    tags: ['domain', 'hosting']
  },
  {
    id: 'replit-students',
    provider: 'Replit',
    logo: '⚡',
    category: 'developer',
    title: 'Replit for Education',
    description: 'Free Hacker plan for students',
    benefit: 'Unlimited private Repls, boosted compute',
    eligibility: ['GitHub Student Developer Pack member'],
    verificationMethod: 'GitHub Student verification',
    validityPeriod: 'While student',
    requiresCreditCard: false,
    claimSteps: [
      'Get GitHub Student Developer Pack',
      'Link Replit with GitHub',
      'Access Hacker plan features',
      'Start coding in browser'
    ],
    sourceUrl: 'https://replit.com/site/github-students',
    regions: ['Global'],
    tags: ['coding', 'cloud-ide']
  },
  {
    id: 'heroku-students',
    provider: 'Heroku',
    logo: '🚀',
    category: 'cloud',
    title: 'Heroku Student Credits',
    description: 'Free platform credits via GitHub Student Pack',
    benefit: '$13/month credit for 24 months',
    eligibility: ['GitHub Student Developer Pack member'],
    verificationMethod: 'GitHub Student verification',
    validityPeriod: '24 months',
    requiresCreditCard: true,
    claimSteps: [
      'Get GitHub Student Developer Pack',
      'Access Heroku offer from dashboard',
      'Create Heroku account',
      'Add payment method, credits applied'
    ],
    sourceUrl: 'https://www.heroku.com/students',
    regions: ['Global'],
    tags: ['deployment', 'requires-card']
  },
  {
    id: 'openai-students',
    provider: 'OpenAI',
    logo: '🧬',
    category: 'ai',
    title: 'OpenAI API Credits (via GitHub)',
    description: 'Free API credits for AI development',
    benefit: 'API credits for GPT, DALL-E, Whisper',
    eligibility: ['GitHub Student Developer Pack member'],
    verificationMethod: 'GitHub Student verification',
    validityPeriod: '12 months',
    requiresCreditCard: false,
    claimSteps: [
      'Get GitHub Student Developer Pack',
      'Access OpenAI offer',
      'Create OpenAI account',
      'Credits applied for API usage'
    ],
    sourceUrl: 'https://openai.com/',
    regions: ['Global'],
    tags: ['ai', 'api']
  }
];

export const eligibleDomains = [
  '.edu',
  '.ac.in',
  '.edu.in',
  '.ac.uk',
  '.edu.au',
  '.edu.sg',
  '.edu.my',
  '.edu.ph',
  '.edu.cn',
  '.edu.hk',
  '.edu.tw',
  '.ac.jp',
  '.edu.br',
  '.edu.mx',
  '.edu.co',
  '.edu.ar',
  '.edu.za',
  '.ac.nz',
  '.edu.eg',
  '.edu.ng',
  '.edu.pk',
  '.edu.bd',
  '.edu.lk',
  '.edu.np',
  '.ac.ke',
  '.edu.gh',
  '.edu.et'
];

export function isEligibleDomain(email: string): { eligible: boolean; domain: string } {
  const domain = email.substring(email.lastIndexOf('@') + 1).toLowerCase();
  const isEligible = eligibleDomains.some(eligibleDomain => 
    domain.endsWith(eligibleDomain) || domain.includes('.edu') || domain.includes('.ac.')
  );
  return { eligible: isEligible, domain };
}

export function getOffersByCategory(category: OfferCategory): Offer[] {
  return offers.filter(offer => offer.category === category);
}

export function filterOffers(filters: {
  categories?: OfferCategory[];
  noCreditCard?: boolean;
  searchQuery?: string;
}): Offer[] {
  return offers.filter(offer => {
    if (filters.categories && filters.categories.length > 0) {
      if (!filters.categories.includes(offer.category)) return false;
    }
    if (filters.noCreditCard && offer.requiresCreditCard) return false;
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      return (
        offer.provider.toLowerCase().includes(query) ||
        offer.title.toLowerCase().includes(query) ||
        offer.description.toLowerCase().includes(query) ||
        offer.benefit.toLowerCase().includes(query)
      );
    }
    return true;
  });
}
