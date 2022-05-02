const vetor = [1, 8, 9, 5];
var tail = 5;

function isFull(v) {
  
  console.log(v.length)

  if (tail == v.length)  {
    return true;
  } else {
    return false;
  }
}

var resposta = isFull(vetor)

console.log(resposta)


