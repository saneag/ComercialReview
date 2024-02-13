import BusinessCard from '@/app/components/businessesList/businessCard/businessCard';
import { BusinessType } from '@/app/types/BusinessType';
import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';

export default function BusinessesList() {
  // const { data: businesses, isLoading, isError } = useGetBusinessesQuery();
  const businesses: BusinessType[] = [
    {
      id: 1,
      title: 'title',
      shortDescription: 'shortDescription',
      fullDescription: 'fullDescription',
      rating: 5,
      address: {
        street: 'street',
        latitude: '46.99158130449987',
        longitude: '28.857582784660487',
      },
      reviewsCount: 5,
      category: CategoryFilterEnum.BAKERY,
    },
    {
      id: 2,
      title: 'Text',
      shortDescription: 'text',
      fullDescription: 'text',
      rating: 4.5,
      address: {
        street: 'street',
        latitude: 'latitude',
        longitude: 'longitude',
      },
      reviewsCount: 5,
      category: CategoryFilterEnum.BAKERY,
    },
    {
      id: 3,
      title: 'title',
      shortDescription: 'shortDescription',
      fullDescription: 'fullDescription',
      rating: 5,
      address: {
        street: 'street',
        latitude: 'latitude',
        longitude: 'longitude',
      },
      reviewsCount: 5,
      category: CategoryFilterEnum.BAKERY,
    },
  ];

  return (
    <div className='space-y-4'>
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
}
