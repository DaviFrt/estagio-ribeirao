function complementSequenceA() {
  const sequence = [1, 3, 5, 7]
  const nextNumber = sequence[sequence.length - 1] + 2

  sequence.push(nextNumber)
  console.log(sequence)
}

function complementSequenceB() {
  const sequence = [2, 4, 8 ,16 ,32 ,64]
  const nextNumber = sequence[sequence.length - 1] *2

  sequence.push(nextNumber)
  console.log(sequence)
}

function complementSequenceC() {
  const sequence = [0, 1, 4, 9, 16, 25, 36]
  const nextNumber =  sequence.length ** 2

  sequence.push(nextNumber)
  console.log(sequence)
}

function complementSequenceD() {
  const sequence = [4, 16, 36 ,64]
  const nextNumber =  (Math.sqrt(sequence[sequence.length - 1]) + 2) ** 2

  sequence.push(nextNumber)
  console.log(sequence)
}

function complementSequenceE() {
  const sequence = [1, 1, 2, 3, 5, 8]
  const nextNumber =  sequence[sequence.length - 2] + sequence[sequence.length -1]

  sequence.push(nextNumber)
  console.log(sequence)
}

function complementSequenceF() {
  const sequence = [2, 10, 12, 16, 17, 18, 19]
  const nextNumber =  200

  sequence.push(nextNumber)
  console.log(sequence)
}

complementSequenceA()
complementSequenceB()
complementSequenceC()
complementSequenceD()
complementSequenceE()
complementSequenceF()