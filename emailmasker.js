function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (username.length <= 2) {
    return email;
  }

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedLength = username.length - 2;
  const maskedSection = "*".repeat(maskedLength);

  return firstChar + maskedSection + lastChar + domain;
}

const emailToMask = "apple.pie@example.com";
const result = maskEmail(emailToMask);

console.log(result);