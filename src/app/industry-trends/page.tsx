import { Suspense } from 'react';
import CategoryFilter from '@/components/industry-trends/CategoryFilter';
import TrendsList from '@/components/industry-trends/TrendsList';
import TrendCardSkeleton from '@/components/industry-trends/TrendCardSkeleton';


interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

const IndustryTrends = async ({ searchParams }: PageProps) => {
  const { category } = await searchParams;
  const selectedCategory = category || 'All';

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Industry Trends
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Stay informed with the latest insights and developments in your industry
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter (client component) */}
      <CategoryFilter />

      {/* Trends Grid (server component with streaming) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <TrendCardSkeleton key={i} />
                ))}
              </div>
            }
          >
            <TrendsList category={selectedCategory} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default IndustryTrends;
