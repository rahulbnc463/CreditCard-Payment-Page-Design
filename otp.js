const inputs = document.querySelectorAll(".otpBox input");
inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("paste", handleotppaste);
  input.addEventListener("keyup", handleotp);
});

function handleotppaste(e) {
  const data = e.clipboardData.getData("text");
  const value = data.split("");
  if (value.length === inputs.length) {
    inputs.forEach((input, index) => (input.value = value[index]));
    letSubmit();
  }
}

function handleotp(e) {
  const input = e.target;
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";

  let fieldindex = input.dataset.index;
  if (value.length > 0 && fieldindex < inputs.length - 1) {
    input.nextElementSibling.focus();
  }
  if (e.key === "Backspace" && fieldindex > 0) {
    input.previousElementSibling.focus();
  }
  if (fieldindex == inputs.length - 1) {
    letSubmit();
  }
}

function letSubmit() {
  console.log("submiting...");
  let otp = "";
  inputs.forEach((input) => {
    otp += input.value;
    input.disabled = true;
    input.classList.add("disabled");
  });
  console.log(otp);
}

document.querySelector(".otp-btn").addEventListener("click", () => {
  event.preventDefault();
  alert("Your payment is Done");
  window.location.href = "./index.html";
});
