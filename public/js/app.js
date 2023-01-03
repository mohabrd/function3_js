//EXO1

function nombrenaturel(n) {
    let nbr = 0;
    for (let i = 1; i <= n; i++) {
      nbr += i;
    }
    return nbr;
  }

console.log(nombrenaturel(5));