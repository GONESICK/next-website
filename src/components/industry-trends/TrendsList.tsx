import { Suspense } from 'react';
import connectDB from '@/lib/mongodb';
import IndustryTrend from '@/lib/models/IndustryTrend';
import TrendCard from './TrendCard';
import TrendCardSkeleton from './TrendCardSkeleton';

interface TrendsListProps {
  category?: string;
}

const fetchTrends = async (category?: string) => {
  await connectDB();
  const filter = category && category !== 'All' ? { category } : {};
  const trends = await IndustryTrend.find(filter).sort({ date: -1 }).lean();
  return JSON.parse(JSON.stringify(trends));
};

const TrendsListStreamed = async ({ category }: TrendsListProps) => {
  const trends = await fetchTrends(category);

  if (trends.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 dark:text-gray-300">No trends found. Check back later!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {trends.map((trend: { _id: string; title: string; description: string; category: string; date: string; imageUrl?: string; featured: boolean }) => (
        <TrendCard key={trend._id} trend={trend} />
      ))}
    </div>
  );
};

const TrendsListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <TrendCardSkeleton key={i} />
      ))}
    </div>
  );
};

const TrendsList = ({ category }: TrendsListProps) => {
  return (
    <Suspense fallback={<TrendsListSkeleton />}>
      <TrendsListStreamed category={category} />
    </Suspense>
  );
};

export default TrendsList;
