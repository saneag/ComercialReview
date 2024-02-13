import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';

export interface BaseBusinessType {
  title: string;
  shortDescription: string;
  fullDescription: string;
  address: AddressType;
  category: CategoryFilterEnum;
}

export interface AddressType {
  street: string;
  latitude: string;
  longitude: string;
}

export interface BusinessType extends BaseBusinessType {
  id: number;
  rating: number;
  reviewsCount: number;
}

export interface BusinessCreateType extends BaseBusinessType {
  ownerId: number;
  logo: {
    data: string;
  };
}

export interface BusinessUpdateType extends BaseBusinessType {
  id: number;
  logo: {
    data: string;
  };
}
