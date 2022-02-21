let word1 = "MadaM";
let len = word1.length;
console.log("Checking palindrome");
console.log("String -", word1);
let palin = new Promise((resolve, reject) => {
  setTimeout(function palin() {
    for (let i in word1) {
      if (word1[i] === word1[len - 1 - i]) {
        resolve("Word is a palindrome - Promise fulfilled");
      } else {
        reject("Word is not a palindrome - Promise not fulfilled");
      }
    }
  }, 4000);
});
async function resultfunc() {
  palin
    .then(function success(result) {
      console.log("The result is", result);
    })
    .catch(function failed(err) {
      console.log(err);
    });
}
resultfunc();
