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
  | 'learning'
  | 'travel'
  | 'government'
  | 'research'
  | 'hardware'
  | 'career'
  | 'developer'
  | 'design'
  | 'productivity';

export const categoryLabels: Record<OfferCategory, string> = {
  cloud: 'Cloud & Infrastructure',
  learning: 'Learning & Certifications',
  travel: 'Travel & Transport',
  government: 'Scholarships & Grants',
  research: 'Research & Startups',
  hardware: 'Hardware & Electronics',
  career: 'Career & Internships',
  developer: 'Developer Tools',
  design: 'Design Tools',
  productivity: 'Productivity',
};

export const categoryColors: Record<OfferCategory, string> = {
  cloud: 'bg-blue-100 text-blue-700',
  learning: 'bg-amber-100 text-amber-700',
  travel: 'bg-teal-100 text-teal-700',
  government: 'bg-indigo-100 text-indigo-700',
  research: 'bg-purple-100 text-purple-700',
  hardware: 'bg-orange-100 text-orange-700',
  career: 'bg-rose-100 text-rose-700',
  developer: 'bg-emerald-100 text-emerald-700',
  design: 'bg-pink-100 text-pink-700',
  productivity: 'bg-cyan-100 text-cyan-700',
};

export const categoryIcons: Record<OfferCategory, string> = {
  cloud: '☁️',
  learning: '📚',
  travel: '✈️',
  government: '🏛️',
  research: '🔬',
  hardware: '💻',
  career: '💼',
  developer: '⚙️',
  design: '🎨',
  productivity: '📊',
};

