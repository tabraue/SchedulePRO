const randomPassword = async () => {
  const CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    password += CHARACTERS.charAt(randomIndex);
  }

  return password;
};

module.exports = { randomPassword };
