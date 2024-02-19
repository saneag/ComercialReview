import { CardContent } from '@/app/components/ui/card';
import { BusinessType } from '@/app/types/business/BusinessType';

interface BusinessCardBodyProps {
  business: BusinessType;
}

export default function BusinessCardBody({ business }: BusinessCardBodyProps) {
  return <CardContent></CardContent>;
}
