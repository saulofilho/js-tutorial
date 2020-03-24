let countChar = (string, ch) => {
  let counted = 0;
  let i = 0;
  while (i < string.length) {
    if (string.charAt(i) == ch) {
      counted += 1;
    }
    i++;
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4