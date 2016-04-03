## Problem

You have joined a science project as the latest team
member. Scientists on the project are running a series
of experiments and need to calculate the number of
full days elapsed in between the experiment’s start and
end dates,  i.e. the first and the last day are considered
partial days and never counted. Following this logic,
an experiment that has run from 07/11/1972 and
08/11/1972 should return 0, because there are no
fully elapsed days contained in between those dates,
and 01/01/2000 to 03/01/2000 should return 1. The solution
needs to cater for all valid dates between 01/01/1901
and 31/12/2999.

## Test Cases

These should work as a minimum:

* 02/06/1983 - 22/06/1983: 19 days
* 04/07/1984 - 25/12/1984: 173 days
* 03/01/1989 - 03/08/1983: 1979 days

## Note

Language features/classes, (i.e. native date or calendar classes),
framework classes or helper libraries are NOT used to solve the
problem.

## Requirements
- Install [Node.js >= 4.2](http://nodejs.org/) and [npm](https://npmjs.org/)
- Mac or Linux (I have not tested on windows - might work?)

## Run
Note: this will do a babel transcompile before the script is run

- Run `npm install`
- Run `npm start`

The script will ask for the first and second date and then echo the result.

## Run Tests

- Run `npm install`
- Run `npm test`
