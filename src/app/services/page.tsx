import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Business Consulting',
      description: 'Strategic guidance to optimize operations and drive sustainable growth for your organization.',
      features: [
        'Strategic Planning',
        'Process Optimization',
        'Performance Analysis',
        'Change Management',
      ],
    },
    {
      title: 'Technology Solutions',
      description: 'Modern technology implementation and digital transformation services to stay competitive.',
      features: [
        'Cloud Migration',
        'Custom Software Development',
        'System Integration',
        'Cybersecurity Solutions',
      ],
    },
    {
      title: 'Market Analysis',
      description: 'Data-driven insights and market research to inform strategic business decisions.',
      features: [
        'Market Research',
        'Competitive Analysis',
        'Consumer Insights',
        'Trend Forecasting',
      ],
    },
    {
      title: 'Financial Advisory',
      description: 'Expert financial guidance to maximize profitability and ensure fiscal responsibility.',
      features: [
        'Financial Planning',
        'Risk Assessment',
        'Investment Strategy',
        'Compliance Management',
      ],
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to enhance brand visibility and engagement.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Strategy',
        'Analytics & Reporting',
      ],
    },
    {
      title: 'HR Solutions',
      description: 'Human resources consulting to build high-performing teams and organizational culture.',
      features: [
        'Talent Acquisition',
        'Training & Development',
        'Performance Management',
        'Employee Engagement',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              A proven methodology for delivering exceptional results
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Understanding your business needs and objectives',
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Developing a customized plan for success',
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Executing the strategy with precision',
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'Continuous improvement and refinement',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
            Let&apos;s discuss how our services can help your business grow
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
