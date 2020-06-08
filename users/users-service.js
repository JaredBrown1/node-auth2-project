module.exports = {
  isValid,
};

function isValid(user) {
  return Boolen(
    user.username && user.password && typeof user.password === "string"
  );
}
