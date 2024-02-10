import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';

export interface BusinessType {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  rating: number;
  address: AddressType;
  reviewsCount: number;
  category: CategoryFilterEnum;
}

export interface AddressType {
  street: string;
  latitude: string;
  longitude: string;
}
