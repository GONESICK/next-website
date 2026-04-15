import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <Skeleton className="h-6 w-32" />
      </div>

      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-96 w-full mb-8 rounded-lg" />

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-10 w-3/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-full mb-4" />
            <Skeleton className="h-6 w-2/3" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}