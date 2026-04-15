const mongoose = require('mongoose');

// Load environment variables from .env.local
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('ERROR: MONGODB_URI not found in .env.local');
  process.exit(1);
}

// Define IndustryTrend schema directly (avoids importing .ts files)
const IndustryTrendSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['Technology', 'Business', 'Finance', 'Healthcare', 'Sustainability', 'Other'],
    },
    date: { type: Date, default: Date.now },
    imageUrl: { type: String, default: '' },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const IndustryTrend = mongoose.models.IndustryTrend || mongoose.model('IndustryTrend', IndustryTrendSchema);

const sampleTrends = [
  {
    title: 'AI Revolution in Business Operations',
    description: 'How artificial intelligence is transforming the way companies operate and make decisions.',
    content: 'Artificial intelligence is no longer a futuristic concept but a present reality in business operations. Companies across industries are leveraging AI to automate processes, gain insights from data, and enhance customer experiences. From predictive analytics to natural language processing, AI tools are becoming essential for maintaining competitive advantage.',
    category: 'Technology',
    date: new Date('2024-01-15'),
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    featured: true,
  },
  {
    title: 'Sustainable Business Practices in 2024',
    description: 'The growing importance of environmental responsibility in corporate strategy.',
    content: 'Sustainability has moved from a nice-to-have to a must-have in corporate strategy. Consumers, investors, and regulators are increasingly demanding environmental responsibility. Companies that embrace sustainable practices not only contribute to a better planet but also see improved brand reputation and operational efficiency.',
    category: 'Sustainability',
    date: new Date('2024-01-10'),
    imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80',
    featured: true,
  },
  {
    title: 'Digital Transformation Trends',
    description: 'Key trends shaping the future of digital transformation in enterprises.',
    content: 'Digital transformation continues to accelerate as organizations recognize its critical importance. Cloud computing, edge computing, and IoT are converging to create new possibilities. The focus is shifting from technology adoption to business value creation, with emphasis on customer experience and operational excellence.',
    category: 'Technology',
    date: new Date('2024-01-05'),
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    featured: false,
  },
  {
    title: 'Remote Work Evolution',
    description: 'How remote work is reshaping workplace culture and productivity.',
    content: 'Remote work has evolved from a temporary necessity to a permanent fixture in many organizations. Hybrid work models are becoming the norm, requiring new approaches to collaboration, culture, and productivity. Companies that master remote work gain access to global talent pools and improved employee satisfaction.',
    category: 'Business',
    date: new Date('2023-12-20'),
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=800&q=80',
    featured: false,
  },
  {
    title: 'FinTech Innovation Wave',
    description: 'Latest developments in financial technology and their impact on traditional banking.',
    content: 'Financial technology continues to disrupt traditional banking and financial services. From blockchain and cryptocurrencies to digital wallets and peer-to-peer lending, innovation is reshaping how money moves. Traditional banks are partnering with FinTech firms or developing their own digital capabilities to stay relevant.',
    category: 'Finance',
    date: new Date('2023-12-15'),
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: true,
  },
  {
    title: 'Healthcare Technology Advances',
    description: 'Breakthrough technologies transforming healthcare delivery and patient outcomes.',
    content: 'Healthcare is undergoing a technological revolution. Telemedicine, wearable devices, and AI-powered diagnostics are making healthcare more accessible and personalized. Electronic health records and data analytics are enabling better care coordination and population health management.',
    category: 'Healthcare',
    date: new Date('2023-12-10'),
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    featured: false,
  },
  {
    title: 'Blockchain in Supply Chain',
    description: 'How blockchain technology is revolutionizing supply chain transparency and efficiency.',
    content: 'Blockchain technology is transforming supply chain management by providing unprecedented transparency and traceability. From farm to table tracking to counterfeit prevention, distributed ledger technology enables all participants to verify product authenticity and journey. Smart contracts automate many supply chain processes, reducing paperwork and disputes.',
    category: 'Technology',
    date: new Date('2023-12-05'),
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    featured: false,
  },
  {
    title: 'Green Energy Transition',
    description: 'The global shift towards renewable energy sources and its economic implications.',
    content: 'The transition to green energy is accelerating as climate concerns and economic incentives align. Solar and wind power are becoming cost-competitive with fossil fuels in many markets. Energy storage technology improvements are addressing intermittency challenges. This transition creates new investment opportunities while requiring significant infrastructure changes.',
    category: 'Sustainability',
    date: new Date('2023-11-28'),
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    featured: false,
  },
  {
    title: 'Customer Experience Revolution',
    description: 'How businesses are reimagining customer journeys through personalization and technology.',
    content: 'Customer experience has become the primary differentiator in competitive markets. Companies are leveraging data analytics, AI, and automation to deliver personalized experiences at scale. Omnichannel strategies ensure consistent experiences across touchpoints. Voice of customer programs and real-time feedback loops enable continuous improvement.',
    category: 'Business',
    date: new Date('2023-11-20'),
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    featured: false,
  },
  {
    title: 'Cryptocurrency Adoption Trends',
    description: 'Mainstream adoption of digital currencies and their impact on traditional finance.',
    content: 'Cryptocurrency is moving from speculation to practical utility. Major corporations now accept crypto payments, and governments are exploring central bank digital currencies. Institutional investment in crypto assets has grown significantly. Regulatory frameworks are developing to balance innovation with consumer protection.',
    category: 'Finance',
    date: new Date('2023-11-15'),
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80',
    featured: false,
  },
  {
    title: 'Precision Medicine',
    description: 'Personalized healthcare approaches based on genetic and lifestyle factors.',
    content: 'Precision medicine tailors medical treatment to individual characteristics. Genetic testing, biomarker analysis, and AI enable personalized treatment plans. Pharmacogenomics helps predict drug responses. This approach promises better outcomes with fewer side effects, but raises questions about cost and accessibility.',
    category: 'Healthcare',
    date: new Date('2023-11-10'),
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    featured: false,
  },
  {
    title: 'Edge Computing Growth',
    description: 'The rise of edge computing and its implications for latency-sensitive applications.',
    content: 'Edge computing brings processing power closer to data sources, reducing latency and bandwidth usage. This is crucial for IoT devices, autonomous vehicles, and real-time analytics. 5G networks enable more edge computing use cases. Security and management challenges remain as edge deployments scale.',
    category: 'Technology',
    date: new Date('2023-11-05'),
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    featured: false,
  },
  {
    title: 'Circular Economy Models',
    description: 'Business models focused on sustainability through resource efficiency and recycling.',
    content: 'Circular economy principles are transforming business models from linear take-make-dispose to closed loops. Product-as-a-service, sharing platforms, and remanufacturing extend product lifecycles. Design for disassembly and material recovery become priorities. These models reduce waste while creating new revenue streams.',
    category: 'Sustainability',
    date: new Date('2023-10-28'),
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    featured: false,
  },
  {
    title: 'Gig Economy Evolution',
    description: 'The changing landscape of freelance work and its impact on labor markets.',
    content: 'The gig economy continues to grow, offering flexibility for workers and cost savings for employers. Platform businesses connect service providers with customers globally. Regulatory challenges around worker classification and benefits persist. Skills development and income stability remain key concerns for gig workers.',
    category: 'Business',
    date: new Date('2023-10-20'),
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    featured: false,
  },
  {
    title: 'DeFi Revolution',
    description: 'Decentralized finance platforms challenging traditional financial intermediaries.',
    content: 'Decentralized finance (DeFi) uses smart contracts to recreate financial services without intermediaries. Lending, borrowing, trading, and insurance are being reimagined on blockchain. Yield farming and liquidity mining offer new investment opportunities. Smart contract risks and regulatory uncertainty present challenges.',
    category: 'Finance',
    date: new Date('2023-10-15'),
    imageUrl: 'https://images.unsplash.com/photo-1620321023374-d1a68fddadb3?w=800&q=80',
    featured: false,
  },
  {
    title: 'Mental Health Technology',
    description: 'Digital tools and platforms addressing mental health challenges and wellness.',
    content: 'Mental health apps, teletherapy, and digital therapeutics are expanding access to mental healthcare. AI-powered chatbots provide initial support and triage. Wearable devices track stress and sleep patterns. While these tools increase accessibility, questions about efficacy and privacy need addressing.',
    category: 'Healthcare',
    date: new Date('2023-10-10'),
    imageUrl: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80',
    featured: false,
  },
  {
    title: 'Quantum Computing Progress',
    description: 'Advances in quantum computing and potential applications in various industries.',
    content: 'Quantum computing is moving from research to practical applications. Cryptography, drug discovery, and optimization problems are early use cases. Major tech companies and governments are investing heavily. Technical challenges in qubit stability and error correction remain significant hurdles.',
    category: 'Technology',
    date: new Date('2023-10-05'),
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    featured: false,
  },
  {
    title: 'ESG Investing',
    description: 'Environmental, social, and governance criteria in investment decisions.',
    content: 'ESG investing has moved from niche to mainstream. Investors increasingly consider sustainability and social impact alongside financial returns. Regulatory requirements for ESG disclosure are expanding. Data quality and greenwashing concerns present challenges for effective ESG integration.',
    category: 'Finance',
    date: new Date('2023-09-28'),
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    featured: false,
  },
  {
    title: 'Robotic Process Automation',
    description: 'RPA adoption in business processes to reduce manual work and improve efficiency.',
    content: 'Robotic Process Automation (RPA) handles repetitive, rule-based tasks across industries. Finance, HR, and customer service see significant adoption. Integration with AI enables handling of more complex processes. Success requires careful process selection and change management.',
    category: 'Technology',
    date: new Date('2023-09-20'),
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    featured: false,
  },
  {
    title: 'Climate Tech Innovation',
    description: 'Technological solutions addressing climate change challenges.',
    content: 'Climate tech investments are surging across carbon capture, renewable energy, and sustainable agriculture. Direct air capture technology is scaling up. Sustainable aviation fuels and green hydrogen show promise. Innovation is essential to meet climate goals while maintaining economic growth.',
    category: 'Sustainability',
    date: new Date('2023-09-15'),
    imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80',
    featured: false,
  },
  {
    title: 'Employee Wellbeing Focus',
    description: 'Organizational priorities shifting towards holistic employee wellness programs.',
    content: 'Employee wellbeing programs now encompass mental health, financial wellness, and work-life balance. Flexible work arrangements and mental health support are standard expectations. ROI measurement remains challenging but studies show clear benefits in retention and productivity.',
    category: 'Business',
    date: new Date('2023-09-10'),
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    featured: false,
  },
  {
    title: 'Digital Therapeutics',
    description: 'Software-based medical interventions treating various health conditions.',
    content: 'Digital therapeutics are evidence-based software interventions treating medical conditions. FDA approvals for prescription digital therapeutics are increasing. Applications include diabetes management, addiction treatment, and cognitive behavioral therapy. Reimbursement and regulatory pathways are still evolving.',
    category: 'Healthcare',
    date: new Date('2023-09-05'),
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    featured: false,
  },
  {
    title: '5G Network Expansion',
    description: 'Global rollout of 5G networks and new use cases enabled by faster connectivity.',
    content: '5G networks are deploying globally, enabling new applications in IoT, AR/VR, and autonomous systems. Low latency and high bandwidth support remote surgery and smart cities. Infrastructure costs and spectrum availability affect rollout pace. Security concerns require attention as critical services migrate to 5G.',
    category: 'Technology',
    date: new Date('2023-08-28'),
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    featured: false,
  },
  {
    title: 'Supply Chain Resilience',
    description: 'Strategies for building more resilient and flexible supply chains post-pandemic.',
    content: 'Supply chain resilience became a priority after pandemic disruptions. Companies are diversifying suppliers, increasing inventory buffers, and improving visibility. Nearshoring and friend-shoring reduce geopolitical risks. Digital twins and AI enable better planning and risk management.',
    category: 'Business',
    date: new Date('2023-08-20'),
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    featured: false,
  },
  {
    title: 'Regulatory Technology',
    description: 'Technology solutions helping companies manage compliance and regulatory requirements.',
    content: 'RegTech automates compliance monitoring, reporting, and risk management. AI and machine learning detect suspicious activities and ensure regulatory adherence. Costs and complexity of compliance drive RegTech adoption. Regulatory sandbox environments encourage innovation while protecting consumers.',
    category: 'Finance',
    date: new Date('2023-08-15'),
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    featured: false,
  },
  {
    title: 'Wearable Health Monitoring',
    description: 'Wearable devices for continuous health monitoring and preventive care.',
    content: 'Wearable health monitors track vital signs, activity, and sleep continuously. Advanced sensors detect arrhythmias, falls, and other health events. Data integration with electronic health records enables proactive care. Privacy and data security concerns require careful handling.',
    category: 'Healthcare',
    date: new Date('2023-08-10'),
    imageUrl: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
    featured: false,
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, { bufferCommands: false });

    // Clear existing data
    await IndustryTrend.deleteMany({});

    // Insert sample data
    await IndustryTrend.insertMany(sampleTrends);

    console.log('Database seeded successfully!');
    console.log(`Inserted ${sampleTrends.length} industry trends.`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
