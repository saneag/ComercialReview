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

export const ratingEnumToText = (rating: RatingFilterEnum): string => {
  switch (rating) {
    case RatingFilterEnum.ALL:
      return RatingFilterEnumLabel.ALL;
    case RatingFilterEnum.ONE:
      return RatingFilterEnumLabel.ONE;
    case RatingFilterEnum.TWO:
      return RatingFilterEnumLabel.TWO;
    case RatingFilterEnum.THREE:
      return RatingFilterEnumLabel.THREE;
    case RatingFilterEnum.FOUR:
      return RatingFilterEnumLabel.FOUR;
    case RatingFilterEnum.FIVE:
      return RatingFilterEnumLabel.FIVE;
    default:
      return '';
  }
};

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
