import BusinessCardBody from '@/app/components/businessesList/businessCard/businessCardBody';
import BusinessCardFooter from '@/app/components/businessesList/businessCard/businessCardFooter';
import BusinessCardHeader from '@/app/components/businessesList/businessCard/businessCardHeader';
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
