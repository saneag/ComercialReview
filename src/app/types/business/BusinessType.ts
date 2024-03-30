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
  logoPath: string | null;
}

export interface BusinessCreateType extends BaseBusinessType {
  logo: File | string | null;
}

export interface BusinessUpdateType extends BusinessCreateType {
  id: number;
}

export type BusinessCRUDType = BusinessCreateType | BusinessUpdateType;
