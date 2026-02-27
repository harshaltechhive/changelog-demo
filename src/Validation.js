function validateForm(username, password) {
  if (!username || !password) {
    return "All fields are required";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return "Form is valid";
}

// Example usage
console.log(validateForm("admin", "123456"));