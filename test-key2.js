const crypto = require('crypto');
function testKey(key) {
  try {
    crypto.createPrivateKey(key);
    return "SUCCESS";
  } catch(e) {
    return e.message;
  }
}
// valid base64 but fake key
let fakeKeyBase64 = "MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgT8E6Q+k3F4I1C8Yn6N7G0n1sP3Yw0C+Zt9v5J8sU9YuhRANCAAQZzV1x+h5+1Wz+R4ZqZ0J9z0+2U+w9V9y9Z8h9y9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z";
let pemFlat = "-----BEGIN PRIVATE KEY-----\n" + fakeKeyBase64 + "\n-----END PRIVATE KEY-----\n";
console.log(testKey(pemFlat));
