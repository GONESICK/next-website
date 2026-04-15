import connectDB from '@/lib/mongodb';
import IndustryTrend from '@/lib/models/IndustryTrend';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}
const generateStaticParams = async () => {
  await connectDB();
  const trends = await IndustryTrend.find().lean();
  return trends.map((trend) => ({ id: trend._id.toString() }));
};

const IndustryTrendDetail = async ({ params }: PageProps) => {
  const { id } = await params;
  await connectDB();
  
  const detail = await IndustryTrend.findById(id).lean();
  
  if (!detail) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Trend Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">The trend you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/industry-trends" className="text-primary hover:underline">
            Back to Industry Trends
          </Link>
        </div>
      </div>
    );
  }

  const trend = JSON.parse(JSON.stringify(detail));

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/industry-trends" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Industry Trends
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        {trend.imageUrl && (
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={trend.imageUrl}
              alt={trend.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">{trend.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {new Date(trend.date).toLocaleDateString()}
                </span>
              </div>
            </div>
            <CardTitle className="text-4xl">{trend.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {trend.content}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default IndustryTrendDetail;