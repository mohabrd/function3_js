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

// function nombreentrer(num) {
//     let sommenbr = 0;
//     let str = num.toString();
//     for (let i = 0; i < str.length; i++) {
//       sommenbr += parseInt(str[i]);
//     }
//     return sommenbr;
//   }

// console.log(nombreentrer(123));

//EXO5

function palindrome(array) {
    for (let i = 0; i < array.length / 2; i++) {
      if (array[i] !== array[array.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

console.log(palindrome([1, 2, 3, 2, 1]));
console.log(palindrome([1, 2, 3, 4, 5]));