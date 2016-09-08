var popup = document.querySelector(".modal-content-index");

if (popup) {
    var link = document.querySelector(".modal");
    /*ссылка откр форму*/
    var close = popup.querySelector(".modal-content-close");
    var form = popup.querySelector("form");
    var login = popup.querySelector("[name=name]");
    var email = popup.querySelector("[name=email]");
    var text = popup.querySelector("[name=text]");
    var storage = {
        login: "",
        email: ""
    };
    storage.login = localStorage.getItem("login");
    storage.email = localStorage.getItem("email");
    link.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");

        if (storage.login && storage.email) {
            login.value = storage.login;
            email.value = storage.email;
            text.focus();
        } else {
            login.focus();
        }
    });
    close.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
    });
    form.addEventListener("submit", function (event) {
        if (!login.value || !email.value) {
            event.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        } else {
            localStorage.setItem("login", login.value);
            localStorage.setItem("email", email.value);
        }
    });
    window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
                popup.classList.remove("modal-error");

            }
        }
    });}




