import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';

export interface BaseBusinessType {
  title: string;
  shortDescription: string;
  fullDescription: string;
  address: AddressType;
  category: CategoryFilterEnum;
  logo: File | string | null;
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

export interface BusinessCreateType extends Omit<BaseBusinessType, 'category'> {
  category: CategoryFilterEnum;
}

export interface BusinessUpdateType extends BaseBusinessType {
  id: number;
}

export type BusinessCRUDType = BusinessCreateType | BusinessUpdateType;