export const offers: Offer[] = [
  // ===== CLOUD & INFRASTRUCTURE =====
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
    id: 'oracle-cloud-students',
    provider: 'Oracle Cloud',
    logo: '🔴',
    category: 'cloud',
    title: 'Oracle Cloud Free Tier',
    description: 'Always-free cloud services including VMs',
    benefit: 'Always-free VMs, databases, and $300 trial credits',
    eligibility: ['Any email', 'No student verification needed'],
    verificationMethod: 'Email verification',
    validityPeriod: 'Always free tier available',
    requiresCreditCard: true,
    claimSteps: [
      'Visit cloud.oracle.com/free',
      'Create Oracle Cloud account',
      'Add payment method for verification',
      'Access always-free resources'
    ],
    sourceUrl: 'https://www.oracle.com/cloud/free/',
    regions: ['Global'],
    tags: ['always-free', 'vms']
  },

  // ===== LEARNING & CERTIFICATIONS =====
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
    id: 'microsoft-learn-students',
    provider: 'Microsoft Learn',
    logo: '📖',
    category: 'learning',
    title: 'Microsoft Learn Student Hub',
    description: 'Free learning paths and certifications',
    benefit: 'Free certification exam vouchers + learning paths',
    eligibility: ['.edu email', '.ac.in email'],
    verificationMethod: 'Academic email verification',
    validityPeriod: 'While student',
    requiresCreditCard: false,
    claimSteps: [
      'Visit learn.microsoft.com/students',
      'Sign in with student email',
      'Access free learning paths',
      'Claim certification vouchers'
    ],
    sourceUrl: 'https://learn.microsoft.com/en-us/training/student-hub/',
    regions: ['Global'],
    tags: ['certifications', 'free']
  },
  {
    id: 'aws-certification-discount',
    provider: 'Amazon Web Services',
    logo: '🔶',
    category: 'learning',
    title: 'AWS Certification Discount',
    description: 'Discounted AWS certification exams for students',
    benefit: '50% off AWS certification exams',
    eligibility: ['AWS Educate member'],
    verificationMethod: 'AWS Educate account',
    validityPeriod: 'While enrolled in AWS Educate',
    requiresCreditCard: true,
    claimSteps: [
      'Join AWS Educate program',
      'Complete required learning paths',
      'Access certification discount voucher',
      'Apply at checkout for certification exam'
    ],
    sourceUrl: 'https://aws.amazon.com/certification/',
    regions: ['Global'],
    tags: ['certifications', 'discounted']
  },
  {
    id: 'nptel-swayam',
    provider: 'NPTEL/SWAYAM',
    logo: '🇮🇳',
    category: 'learning',
    title: 'NPTEL Free Courses',
    description: 'Free courses from IITs and IISc with certificates',
    benefit: 'Free video courses + optional paid certification',
    eligibility: ['Any Indian student'],
    verificationMethod: 'Email verification',
    validityPeriod: 'Semester-based',
    requiresCreditCard: false,
    claimSteps: [
      'Visit swayam.gov.in',
      'Browse NPTEL courses',
      'Enroll in courses for free',
      'Optionally pay for proctored certification exam'
    ],
    sourceUrl: 'https://nptel.ac.in/',
    regions: ['India'],
    tags: ['india', 'free', 'iit']
  },
  {
    id: 'udacity-nanodegree-discount',
    provider: 'Udacity',
    logo: '🎓',
    category: 'learning',
    title: 'Udacity Student Discount',
    description: 'Discounted Nanodegree programs for students',
    benefit: 'Up to 75% off Nanodegree programs',
    eligibility: ['Valid student ID', 'SheerID verification'],
    verificationMethod: 'SheerID student verification',
    validityPeriod: 'While enrolled',
    requiresCreditCard: true,
    claimSteps: [
      'Visit udacity.com',
      'Select a Nanodegree program',
      'Apply student discount at checkout',
      'Verify through SheerID'
    ],
    sourceUrl: 'https://www.udacity.com/',
    regions: ['Global'],
    tags: ['discounted', 'nanodegree']
  },

  // ===== TRAVEL & TRANSPORT =====
  {
    id: 'isic-card',
    provider: 'ISIC',
    logo: '🎫',
    category: 'travel',
    title: 'International Student Identity Card',
    description: 'Globally recognized student ID with 150,000+ discounts',
    benefit: 'Discounts on travel, attractions, shopping worldwide',
    eligibility: ['Full-time student', 'Valid student ID'],
    verificationMethod: 'Student ID + enrollment proof',
    validityPeriod: '1 year from issue',
    requiresCreditCard: true,
    claimSteps: [
      'Visit isic.org',
      'Apply for ISIC card (small fee)',
      'Upload student documents',
      'Receive physical or digital card',
      'Use for discounts globally'
    ],
    sourceUrl: 'https://www.isic.org/',
    regions: ['Global'],
    tags: ['travel', 'discounts']
  },
  {
    id: 'indian-railways-concession',
    provider: 'Indian Railways',
    logo: '🚂',
    category: 'travel',
    title: 'Railway Student Concession',
    description: 'Discounted train tickets for students',
    benefit: 'Up to 50% off on second class train fares',
    eligibility: ['Bona fide student certificate from institution'],
    verificationMethod: 'Concession certificate from college',
    validityPeriod: 'Per journey',
    requiresCreditCard: false,
    claimSteps: [
      'Obtain concession certificate from college',
      'Visit railway booking counter',
      'Present student ID and certificate',
      'Book ticket with concession'
    ],
    sourceUrl: 'https://www.irctc.co.in/',
    regions: ['India'],
    tags: ['india', 'travel']
  },
  {
    id: 'delhi-metro-student',
    provider: 'Delhi Metro',
    logo: '🚇',
    category: 'travel',
    title: 'Delhi Metro Student Card',
    description: 'Discounted metro fares for Delhi students',
    benefit: 'Discounted fares on Delhi Metro',
    eligibility: ['Student of Delhi/NCR institution'],
    verificationMethod: 'Student ID + institution letter',
    validityPeriod: 'Academic year',
    requiresCreditCard: false,
    claimSteps: [
      'Get application form from Delhi Metro station',
      'Get attestation from institution',
      'Submit with student ID proof',
      'Collect student travel card'
    ],
    sourceUrl: 'https://www.delhimetrorail.com/',
    regions: ['Delhi NCR'],
    tags: ['india', 'metro', 'daily']
  },
  {
    id: 'flixbus-student-discount',
    provider: 'FlixBus',
    logo: '🚌',
    category: 'travel',
    title: 'FlixBus Student Discount',
    description: 'Discounted bus tickets across Europe and USA',
    benefit: '10-20% off bus tickets with ISIC',
    eligibility: ['ISIC card holder'],
    verificationMethod: 'ISIC card',
    validityPeriod: 'Ongoing',
    requiresCreditCard: true,
    claimSteps: [
      'Get ISIC card first',
      'Visit flixbus.com or app',
      'Apply ISIC discount code',
      'Book discounted ticket'
    ],
    sourceUrl: 'https://www.flixbus.com/',
    regions: ['Europe', 'USA'],
    tags: ['travel', 'bus']
  },
  {
    id: 'airtel-student-plan',
    provider: 'Airtel',
    logo: '📱',
    category: 'travel',
    title: 'Airtel Student Offer',
    description: 'Special mobile plans for students',
    benefit: 'Discounted prepaid/postpaid plans',
    eligibility: ['Valid student ID'],
    verificationMethod: 'Student ID verification',
    validityPeriod: 'While student',
    requiresCreditCard: false,
    claimSteps: [
      'Visit Airtel store or website',
      'Ask for student plan',
      'Show valid student ID',
      'Activate student offer'
    ],
    sourceUrl: 'https://www.airtel.in/',
    regions: ['India'],
    tags: ['india', 'mobile']
  },

  // ===== GOVERNMENT SCHOLARSHIPS & GRANTS =====
  {
    id: 'national-scholarship-portal',
    provider: 'Government of India',
    logo: '🏛️',
    category: 'government',
    title: 'National Scholarship Portal',
    description: 'Central & state government scholarships',
    benefit: 'Various scholarships based on merit and category',
    eligibility: ['Indian student', 'Category/merit based'],
    verificationMethod: 'Aadhaar + income/caste certificates',
    validityPeriod: 'Annual renewal',
    requiresCreditCard: false,
    claimSteps: [
      'Visit scholarships.gov.in',
      'Register with Aadhaar',
      'Search eligible scholarships',
      'Apply with required documents',
      'Track application status'
    ],
    sourceUrl: 'https://scholarships.gov.in/',
    regions: ['India'],
    tags: ['india', 'scholarship', 'government']
  },
  {
    id: 'pm-vidyalakshmi',
    provider: 'Ministry of Finance, India',
    logo: '💰',
    category: 'government',
    title: 'PM Vidya Lakshmi Education Loan',
    description: 'Single window for education loans and scholarships',
    benefit: 'Access to education loans from multiple banks',
    eligibility: ['Indian student pursuing higher education'],
    verificationMethod: 'Aadhaar + admission proof',
    validityPeriod: 'Course duration',
    requiresCreditCard: false,
    claimSteps: [
      'Visit vidyalakshmi.co.in',
      'Register and create profile',
      'Search for loan schemes',
      'Apply to multiple banks',
      'Track loan status'
    ],
    sourceUrl: 'https://www.vidyalakshmi.co.in/',
    regions: ['India'],
    tags: ['india', 'loan', 'education']
  },
  {
    id: 'inspire-scholarship',
    provider: 'DST, Government of India',
    logo: '🔬',
    category: 'government',
    title: 'INSPIRE Scholarship',
    description: 'For students pursuing science education',
    benefit: '₹80,000/year for BSc/integrated MSc students',
    eligibility: ['Top 1% in Class 12', 'Pursuing natural sciences'],
    verificationMethod: 'Academic records',
    validityPeriod: '5 years',
    requiresCreditCard: false,
    claimSteps: [
      'Visit online-inspire.gov.in',
      'Check eligibility criteria',
      'Apply online during application window',
      'Submit academic documents',
      'Scholarship credited to bank account'
    ],
    sourceUrl: 'https://online-inspire.gov.in/',
    regions: ['India'],
    tags: ['india', 'science', 'merit']
  },
  {
    id: 'aicte-pragati-saksham',
    provider: 'AICTE',
    logo: '🎓',
    category: 'government',
    title: 'AICTE Pragati & Saksham',
    description: 'Scholarships for girls and differently-abled students',
    benefit: '₹50,000/year tuition + ₹2,000/month',
    eligibility: ['AICTE-approved institution', 'Girl students (Pragati) or PwD (Saksham)'],
    verificationMethod: 'Institution + category certificate',
    validityPeriod: 'Course duration',
    requiresCreditCard: false,
    claimSteps: [
      'Visit AICTE portal during application window',
      'Register with institution details',
      'Upload required certificates',
      'Institution verifies application',
      'Scholarship disbursed directly'
    ],
    sourceUrl: 'https://www.aicte-india.org/',
    regions: ['India'],
    tags: ['india', 'women', 'pwd']
  },
  {
    id: 'commonwealth-scholarship',
    provider: 'Commonwealth Secretariat',
    logo: '🌏',
    category: 'government',
    title: 'Commonwealth Scholarships',
    description: 'Full scholarships for Masters/PhD in UK',
    benefit: 'Full tuition + living expenses + flights',
    eligibility: ['Commonwealth country citizen', 'Outstanding academics'],
    verificationMethod: 'Academic transcripts + references',
    validityPeriod: 'Course duration',
    requiresCreditCard: false,
    claimSteps: [
      'Check eligibility on cscuk.org.uk',
      'Apply through your country nominating agency',
      'Prepare academic transcripts and references',
      'Interview if shortlisted',
      'Receive scholarship offer'
    ],
    sourceUrl: 'https://cscuk.fcdo.gov.uk/',
    regions: ['Commonwealth countries'],
    tags: ['international', 'masters', 'phd']
  },
  {
    id: 'fulbright-nehru',
    provider: 'USIEF',
    logo: '🇺🇸',
    category: 'government',
    title: 'Fulbright-Nehru Fellowships',
    description: 'Scholarships for Indian students to study in USA',
    benefit: 'Full funding for Masters/PhD in USA',
    eligibility: ['Indian citizen', 'Outstanding academics', 'Work experience for some'],
    verificationMethod: 'Academic records + work experience',
    validityPeriod: '1-2 years',
    requiresCreditCard: false,
    claimSteps: [
      'Visit usief.org.in',
      'Choose appropriate fellowship category',
      'Apply during application window (Feb-June)',
      'Interview if shortlisted',
      'Pre-departure orientation'
    ],
    sourceUrl: 'https://www.usief.org.in/',
    regions: ['India'],
    tags: ['india', 'usa', 'prestigious']
  },

  // ===== RESEARCH, INNOVATION & STARTUPS =====
  {
    id: 'startup-india-seed',
    provider: 'Startup India',
    logo: '🚀',
    category: 'research',
    title: 'Startup India Seed Fund',
    description: 'Seed funding for early-stage startups',
    benefit: 'Up to ₹50 lakh seed funding',
    eligibility: ['DPIIT registered startup', 'Less than 2 years old'],
    verificationMethod: 'DPIIT registration + pitch',
    validityPeriod: 'Based on milestone',
    requiresCreditCard: false,
    claimSteps: [
      'Register startup on startupindia.gov.in',
      'Apply for Startup India Seed Fund',
      'Submit business plan and projections',
      'Present to incubator',
      'Receive funding if approved'
    ],
    sourceUrl: 'https://seedfund.startupindia.gov.in/',
    regions: ['India'],
    tags: ['india', 'startup', 'funding']
  },
  {
    id: 'aws-activate',
    provider: 'Amazon Web Services',
    logo: '🔶',
    category: 'research',
    title: 'AWS Activate for Startups',
    description: 'Cloud credits for student startups',
    benefit: 'Up to $100,000 AWS credits',
    eligibility: ['Affiliated with accelerator/incubator', 'Early-stage startup'],
    verificationMethod: 'Incubator verification',
    validityPeriod: '2 years',
    requiresCreditCard: false,
    claimSteps: [
      'Join a partner accelerator or incubator',
      'Apply through AWS Activate portal',
      'Submit startup details',
      'Credits applied to AWS account'
    ],
    sourceUrl: 'https://aws.amazon.com/activate/',
    regions: ['Global'],
    tags: ['startup', 'cloud-credits']
  },
  {
    id: 'microsoft-founders-hub',
    provider: 'Microsoft',
    logo: '🪟',
    category: 'research',
    title: 'Microsoft for Startups',
    description: 'Azure credits and tools for startups',
    benefit: '$150,000 Azure credits + GitHub Enterprise + more',
    eligibility: ['B2B startup', 'Building on cloud'],
    verificationMethod: 'Application review',
    validityPeriod: '1-2 years based on tier',
    requiresCreditCard: false,
    claimSteps: [
      'Visit startups.microsoft.com',
      'Apply for Founders Hub',
      'Complete profile and application',
      'Access credits and benefits if approved'
    ],
    sourceUrl: 'https://www.microsoft.com/en-us/startups',
    regions: ['Global'],
    tags: ['startup', 'enterprise']
  },
  {
    id: 'iit-incubators',
    provider: 'IIT Incubators',
    logo: '🏫',
    category: 'research',
    title: 'IIT Incubation Programs',
    description: 'Incubation support at IIT research parks',
    benefit: 'Mentorship, workspace, funding access, patent support',
    eligibility: ['Innovative startup idea', 'Student or alumni preferred'],
    verificationMethod: 'Pitch and application',
    validityPeriod: '1-2 years',
    requiresCreditCard: false,
    claimSteps: [
      'Identify IIT incubator (e.g., IITM Research Park, IITD)',
      'Apply during cohort intake',
      'Pitch your idea',
      'Get incubated if selected'
    ],
    sourceUrl: 'https://www.iitm.ac.in/research-park',
    regions: ['India'],
    tags: ['india', 'incubation']
  },
  {
    id: 'notion-startups',
    provider: 'Notion',
    logo: '📝',
    category: 'research',
    title: 'Notion for Startups',
    description: 'Free Notion credits for startups',
    benefit: '$1,000 Notion credit + 6 months Plus plan',
    eligibility: ['Funded or in accelerator', 'Less than 50 employees'],
    verificationMethod: 'Partner verification',
    validityPeriod: '6 months',
    requiresCreditCard: false,
    claimSteps: [
      'Check partner list on notion.so/startups',
      'Apply through your accelerator/VC',
      'Create Notion workspace',
      'Credits applied automatically'
    ],
    sourceUrl: 'https://www.notion.so/startups',
    regions: ['Global'],
    tags: ['startup', 'productivity']
  },
  {
    id: 'dst-nidhi-prayas',
    provider: 'DST, India',
    logo: '🔬',
    category: 'research',
    title: 'NIDHI-PRAYAS Grant',
    description: 'Prototyping grant for student innovators',
    benefit: 'Up to ₹10 lakh for prototype development',
    eligibility: ['Innovator with prototype idea', 'Through TBI/incubator'],
    verificationMethod: 'TBI recommendation + pitch',
    validityPeriod: '18 months',
    requiresCreditCard: false,
    claimSteps: [
      'Connect with DST-supported TBI',
      'Submit innovation proposal',
      'Present to evaluation committee',
      'Receive grant in tranches',
      'Complete prototype development'
    ],
    sourceUrl: 'https://nidhi-prayas.in/',
    regions: ['India'],
    tags: ['india', 'prototype', 'innovation']
  },

  // ===== HARDWARE & ELECTRONICS =====
  {
    id: 'apple-education',
    provider: 'Apple',
    logo: '🍎',
    category: 'hardware',
    title: 'Apple Education Pricing',
    description: 'Discounted Macs and iPads for students',
    benefit: 'Up to ₹10,000 off on Macs + free AirPods (seasonal)',
    eligibility: ['College student', 'Parents of students'],
    verificationMethod: 'UNiDAYS or institution verification',
    validityPeriod: 'Ongoing',
    requiresCreditCard: true,
    claimSteps: [
      'Visit apple.com/in/shop/education',
      'Verify student status via UNiDAYS',
      'Browse education-priced products',
      'Add to cart and checkout',
      'Get free AirPods during Back to School'
    ],
    sourceUrl: 'https://www.apple.com/in/shop/education',
    regions: ['Global'],
    tags: ['hardware', 'discount']
  },
  {
    id: 'dell-student-discount',
    provider: 'Dell',
    logo: '💻',
    category: 'hardware',
    title: 'Dell Student Discount',
    description: 'Exclusive student pricing on Dell laptops',
    benefit: 'Up to 20% off on Dell laptops and accessories',
    eligibility: ['Valid student email'],
    verificationMethod: 'Student email or SheerID',
    validityPeriod: 'Ongoing',
    requiresCreditCard: true,
    claimSteps: [
      'Visit dell.com/student',
      'Create Dell Advantage for Students account',
      'Verify student status',
      'Access member-only pricing'
    ],
    sourceUrl: 'https://www.dell.com/en-in/lp/student-purchase-program',
    regions: ['Global'],
    tags: ['hardware', 'laptops']
  },
  {
    id: 'samsung-student-discount',
    provider: 'Samsung',
    logo: '📱',
    category: 'hardware',
    title: 'Samsung Student Discount',
    description: 'Discounts on phones, tablets, and laptops',
    benefit: 'Up to 30% off on select Samsung products',
    eligibility: ['Valid student ID'],
    verificationMethod: 'SheerID verification',
    validityPeriod: 'Ongoing',
    requiresCreditCard: true,
    claimSteps: [
      'Visit samsung.com/education',
      'Select your country and student program',
      'Verify through SheerID',
      'Shop with education discount'
    ],
    sourceUrl: 'https://www.samsung.com/in/offer/student-offers/',
    regions: ['Global'],
    tags: ['hardware', 'phones', 'tablets']
  },
  {
    id: 'lenovo-student-discount',
    provider: 'Lenovo',
    logo: '💻',
    category: 'hardware',
    title: 'Lenovo Student Store',
    description: 'Exclusive student pricing on ThinkPad and more',
    benefit: 'Up to 25% off on laptops and accessories',
    eligibility: ['Valid student email'],
    verificationMethod: 'ID.me or email verification',
    validityPeriod: 'Ongoing',
    requiresCreditCard: true,
    claimSteps: [
      'Visit lenovo.com/students',
      'Verify your student status',
      'Access student-exclusive pricing',
      'Additional coupons often available'
    ],
    sourceUrl: 'https://www.lenovo.com/in/en/d/deals/students',
    regions: ['Global'],
    tags: ['hardware', 'laptops']
  },
  {
    id: 'arduino-education',
    provider: 'Arduino',
    logo: '🔧',
    category: 'hardware',
    title: 'Arduino Education Discount',
    description: 'Discounted kits for students and educators',
    benefit: 'Up to 40% off on Arduino kits and boards',
    eligibility: ['Student or educator email'],
    verificationMethod: 'Academic email',
    validityPeriod: 'Ongoing',
    requiresCreditCard: true,
    claimSteps: [
      'Visit store.arduino.cc/education',
      'Create account with academic email',
      'Request education discount',
      'Purchase at discounted price'
    ],
    sourceUrl: 'https://store.arduino.cc/collections/education',
    regions: ['Global'],
    tags: ['hardware', 'electronics', 'iot']
  },
  {
    id: 'raspberry-pi-education',
    provider: 'Raspberry Pi',
    logo: '🍓',
    category: 'hardware',
    title: 'Raspberry Pi Educational Resources',
    description: 'Free learning resources and projects',
    benefit: 'Free curriculum, projects, and educator resources',
    eligibility: ['Anyone'],
    verificationMethod: 'None required',
    validityPeriod: 'Always available',
    requiresCreditCard: false,
    claimSteps: [
      'Visit raspberrypi.org/learn',
      'Browse free projects and courses',
      'Download resources',
      'Join educator community'
    ],
    sourceUrl: 'https://www.raspberrypi.org/learn/',
    regions: ['Global'],
    tags: ['hardware', 'free', 'learning']
  },

  // ===== CAREER & INTERNSHIPS =====
  {
    id: 'linkedin-premium-students',
    provider: 'LinkedIn',
    logo: '💼',
    category: 'career',
    title: 'LinkedIn Premium for Students',
    description: 'Discounted LinkedIn Premium Career',
    benefit: '50% off LinkedIn Premium Career',
    eligibility: ['Valid student email', 'Verified student status'],
    verificationMethod: 'SheerID verification',
    validityPeriod: '1 year',
    requiresCreditCard: true,
    claimSteps: [
      'Visit linkedin.com/premium',
      'Choose Premium Career plan',
      'Select student discount option',
      'Verify through SheerID',
      'Get InMail credits and insights'
    ],
    sourceUrl: 'https://www.linkedin.com/premium',
    regions: ['Global'],
    tags: ['career', 'networking']
  },
  {
    id: 'internshala-student',
    provider: 'Internshala',
    logo: '📋',
    category: 'career',
    title: 'Internshala Free Access',
    description: 'Free internship discovery platform',
    benefit: 'Free access to 100,000+ internships',
    eligibility: ['Any student email'],
    verificationMethod: 'Email verification',
    validityPeriod: 'Always free',
    requiresCreditCard: false,
    claimSteps: [
      'Visit internshala.com',
      'Create free account',
      'Complete your profile',
      'Apply to internships directly'
    ],
    sourceUrl: 'https://internshala.com/',
    regions: ['India'],
    tags: ['india', 'internship', 'free']
  },
  {
    id: 'handshake-platform',
    provider: 'Handshake',
    logo: '🤝',
    category: 'career',
    title: 'Handshake Career Platform',
    description: 'Job and internship platform for students',
    benefit: 'Free access to employer connections and applications',
    eligibility: ['University must be on Handshake'],
    verificationMethod: 'University SSO',
    validityPeriod: 'While enrolled',
    requiresCreditCard: false,
    claimSteps: [
      'Check if your university uses Handshake',
      'Login with university credentials',
      'Complete your profile',
      'Apply to jobs and attend virtual fairs'
    ],
    sourceUrl: 'https://joinhandshake.com/',
    regions: ['USA', 'UK', 'Global'],
    tags: ['career', 'jobs']
  },
  {
    id: 'unidays-verification',
    provider: 'UNiDAYS',
    logo: '🎓',
    category: 'career',
    title: 'UNiDAYS Student Verification',
    description: 'Verified student ID for hundreds of discounts',
    benefit: 'Access to exclusive student discounts across brands',
    eligibility: ['Enrolled full-time student'],
    verificationMethod: 'Institution email or NUS card',
    validityPeriod: 'While enrolled',
    requiresCreditCard: false,
    claimSteps: [
      'Download UNiDAYS app or visit myunidays.com',
      'Sign up with student email',
      'Verify your enrollment',
      'Access discounts from 100s of brands'
    ],
    sourceUrl: 'https://www.myunidays.com/',
    regions: ['Global'],
    tags: ['verification', 'discounts']
  },
  {
    id: 'student-beans',
    provider: 'Student Beans',
    logo: '🫘',
    category: 'career',
    title: 'Student Beans Verification',
    description: 'Student verification for global discounts',
    benefit: 'Access to student discounts on fashion, tech, food',
    eligibility: ['Any enrolled student'],
    verificationMethod: 'Student email or ID upload',
    validityPeriod: 'While enrolled',
    requiresCreditCard: false,
    claimSteps: [
      'Visit studentbeans.com',
      'Create account with student email',
      'Verify your status',
      'Browse and claim discounts'
    ],
    sourceUrl: 'https://www.studentbeans.com/',
    regions: ['Global'],
    tags: ['verification', 'lifestyle']
  },
  {
    id: 'amazon-prime-student',
    provider: 'Amazon',
    logo: '📦',
    category: 'career',
    title: 'Amazon Prime Student',
    description: 'Discounted Prime membership for students',
    benefit: '50% off Prime + 6 months free trial',
    eligibility: ['.edu email', '.ac.in email'],
    verificationMethod: 'Academic email verification',
    validityPeriod: '4 years max',
    requiresCreditCard: true,
    claimSteps: [
      'Visit amazon.com/joinstudent',
      'Sign in with Amazon account',
      'Verify with academic email',
      'Start 6-month free trial',
      'Pay 50% off thereafter'
    ],
    sourceUrl: 'https://www.amazon.com/amazonprime?primeCampaignId=studentWlpPr498',
    regions: ['USA', 'UK', 'India'],
    tags: ['lifestyle', 'streaming']
  },

  // ===== DEVELOPER TOOLS =====
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
    id: 'copilot-students',
    provider: 'GitHub Copilot',
    logo: '🤖',
    category: 'developer',
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

  // ===== DESIGN TOOLS =====
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

  // ===== PRODUCTIVITY =====
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
    id: 'google-workspace-education',
    provider: 'Google',
    logo: '🔵',
    category: 'productivity',
    title: 'Google Workspace for Education',
    description: 'Free Google apps through your institution',
    benefit: 'Gmail, Drive (unlimited), Docs, Meet, Classroom',
    eligibility: ['Institution must have Google Workspace'],
    verificationMethod: 'Institutional login',
    validityPeriod: 'While enrolled',
    requiresCreditCard: false,
    claimSteps: [
      'Check if your institution provides Google Workspace',
      'Login with institutional email',
      'Access unlimited Drive storage',
      'Use all Workspace apps'
    ],
    sourceUrl: 'https://edu.google.com/workspace-for-education/',
    regions: ['Global'],
    tags: ['productivity', 'collaboration']
  },
  {
    id: 'spotify-student',
    provider: 'Spotify',
    logo: '🎵',
    category: 'productivity',
    title: 'Spotify Premium Student',
    description: 'Discounted Spotify Premium with Hulu',
    benefit: 'Spotify Premium + Hulu + Showtime at 50% off',
    eligibility: ['Enrolled at accredited college/university'],
    verificationMethod: 'SheerID verification',
    validityPeriod: 'Up to 4 years',
    requiresCreditCard: true,
    claimSteps: [
      'Visit spotify.com/student',
      'Verify student status through SheerID',
      'Start discounted subscription',
      'Re-verify annually'
    ],
    sourceUrl: 'https://www.spotify.com/student/',
    regions: ['USA', 'UK', 'Global (varies)'],
    tags: ['entertainment', 'discounted']
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
        offer.benefit.toLowerCase().includes(query) ||
        offer.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    return true;
  });
}
