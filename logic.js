document.querySelector(".cardNumber").oninput = () => {
  document.querySelector(".cardNumberBox").innerText =
    document.querySelector(".cardNumber").value;
};

document.querySelector(".cardHolder").oninput = () => {
  document.querySelector(".cardHolderName").innerText =
    document.querySelector(".cardHolder").value;
};

document.querySelector(".monthInput").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector(".monthInput").value;
};

document.querySelector(".yearInput").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector(".yearInput").value;
};

document.querySelector(".cvvInput").onmouseenter = () => {
  document.querySelector(".frontSection").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".backSection").style.transform =
    "perspective(1000px) rotateY(0deg)";
};
document.querySelector(".cvvInput").onmouseleave = () => {
  document.querySelector(".frontSection").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".backSection").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvvInput").oninput = () => {
  document.querySelector(".cvvBox").innerText =
    document.querySelector(".cvvInput").value;
};

document.querySelector(".otp-btn").addEventListener("click", () => {
  event.preventDefault();
  window.location.href = "./otp.html";
});
