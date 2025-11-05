const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const userInfo = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (userInfo.email === "" && userInfo.password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(userInfo);

    form.reset();
  }
});
