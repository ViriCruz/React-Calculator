import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const operations = {
    sum: '+', subtract: '-', multiplication: 'x', division: '÷', percentage: '%',
  };
  const x = Big(numberOne);
  const y = Big(numberTwo);
  let result = null;
  switch (operation) {
    case operations.sum:
      result = x.plus(y);
      break;
    case operations.subtract:
      result = x.minus(y);
      break;
    case operations.multiplication:
      result = x.times(y);
      break;
    case operations.division:
      result = y !== 0 ? x.div(y) : 'infinity';
      break;
    case operations.percentage:
      result = x.div(100).times(y);
      break;
    default:
      result = null;
      break;
  }
  return result;
};

export default operate;
