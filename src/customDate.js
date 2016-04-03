
export default class CustomDate {

  static daysInMonth = [
    31, // Jan
    28, // Feb (can be 29 in leap year - 1 in every 4 years)
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // Sept
    31, // Oct
    30, // Nov
    31, // dec
  ];

  static minYear = 1901;
  static maxYear = 2999;

  constructor() {
  }

  /**
   * Checks format of dd/mm/yyyy
   * and returns the number of days since min date
   */
  parse(str) {
    if (typeof str !== 'string' || str === '') {
      throw new Error(`Invalid input, needs to be a valid string and not empty: ${str}`);
    }

    const reg = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    const result = reg.exec(str);

    if (!result) {
      throw new Error(`Invalid input, doesnt match format: ${str}`);
    }

    // some sanity checks of the data before we calculate value
    const day = Number(result[1]);
    const month = Number(result[2]);
    const year = Number(result[3]);

    if ((day < 1 || day > 31) || (month < 1 || month > 12) || (year < CustomDate.minYear || year > CustomDate.maxYear)) {
      throw new Error(`Invalid input, date out of range: ${str}`);
    }

    return this._daysSinceMin(Number(result[1]), Number(result[2]), Number(result[3]));
  }

  /**
   * Returns the number of days since min date
   */
  _daysSinceMin(day, month, year) {
    let days = 0;

    for (let currentYear = CustomDate.minYear; currentYear <= year; currentYear++) {
      const leapYear = currentYear % 4 === 0;

      // optimisation - no need to loop through each month if we know its not the last year to check
      if (currentYear !== year) {
        days += leapYear ? 366 : 365;
        continue;
      }

      // zero indexed month (eg. Jan is 0)
      for (let currentMonth = 0; currentMonth < month; currentMonth++) {
        let daysInMonth = CustomDate.daysInMonth[currentMonth];

        // check feb for leap year
        if (currentMonth === 1 && leapYear) {
          daysInMonth++;
        }

        /**
          * Check if this is the last year and month to check
          */
        if (currentYear === year && currentMonth === (month - 1)) {
          if (day > daysInMonth) {
            throw new Error('Invalid number of days in input');
          }

          daysInMonth = day;
        }

        days += daysInMonth;
      }
    }

    return days;
  }


}

