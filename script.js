function checkPassword() {
  const input = document.getElementById("password").value.trim().toLowerCase();
  const image = document.getElementById("secretImage");

  const correctPassword = "penquin"; // lowercase

  if (input === correctPassword) {
    image.style.filter = "blur(0)";
  } else {
    alert("Incorrect password");
  }
}
