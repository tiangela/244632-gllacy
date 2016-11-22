var link = document.querySelector(".contact-feedback");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var shadow = document.querySelector(".modal-overlay");

var form = popup.querySelector(".login-form");
var login = popup.querySelector(".icon-user");
var password = popup.querySelector(".icon-password");

var storage = localStorage.getItem("login");

// Открытие окна
link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    shadow.classList.add("modal-overlay-shadow");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

// закрытие окна
close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    shadow.classList.remove("modal-overlay-shadow");
});

// отправка формы
form.addEventListener("submit", function (event) {
        if (!login.value || !password.value) {
        popup.classList.remove("modal-error");
        //popup.offsetWidth = popup.offsetWidth;
        console.log("Нужно ввести имя и электронную почту");
        popup.classList.add("modal-error");
        event.preventDefault();
    } else {
        localStorage.setItem("login", login.value);
        localStorage.setItem("password", password.value);
    }
});

// закрытие на esc
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
            shadow.classList.remove("modal-overlay-shadow");
        }
    }
});


// закрытие при нажатии на тень
shadow.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    shadow.classList.remove("modal-overlay-shadow");
});
