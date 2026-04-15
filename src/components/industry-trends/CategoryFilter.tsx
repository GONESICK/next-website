'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Technology', 'Business', 'Finance', 'Healthcare', 'Sustainability', 'Other'];

const CategoryFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/industry-trends?${params.toString()}`);
  };

  return (
    <section className="py-8 bg-white dark:bg-gray-900 border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
