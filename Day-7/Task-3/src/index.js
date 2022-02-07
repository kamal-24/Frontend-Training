let x = 1;
let prom = new Promise((resolve, reject) => {
  if (x === 1) {
    resolve("Promise done");
  } else reject("failed");
});
setTimeout(() => {
  console.log(prom);
}, 5000);
