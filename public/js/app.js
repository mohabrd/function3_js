//EXO1

// function nombrenaturel(n) {
//     let nbr = 0;
//     for (let i = 1; i <= n; i++) {
//       nbr += i;
//     }
//     return nbr;
//   }

// console.log(nombrenaturel(5));

//EXO2

// function nbrPremier(nbr) {
//     for(let i = 2; i < nbr; i++)
//       if(nbr%i === 0) return false;
//     return nbr > 1;
//   }
  
//   console.log(nbrPremier(4));

//EXO3

// function ordre(str) {
//     let animaux = ["girafe", "chien", "chat", "oiseau"];
//     let animauxtrier = animaux.sort();
//     return animauxtrier;
// }

// console.log(ordre());

//EXO4

function nombreentrer(num) {
    let sommenbr = 0;
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
      sommenbr += parseInt(str[i]);
    }
    return sommenbr;
  }

console.log(nombreentrer(123));