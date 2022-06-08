const blockForMouse = document.querySelector('.col');

blockForMouse.addEventListener("mouseover", function (event) {
	var element = document.getElementById("q1");
    element.classList.add("q1style");
});
blockForMouse.addEventListener("mouseout", function (event) {
	var element = document.getElementById("q1");
    element.classList.remove("q1style");
});
blockForMouse.addEventListener("mouseover", function (event) {
	var element = document.getElementById("q2");
    element.classList.add("q2style");
});
blockForMouse.addEventListener("mouseout", function (event) {
	var element = document.getElementById("q2");
    element.classList.remove("q2style");
});
blockForMouse.addEventListener("mouseover", function (event) {
	var element = document.getElementById("q3");
    element.classList.add("q3style");
});
blockForMouse.addEventListener("mouseout", function (event) {
	var element = document.getElementById("q3");
    element.classList.remove("q3style");
});


const blockForMouse2 = document.querySelector('.col2');

blockForMouse2.addEventListener("mouseover", function (event) {
	var element = document.getElementById("w1");
    element.classList.add("w1style");
});
blockForMouse2.addEventListener("mouseout", function (event) {
	var element = document.getElementById("w1");
    element.classList.remove("w1style");
});
blockForMouse2.addEventListener("mouseover", function (event) {
	var element = document.getElementById("w2");
    element.classList.add("w2style");
});
blockForMouse2.addEventListener("mouseout", function (event) {
	var element = document.getElementById("w2");
    element.classList.remove("w2style");
});
blockForMouse2.addEventListener("mouseover", function (event) {
	var element = document.getElementById("w3");
    element.classList.add("w3style");
});
blockForMouse2.addEventListener("mouseout", function (event) {
	var element = document.getElementById("w3");
    element.classList.remove("w3style");
});


const blockForMouse3 = document.querySelector('.col3');

blockForMouse3.addEventListener("mouseover", function (event) {
	var element = document.getElementById("e1");
    element.classList.add("e1style");
});
blockForMouse3.addEventListener("mouseout", function (event) {
	var element = document.getElementById("e1");
    element.classList.remove("e1style");
});
blockForMouse3.addEventListener("mouseover", function (event) {
	var element = document.getElementById("e2");
    element.classList.add("e2style");
});
blockForMouse3.addEventListener("mouseout", function (event) {
	var element = document.getElementById("e2");
    element.classList.remove("e2style");
});
blockForMouse3.addEventListener("mouseover", function (event) {
	var element = document.getElementById("e3");
    element.classList.add("e3style");
});
blockForMouse3.addEventListener("mouseout", function (event) {
	var element = document.getElementById("e3");
    element.classList.remove("e3style");
});

$(function() {
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
