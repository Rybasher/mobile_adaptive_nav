let burger = document.querySelector(".menu__burger");

let lis = document.querySelectorAll('.menu__li');

burger.addEventListener("click", function () {
	burger.classList.toggle("_active");
	document.querySelector(".menu__ul").classList.toggle("_active");
})
for (let index = 0; index < lis.length; index++) {
	const element = lis[index];
	element.addEventListener("click", function () {
		element.classList.toggle("_active")
	})

}