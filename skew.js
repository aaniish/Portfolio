const section = document.querySelector("section")
const text = document.querySelector(".loading-text")
let currentPixel = window.pageYOffset

const looper = function() {
	const newPixel = window.pageYOffset
	const diff = newPixel - currentPixel
	const speed = diff * 0.05

	section.style.transform = "skewY(" + speed + "deg)"
	text.style.transform = "skewY(" + speed + "deg)"



	currentPixel = newPixel



	requestAnimationFrame(looper)
}

looper()