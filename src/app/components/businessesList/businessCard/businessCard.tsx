import BusinessCardBody from '@/app/components/businessesList/businessCard/BusinessCardBody';
import BusinessCardFooter from '@/app/components/businessesList/businessCard/BusinessCardFooter';
import BusinessCardHeader from '@/app/components/businessesList/businessCard/BusinessCardHeader';
import { Card } from '@/app/components/ui/card';
import { BusinessType } from '@/app/types/business/BusinessType';

interface BusinessCardProps {
  business: BusinessType;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Card>
      <BusinessCardHeader business={business} />
      <BusinessCardBody business={business} />
      <BusinessCardFooter business={business} />
    </Card>
  );
}
