'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';

import BusinessesList from '@/app/components/businessesList';
import { Button } from '@/app/components/ui/button';

export default function BusinessList() {
  return (
    <div className='container'>
      <div className='mt-10 flex justify-end'>
        <Link href='/dashboard/businesses/create'>
          <Button className='space-x-1 nm-flat-green-500 hover:nm-flat-green-600'>
            <span>Add a business</span>
            <Plus size={20} />
          </Button>
        </Link>
      </div>
      <BusinessesList />
    </div>
  );
}
