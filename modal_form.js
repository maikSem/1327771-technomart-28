var FeedbackLink = document.querySelector(".map-button");
var FeedbackForm = document.querySelector(".feedback-form");
var FeedbackPopap = document.querySelector(".modal-form");
var FeedbackClose = document.querySelector(".button-close");
var FeedbackLogin = document.querySelector(".feedback-login");
var FeedbackEmail = document.querySelector(".feedback-form-email");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

FeedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    FeedbackPopap.classList.add("modal-show");

    if (storage) {
        FeedbackLogin.value = storage;
        FeedbackEmail.focus();
    } else {
        FeedbackLogin.focus();
    }
});

FeedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    FeedbackPopap.classList.remove("modal-show");
});

FeedbackForm.addEventListener("submit", function (evt) {
    if (!FeedbackLogin.value || !FeedbackEmail.value) {
        evt.preventDefault();
        FeedbackPopap.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", FeedbackLogin.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (FeedbackPopap.classList.contains("modal-show")) {
            evt.preventDefault();
            FeedbackPopap.classList.remove("modal-show");
        }
    }
});