import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Tag } from 'lucide-react';

interface TrendCardProps {
  trend: {
    _id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    imageUrl?: string;
    featured: boolean;
  };
}

const TrendCard = ({ trend }: TrendCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow flex flex-col group">
      {trend.imageUrl && (
        <div className="h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={trend.imageUrl}
            alt={trend.title}
            width={400}
            height={192}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Tag className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary font-medium">{trend.category}</span>
        </div>
        <CardTitle>{trend.title}</CardTitle>
        <CardDescription>{trend.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <Calendar className="h-4 w-4" />
          <span>{new Date(trend.date).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendCard;
