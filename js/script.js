new Swiper('.review__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Enable debugger
  effect: "cube",
  cubeEffect: {
    shadowOffset: 20,
    shadowScale: 0,
  },
  simulateTouch: true,
  grabCursor: true,
  loop: true,
});


var swiper3 = new Swiper(".welcome__swiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  speed: 1500,
});



$(document).ready(function(){
  $('.card__img img').hover(function() {
    $(this).addClass('zoom');
  }, function() {
    $(this).removeClass('zoom');
  });
});
const swiper = new Swiper('.swiper', {
  parallax: true,
});

var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");
var rangeSaleLeft = document.querySelector(".slider > .range-sale.left");
var rangeSaleRight = document.querySelector(".slider > .range-sale.right");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
  console.log( this.value);
  
	var percent = ((_this.value - min) / (max - min)) * 100;
  
	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
  rangeSaleLeft.style.left =  percent + "%";
  rangeSaleLeft.style.top = '20px';
  rangeSaleLeft.innerHTML = '$' + this.value;
  
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
  console.log(this.value);
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
  rangeSaleRight.style.right = (100 - percent) + "%";
  rangeSaleRight.style.top = '20px';
  rangeSaleRight.innerHTML = '$' + this.value;
	range.style.right = (100 - percent) + "%";
}

setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});

