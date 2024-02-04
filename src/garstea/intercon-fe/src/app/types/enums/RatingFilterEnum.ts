export enum RatingFilterEnum {
  ALL = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export enum RatingFilterEnumLabel {
  ALL = 'All',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
}

export const ratingFilterArray = [
  {
    value: RatingFilterEnum.ALL,
    label: RatingFilterEnumLabel.ALL,
  },
  {
    value: RatingFilterEnum.ONE,
    label: RatingFilterEnumLabel.ONE,
  },
  {
    value: RatingFilterEnum.TWO,
    label: RatingFilterEnumLabel.TWO,
  },
  {
    value: RatingFilterEnum.THREE,
    label: RatingFilterEnumLabel.THREE,
  },
  {
    value: RatingFilterEnum.FOUR,
    label: RatingFilterEnumLabel.FOUR,
  },
  {
    value: RatingFilterEnum.FIVE,
    label: RatingFilterEnumLabel.FIVE,
  },
];
