#!/usr/bin/env node
require('babel-polyfill');
import co from 'co';
import prompt from 'co-prompt';
import chalk from 'chalk';
import DateCalculator from './dateCalculator';

co(function *() {
  const first = yield prompt('enter first date (format: dd/mm/yyyy): ');
  const second = yield prompt('enter second date (format: dd/mm/yyyy): ');
  const dateCalculator = new DateCalculator();
  return dateCalculator.elapsedDaysBetweenDates(first, second);
}).then((val) => {
  console.log(chalk.bold.cyan('Result: ') + val);
  process.exit(0);
}, (err) => {
  console.error(chalk.red(err.stack));
  process.exit(1);
});
