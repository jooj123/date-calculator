import CustomDate from './customDate';

export default class DateCalculator {

  constructor() {
  }

  elapsedDaysBetweenDates(first, second) {
    const customDate = new CustomDate();
    const firstValue = customDate.parse(first);
    const secondValue = customDate.parse(second);

    // dont include the first and last days
    const result = Math.abs(firstValue - secondValue);

    if (result > 0) {
      return result - 1;
    }

    return result;
  }
}
