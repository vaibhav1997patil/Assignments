var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

var duplicates = [];
var sameValues = [];

for (var i = 0; i < fullWordList.length; i++) {
  var word = fullWordList[i];
  
  if (wordsToRemove.includes(word)) {
    duplicates.push(word);
  }
  
  if (wordsToRemove.indexOf(word) !== -1) {
    sameValues.push(word);
  }
}

console.log("Duplicates:", duplicates);
console.log("Same Values:", sameValues);