import operate from './operate';

const clear = () => ({ total: null, next: null, operation: null });

const changeSign = number => number * -1;

const isOperationValid = ({ total, next, operation }) => total && next && operation;

const isAnOperation = (operations, name) => operations.includes(name);

const setOperation = (btnName, total, next) => {
  if (next) return { operation: btnName };

  return { next: total, total: null, operation: btnName };
};

const calculate = (calculator, btnName) => {
  let { total, next, operation } = calculator;
  let calcObj = { total, next, operation };
  const operations = {
    clear: 'AC',
    positiveNegative: '+/-',
    equals: '=',
    operation: ['+', '-', 'x', '÷', '%'],
  };

  switch (btnName) {
    case operations.clear:
      // clears all operations
      calcObj = clear();
      break;
    case operations.positiveNegative:
      // converts to positive or negative
      total = changeSign(total || next).toString(10);
      calcObj = { total };
      break;
    case operations.equals:
      // display the final result
      if (isOperationValid(calculator)) {
        const result = operate(parseFloat(next, 10), parseFloat(total, 10), operation);
        next = (result).toString();
        operation = null;
        total = null;
        calcObj = { total, next, operation };
      }
      break;
    default:
      if (isAnOperation(operations.operation, btnName)) {
        calcObj = setOperation(btnName, total, next);
      } else {
        total = total ? total + btnName : btnName;
        calcObj = { total };
      }
      break;
  }

  return calcObj;
};

export default calculate;
