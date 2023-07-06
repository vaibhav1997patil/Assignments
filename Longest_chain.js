const word = '00000111110101001111100001001';

let chainLength = 0;
let maxChainLength = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === '1') {
    chainLength++;
    maxChainLength = Math.max(maxChainLength, chainLength);
  } else {
    chainLength = 0;
  }
}

console.log('Longest chain of letters:', maxChainLength);