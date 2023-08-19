function greeting(someone) {
  if (someone === null || typeof someone === "undefined") {
    return "hello, guest";
  } else {
    return "hello, " + someone;
  }
}
console.log(greeting("everyone"));
console.log(greeting(null));
console.log(greeting(undefined));

module.exports = greeting;
