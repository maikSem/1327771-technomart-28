var FeedbackLink = document.querySelector(".map-button");
var FeedbackForm = document.querySelector(".feedback-form");
var FeedbackPopap = document.querySelector(".modal-form");
var FeedbackClose = document.querySelector(".button-close");
var FeedbackLogin = document.querySelector(".feedback-login");
var FeedbackEmail = document.querySelector(".feedback-form-email");
var FeedbackTextArea = document.querySelector(".feedback-form-textarea");
var card = document.querySelector(".card-wrapper");
var modalCard = document.querySelector(".modal-map");
var closeModalCard = document.querySelector(".close-map");
var buyButtons = document.querySelectorAll(".button-buy");
var basket = document.querySelector(".catalog-basket");
var closeBasket = document.querySelector(".button-basket-close");
var basketHeader = document.querySelector(".header-basket");
var basketNumber = document.querySelector(".basket-number");
var counterBasket = 0;

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

buyButtons.forEach(function (item, buyButtons) {
    item.addEventListener("click", function () {
        basket.classList.add("modal-show");
        basketHeader.classList.add("basket-red");
        counterBasket++;
        basketNumber.textContent = counterBasket;
    }
    )
});

closeBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    basket.classList.remove("modal-show")
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (basket.classList.contains("modal-show")) {
            evt.preventDefault();
            basket.classList.remove("modal-show");
        }
    }
});

if (FeedbackLink) {
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
        FeedbackPopap.classList.remove("modal-error");
    })
};

if (FeedbackForm) {
    FeedbackForm.addEventListener("submit", function (evt) {
        if (!FeedbackLogin.value || !FeedbackEmail.value || !FeedbackTextArea.value) {
            evt.preventDefault();
            FeedbackPopap.classList.remove("modal-error");
            FeedbackPopap.offsetWidth = FeedbackPopap.offsetWidth;
            FeedbackPopap.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("login", FeedbackLogin.value);
            }
        }
    })
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (FeedbackPopap.classList.contains("modal-show")) {
            evt.preventDefault();
            FeedbackPopap.classList.remove("modal-show");
            FeedbackPopap.classList.remove("modal-error");
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalCard.classList.contains("modal-show")) {
            evt.preventDefault();
            modalCard.classList.remove("modal-show");
        }
    }
});

if (card) {
    card.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalCard.classList.add("modal-show");
    });

    closeModalCard.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalCard.classList.remove("modal-show");
    })
};
