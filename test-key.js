const crypto = require('crypto');
function testKey(key) {
  try {
    crypto.createPrivateKey(key);
    return "SUCCESS";
  } catch(e) {
    return e.message;
  }
}
let base = "-----BEGIN PRIVATE KEY-----\nMIIEvAIB\n-----END PRIVATE KEY-----\n";
console.log(testKey(base));
let flat = "-----BEGIN PRIVATE KEY-----MIIEvAIB-----END PRIVATE KEY-----";
console.log(testKey(flat));
let replacedFlat = flat.replace("-----BEGIN PRIVATE KEY-----", "-----BEGIN PRIVATE KEY-----\n").replace("-----END PRIVATE KEY-----", "\n-----END PRIVATE KEY-----\n");
console.log(testKey(replacedFlat));
