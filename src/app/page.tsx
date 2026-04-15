'use client'

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Users, Target, Zap } from 'lucide-react';
import Carousel from '@/components/Carousel';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Home() {
  const {t} = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Carousel Hero Section */}
      <Carousel />

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {t('home.featuresTitle')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t('home.featuresSubtitle')}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: TrendingUp,
                  title: t('home.features.growthFocused.title'),
                  description: t('home.features.growthFocused.description'),
                },
                {
                  icon: Users,
                  title: t('home.features.expertTeam.title'),
                  description: t('home.features.expertTeam.description'),
                },
                {
                  icon: Target,
                  title: t('home.features.resultsDriven.title'),
                  description: t('home.features.resultsDriven.description'),
                },
                {
                  icon: Zap,
                  title: t('home.features.innovationFirst.title'),
                  description: t('home.features.innovationFirst.description'),
                },
              ].map((feature) => (
                <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {t('services.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t('home.servicesSubtitle')}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: t('home.services.businessConsulting.title'),
                  description: t('home.services.businessConsulting.description'),
                },
                {
                  title: t('home.services.technologySolutions.title'),
                  description: t('home.services.technologySolutions.description'),
                },
                {
                  title: t('home.services.marketAnalysis.title'),
                  description: t('home.services.marketAnalysis.description'),
                },
              ].map((service) => (
                <Card key={service.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">
                {t('home.viewAllServices')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('home.ctaTitle')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
            {t('home.ctaSubtitle')}
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                {t('home.contactUsToday')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
