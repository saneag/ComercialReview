import BusinessCard from '@/app/components/businessesList/businessCard/BusinessCard';
import { useGetBusinessesQuery } from '@/app/redux/features/businessApi/businessApi';

export default function BusinessesList() {
  const { data: businesses, isSuccess } = useGetBusinessesQuery();

  return (
    <div className='space-y-4'>
      {isSuccess &&
        businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
    </div>
  );
}
