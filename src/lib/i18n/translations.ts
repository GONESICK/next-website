export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      industryTrends: 'Industry Trends',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
    },
    home: {
      heroTitle: 'Innovate Your Future',
      heroSubtitle: 'Leading the way in corporate innovation and digital transformation',
      heroCta: 'Get Started',
      featuresTitle: 'Why Choose Us',
      featuresSubtitle: 'We provide comprehensive solutions tailored to your business needs',
      servicesTitle: 'Our Services',
      servicesSubtitle: 'Comprehensive solutions for all your business needs',
      viewAllServices: 'View All Services',
      ctaTitle: 'Ready to Transform Your Business?',
      ctaSubtitle: 'Let\'s discuss how we can help you achieve your goals',
      contactUsToday: 'Contact Us Today',
      features: {
        growthFocused: {
          title: 'Growth Focused',
          description: 'Strategies designed to accelerate your business growth',
        },
        expertTeam: {
          title: 'Expert Team',
          description: 'Experienced professionals dedicated to your success',
        },
        resultsDriven: {
          title: 'Results Driven',
          description: 'Measurable outcomes that impact your bottom line',
        },
        innovationFirst: {
          title: 'Innovation First',
          description: 'Cutting-edge solutions for modern challenges',
        },
      },
      services: {
        businessConsulting: {
          title: 'Business Consulting',
          description: 'Strategic guidance to optimize operations and drive growth',
        },
        technologySolutions: {
          title: 'Technology Solutions',
          description: 'Modern tech stack implementation and digital transformation',
        },
        marketAnalysis: {
          title: 'Market Analysis',
          description: 'Data-driven insights for informed decision making',
        },
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'Driving innovation since 2024',
      description: 'We are a forward-thinking company dedicated to helping businesses embrace digital transformation and achieve their full potential.',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions for your business needs',
    },
    industryTrends: {
      title: 'Industry Trends',
      subtitle: 'Stay ahead with the latest industry insights',
      all: 'All',
      noTrends: 'No trends found. Check back later!',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      services: '服务',
      industryTrends: '行业动态',
      contact: '联系我们',
      getInTouch: '联系我们',
    },
    home: {
      heroTitle: '创新您的未来',
      heroSubtitle: '引领企业创新和数字化转型',
      heroCta: '开始使用',
      featuresTitle: '为什么选择我们',
      featuresSubtitle: '我们为您的业务需求提供全面的解决方案',
      servicesTitle: '我们的服务',
      servicesSubtitle: '满足您业务需求的综合解决方案',
      viewAllServices: '查看所有服务',
      ctaTitle: '准备好转型您的业务了吗？',
      ctaSubtitle: '让我们讨论如何帮助您实现目标',
      contactUsToday: '今天联系我们',
      features: {
        growthFocused: {
          title: '专注增长',
          description: '旨在加速您业务增长的战略',
        },
        expertTeam: {
          title: '专家团队',
          description: '致力于您成功的经验丰富的专业人士',
        },
        resultsDriven: {
          title: '结果导向',
          description: '影响您底线的可衡量成果',
        },
        innovationFirst: {
          title: '创新优先',
          description: '应对现代挑战的前沿解决方案',
        },
      },
      services: {
        businessConsulting: {
          title: '业务咨询',
          description: '优化运营和推动增长的战略指导',
        },
        technologySolutions: {
          title: '技术解决方案',
          description: '现代技术栈实施和数字化转型',
        },
        marketAnalysis: {
          title: '市场分析',
          description: '用于明智决策的数据驱动洞察',
        },
      },
    },
    about: {
      title: '关于我们',
      subtitle: '自 2024 年以来推动创新',
      description: '我们是一家前瞻性的公司，致力于帮助企业拥抱数字化转型并实现其全部潜力。',
    },
    services: {
      title: '我们的服务',
      subtitle: '满足您业务需求的综合解决方案',
    },
    industryTrends: {
      title: '行业动态',
      subtitle: '通过最新行业洞察保持领先',
      all: '全部',
      noTrends: '未找到趋势。请稍后再来！',
    },
    contact: {
      title: '联系我们',
      subtitle: '与我们的团队联系',
      name: '姓名',
      email: '邮箱',
      message: '消息',
      send: '发送消息',
      sending: '发送中...',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
