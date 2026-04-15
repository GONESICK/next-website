import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              About Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Building the future of business through innovation and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                To empower businesses with innovative solutions that drive sustainable growth and create lasting value. We believe in the power of technology to transform industries and improve lives.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Our team of experts is dedicated to delivering excellence in every project, ensuring that our clients achieve their strategic objectives and stay ahead of the competition.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, label: '500+ Clients', value: '500+' },
                { icon: Target, label: 'Projects Completed', value: '1000+' },
                { icon: Award, label: 'Industry Awards', value: '50+' },
                { icon: Globe, label: 'Countries Served', value: '30+' },
              ].map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Innovation',
                  description: 'We embrace new ideas and technologies to stay ahead of the curve',
                },
                {
                  title: 'Integrity',
                  description: 'We maintain the highest ethical standards in all our dealings',
                },
                {
                  title: 'Excellence',
                  description: 'We strive for perfection in every aspect of our work',
                },
                {
                  title: 'Collaboration',
                  description: 'We believe in the power of teamwork and partnerships',
                },
                {
                  title: 'Customer Focus',
                  description: 'Our clients\' success is our top priority',
                },
                {
                  title: 'Sustainability',
                  description: 'We are committed to environmentally responsible practices',
                },
              ].map((value) => (
                <Card key={value.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Meet the experienced professionals driving our success
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: 'John Smith',
                  role: 'CEO & Founder',
                  description: 'Visionary leader with 20+ years of industry experience',
                },
                {
                  name: 'Sarah Johnson',
                  role: 'CTO',
                  description: 'Technology expert specializing in digital transformation',
                },
                {
                  name: 'Michael Brown',
                  role: 'COO',
                  description: 'Operations specialist with a track record of efficiency',
                },
                {
                  name: 'Emily Davis',
                  role: 'CFO',
                  description: 'Financial strategist ensuring sustainable growth',
                },
              ].map((member) => (
                <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
