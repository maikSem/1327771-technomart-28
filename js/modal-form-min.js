var FeedbackLink=document.querySelector(".map-button"),FeedbackForm=document.querySelector(".feedback-form"),FeedbackPopap=document.querySelector(".modal-form"),FeedbackClose=document.querySelector(".button-close"),FeedbackLogin=document.querySelector(".feedback-login"),FeedbackEmail=document.querySelector(".feedback-form-email"),FeedbackTextArea=document.querySelector(".feedback-form-textarea"),card=document.querySelector(".card-wrapper"),modalCard=document.querySelector(".modal-map"),closeModalCard=document.querySelector(".close-map"),buyButtons=document.querySelectorAll(".button-buy"),basket=document.querySelector(".catalog-basket"),closeBasket=document.querySelector(".button-basket-close"),basketHeader=document.querySelector(".header-basket"),basketNumber=document.querySelector(".basket-number"),counterBasket=0,isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}buyButtons.forEach(function(e,a){e.addEventListener("click",function(){basket.classList.add("modal-show"),basketHeader.classList.add("basket-red"),counterBasket++,basketNumber.textContent=counterBasket})}),closeBasket.addEventListener("click",function(e){e.preventDefault(),basket.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&basket.classList.contains("modal-show")&&(e.preventDefault(),basket.classList.remove("modal-show"))}),FeedbackLink&&(FeedbackLink.addEventListener("click",function(e){e.preventDefault(),FeedbackPopap.classList.add("modal-show"),storage?(FeedbackLogin.value=storage,FeedbackEmail.focus()):FeedbackLogin.focus()}),FeedbackClose.addEventListener("click",function(e){e.preventDefault(),FeedbackPopap.classList.remove("modal-show"),FeedbackPopap.classList.remove("modal-error")})),FeedbackForm&&FeedbackForm.addEventListener("submit",function(e){FeedbackLogin.value&&FeedbackEmail.value&&FeedbackTextArea.value?isStorageSupport&&localStorage.setItem("login",FeedbackLogin.value):(e.preventDefault(),FeedbackPopap.classList.remove("modal-error"),FeedbackPopap.offsetWidth,FeedbackPopap.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&FeedbackPopap.classList.contains("modal-show")&&(e.preventDefault(),FeedbackPopap.classList.remove("modal-show"),FeedbackPopap.classList.remove("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&modalCard.classList.contains("modal-show")&&(e.preventDefault(),modalCard.classList.remove("modal-show"))}),card&&(card.addEventListener("click",function(e){e.preventDefault(),modalCard.classList.add("modal-show")}),closeModalCard.addEventListener("click",function(e){e.preventDefault(),modalCard.classList.remove("modal-show")}));