import { describe, it } from 'mocha';
import { expect } from 'chai';
import DateCalculator from '../src/dateCalculator';

describe('DateCalculator', () => {
  it('should generate correct values for 02/06/1983 - 22/06/1983', () => {
    const dateCalculator = new DateCalculator();
    expect(dateCalculator.elapsedDaysBetweenDates('02/06/1983', '22/06/1983')).to.be.equal(19);
  });

  it('should generate correct values for 04/07/1984 - 25/12/1984', () => {
    const dateCalculator = new DateCalculator();
    expect(dateCalculator.elapsedDaysBetweenDates('04/07/1984', '25/12/1984')).to.be.equal(173);
  });

  it('should generate correct values for 03/01/1989 - 03/08/1983', () => {
    const dateCalculator = new DateCalculator();
    expect(dateCalculator.elapsedDaysBetweenDates('03/01/1989', '03/08/1983')).to.be.equal(1979);
  });

  it('should generate correct values for 07/11/1972 - 08/11/1972', () => {
    const dateCalculator = new DateCalculator();
    expect(dateCalculator.elapsedDaysBetweenDates('07/11/1972', '08/11/1972')).to.be.equal(0);
  });

  it('should generate correct values for 01/01/2000 - 03/01/2000', () => {
    const dateCalculator = new DateCalculator();
    expect(dateCalculator.elapsedDaysBetweenDates('01/01/2000', '03/01/2000')).to.be.equal(1);
  });
});
