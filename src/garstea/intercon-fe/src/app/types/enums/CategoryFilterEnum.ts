export enum CategoryFilterEnum {
  ALL = 0,
  SUPERMARKET = 1,
  RESTAURANT = 2,
  CAFE = 3,
  BAR = 4,
  BAKERY = 5,
  PHARMACY = 6,
  GYM = 7,
  CLOTHING = 8,
  ELECTRONICS = 9,
  FURNITURE = 10,
}

export enum CategoryFilterEnumLabel {
  ALL = 'All',
  SUPERMARKET = 'Supermarket',
  RESTAURANT = 'Restaurant',
  CAFE = 'Cafe',
  BAR = 'Bar',
  BAKERY = 'Bakery',
  PHARMACY = 'Pharmacy',
  GYM = 'Gym',
  CLOTHING = 'Clothing',
  ELECTRONICS = 'Electronics',
  FURNITURE = 'Furniture',
}

export const categoryFilterArray = [
  {
    value: CategoryFilterEnum.ALL,
    label: CategoryFilterEnumLabel.ALL,
  },
  {
    value: CategoryFilterEnum.SUPERMARKET,
    label: CategoryFilterEnumLabel.SUPERMARKET,
  },
  {
    value: CategoryFilterEnum.RESTAURANT,
    label: CategoryFilterEnumLabel.RESTAURANT,
  },
  {
    value: CategoryFilterEnum.CAFE,
    label: CategoryFilterEnumLabel.CAFE,
  },
  {
    value: CategoryFilterEnum.BAR,
    label: CategoryFilterEnumLabel.BAR,
  },
  {
    value: CategoryFilterEnum.BAKERY,
    label: CategoryFilterEnumLabel.BAKERY,
  },
  {
    value: CategoryFilterEnum.PHARMACY,
    label: CategoryFilterEnumLabel.PHARMACY,
  },
  {
    value: CategoryFilterEnum.GYM,
    label: CategoryFilterEnumLabel.GYM,
  },
  {
    value: CategoryFilterEnum.CLOTHING,
    label: CategoryFilterEnumLabel.CLOTHING,
  },
  {
    value: CategoryFilterEnum.ELECTRONICS,
    label: CategoryFilterEnumLabel.ELECTRONICS,
  },
  {
    value: CategoryFilterEnum.FURNITURE,
    label: CategoryFilterEnumLabel.FURNITURE,
  },
];
