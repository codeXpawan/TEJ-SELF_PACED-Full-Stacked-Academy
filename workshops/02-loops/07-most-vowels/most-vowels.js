function mostVowels(sentence) {
  let words = sentence.split('.').join('').split(',').join('').split(' ');
  let maxVowelCount = 0;
  let wordWithMostVowels = '';
  const vowels = 'aeiouAEIOU';

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let vowelCount = 0;

    for (let j = 0; j < currentWord.length; j++) {
      if (vowels.includes(currentWord[j])) {
        vowelCount++;
      }
    }

    if (vowelCount > maxVowelCount) {
      maxVowelCount = vowelCount;
      wordWithMostVowels = currentWord;
    }
  }
  return wordWithMostVowels;
}

console.log(mostVowels("Give her hell from us, Peeves."));