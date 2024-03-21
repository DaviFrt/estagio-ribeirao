function isNumberInFibonacciSequence(number) {
  let previousFibonacciNumber = 0
  let currentFibonacciNumber = 1

  if(number === 0 || number === 1) {
    return console.log("O número fornecido pertence a sequencia de Fibonacci")
  }

  while(currentFibonacciNumber <= number) {
    if(currentFibonacciNumber === number) {
      return console.log("O número fornecido pertence a sequencia de Fibonacci")
    }

    let nextFibonacciNumber = previousFibonacciNumber + currentFibonacciNumber

    previousFibonacciNumber = currentFibonacciNumber
    currentFibonacciNumber = nextFibonacciNumber
  }

  return console.log("O número fornecido não pertence a sequencia de Fibonacci")
}

isNumberInFibonacciSequence(30)
isNumberInFibonacciSequence(34)