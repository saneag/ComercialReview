import BusinessCard from '@/app/components/businessesList/businessCard/businessCard';
import { useGetBusinessesQuery } from '@/app/redux/features/businessApi/businessApi';

export default function BusinessesList() {
  const {
    data: businesses,
    isLoading,
    isError,
    isSuccess,
  } = useGetBusinessesQuery();

  return (
    <div className='space-y-4'>
      {isSuccess &&
        businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
    </div>
  );
}
