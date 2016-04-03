import { describe, it } from 'mocha';
import { expect } from 'chai';
import CustomDate from '../src/customDate';

describe('CustomDate', () => {
  it('should generate correct values from min', () => {
    const customDate = new CustomDate();
    expect(customDate.parse('01/01/1901')).to.be.equal(1);
    expect(customDate.parse('02/01/1901')).to.be.equal(2);
    expect(customDate.parse('02/02/1901')).to.be.equal(33);
  });

  it('should generate correct values for leap years', () => {
    const customDate = new CustomDate();
    expect(customDate.parse('01/02/1905')).to.be.equal(1493);
  });

  it('should generate allow format without padding', () => {
    const customDate = new CustomDate();
    expect(customDate.parse('1/2/1905')).to.be.equal(1493);
  });

  it('should throw an error when date is out of range', () => {
    const customDate = new CustomDate();
    expect(customDate.parse.bind(CustomDate, '1/2/1900')).to.throw('Invalid input, date out of range: 1/2/1900');
    expect(customDate.parse.bind(CustomDate, '1/1/3000')).to.throw('Invalid input, date out of range: 1/1/3000');
  });

  it('should throw an error when format is incorrect', () => {
    const customDate = new CustomDate();
    expect(customDate.parse.bind(CustomDate, '1/2/23424/1900')).to.throw('Invalid input, doesnt match format: 1/2/23424/1900');
    expect(customDate.parse.bind(CustomDate, '1/2')).to.throw('Invalid input, doesnt match format: 1/2');
    expect(customDate.parse.bind(CustomDate, 'bob')).to.throw('Invalid input, doesnt match format: bob');
  });

  it('should throw an error when its not a string', () => {
    const customDate = new CustomDate();
    expect(customDate.parse.bind(CustomDate, '')).to.throw('Invalid input, needs to be a valid string and not empty: ');
    expect(customDate.parse.bind(CustomDate, 12)).to.throw('Invalid input, needs to be a valid string and not empty: 12');
  });
});
