function checkPassword() {
  const input = document.getElementById("password")
    .value
    .trim()
    .toLowerCase();

  const secretLink = document.getElementById("secretLink");

  const acceptedPasswords = [
    "penguin",
    "penquin",
    "penguing"
  ];

  if (acceptedPasswords.includes(input)) {
    secretLink.classList.remove("hidden");
  }
}
