const calculate = ({total, next, operation}, btnName) => {
  const operations = {
    clear: 'AC',
    positiveNegative: '+/-',
    equals: '='
  }
  switch (operation) {
    case operations.clear:
      // clears all operations
      total = '0'
      next = '0'
      operation = null
      break;
    case operations.positiveNegative:
      // converts to positive or negative
      total = total * -1
      next = total * -1
      break;
    case operations.equals:
      // display the final result

      break;  
  }
}