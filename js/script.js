var link = document.querySelector(".btn-form");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("login");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    console.log("Нужно ввести имя и электронную почту");
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
  var link = document.querySelector(".btn-form");
  var popup1 = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".modal-content-close");
  link.addEventListener("click", function(event) {
  event.preventDefault();
  popup1.classList.add("modal-overlay-shadow");
    });
    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup1.classList.remove("modal-overlay-shadow");});
