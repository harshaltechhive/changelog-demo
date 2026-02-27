// Wait until DOM loads
document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");
  const message = document.getElementById("message");

  loginBtn.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Simple validation
    if (!username || !password) {
      message.style.color = "red";
      message.textContent = "Please enter both username and password";
      return;
    }

    // Dummy login check
    if (username === "admin" && password === "1234") {
      message.style.color = "green";
      message.textContent = "Login successful!";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password";
    }
  });
});