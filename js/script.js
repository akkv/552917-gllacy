var popuplink = document.querySelector(".feedback_btn");
var popup = document.querySelector(".feedback-popup");
var popupclose = popup.querySelector(".feedback-popup_close");
var overlay = document.querySelector(".modal-overlay");

var search = document.querySelector(".search");
var search_form = document.querySelector(".search-form");
var search_btn = document.querySelector(".search-btn");
var search_field = search_form.querySelector("[name=search]");

var login = document.querySelector(".login");
var login_form = document.querySelector(".login-form");
var login_btn = document.querySelector(".login-btn");
var login_field = login_form.querySelector("[name=email]");

var basket = document.querySelector(".basket");
var basket_form = document.querySelector(".basket-form");
var basket_btn = document.querySelector(".basket-btn");

var wrapper = document.querySelector(".page-wrapper")
var slide1 = document.querySelector("#slide1");
var slide2 = document.querySelector("#slide2");
var slide3 = document.querySelector("#slide3");
var slide_control1 = document.querySelector(".btn-slide1");
var slide_control2 = document.querySelector(".btn-slide2");
var slide_control3 = document.querySelector(".btn-slide3");
var slide_show = document.querySelector(".showing");
var control_active = document.querySelector(".control-active");

slide_control1.addEventListener("click", function(){
    wrapper.classList.add("background1"),
    wrapper.classList.remove("background2"),
    wrapper.classList.remove("background3"),
    slide1.classList.add("showing"),
    slide_control1.classList.add("control-active"),
    slide2.classList.remove("showing"),
    slide_control2.classList.remove("control-active"),
    slide3.classList.remove("showing"),
    slide_control3.classList.remove("control-active")
});
slide_control2.addEventListener("click", function(){
    wrapper.classList.add("background2"),
    wrapper.classList.remove("background1"),
    wrapper.classList.remove("background3"),
    slide2.classList.add("showing"),
    slide_control2.classList.add("control-active"),
    slide1.classList.remove("showing"),
    slide_control1.classList.remove("control-active"),
    slide3.classList.remove("showing"),
    slide_control3.classList.remove("control-active")
}); 
slide_control3.addEventListener("click", function(){
    wrapper.classList.add("background3"),
    wrapper.classList.remove("background2"),
    wrapper.classList.remove("background1"),
    slide3.classList.add("showing"),
    slide_control3.classList.add("control-active"),
    slide2.classList.remove("showing"),
    slide_control2.classList.remove("control-active"),
    slide1.classList.remove("showing"),
    slide_control1.classList.remove("control-active")
});

popuplink.addEventListener("click", function (evt) {evt.preventDefault(),popup.classList.add("modal-feedback-show"),overlay.classList.add("modal-show")});
popupclose.addEventListener("click", function (evt) {evt.preventDefault(),popup.classList.remove("modal-feedback-show"),overlay.classList.remove("modal-show")});

search_btn.addEventListener("click",function(evt){a.preventDefault()});
search.addEventListener("mouseover",function(evt){evt.preventDefault(),search_form.classList.add("modal-show"),search_field.focus()});
search.addEventListener("mouseout",function(evt){evt.preventDefault(),search_form.classList.remove("modal-show")});

login_btn.addEventListener("click",function(evt){a.preventDefault()});
login.addEventListener("mouseover",function(evt){evt.preventDefault(),login_form.classList.add("modal-show"),login_field.focus()});
login.addEventListener("mouseout",function(evt){evt.preventDefault(),login_form.classList.remove("modal-show")});

basket_btn.addEventListener("click",function(evt){a.preventDefault()});
basket.addEventListener("mouseover",function(evt){evt.preventDefault(),basket_form.classList.add("modal-show")});
basket.addEventListener("mouseout",function(evt){evt.preventDefault(),basket_form.classList.remove("modal-show")});
