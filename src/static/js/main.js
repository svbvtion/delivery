'use strict';

const modalLinks = document.querySelectorAll('.modal__link');
const modalClose = document.querySelectorAll('[data-modal]');
const body = document.querySelector('body');


const productReduceBtn = document.querySelectorAll('.products__count_reduce');
const productEnlargeBtn = document.querySelectorAll('.products__count_enlarge');

const productCount = document.querySelectorAll('.products__count_value');
const priceValue = document.querySelectorAll('.products__price_value');


const resultPrice = document.querySelector('.result__value');


modalLinks.forEach(link => {
	let modalID = link.getAttribute('href');

	let curentModal = document.querySelector(modalID);
	link.addEventListener('click', modalActive.bind(null, curentModal));
});

modalClose.forEach(modal => {
	modal.addEventListener('click', function(e) {
		if(e.target.dataset.close) {
			modalToClose(modal)
		}

	});
})


function modalActive(modal, e) {
	body.style.paddingRight = (window.innerWidth - body.offsetWidth)+'px';
	modal.classList.toggle('active')
	body.classList.toggle('lock')
	e.preventDefault()

}

function modalToClose(modal) {
	modal.classList.toggle('active')
	body.classList.toggle('lock')
	body.style.paddingRight = 0;
}


function setResultPrice() {
	let pricesList = Array.from(priceValue).map(i => +i.textContent)
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	resultPrice.textContent = pricesList.reduce(reducer)+' ';
}

productReduceBtn.forEach((button, index) => {
	button.addEventListener('click', function(e) {
		let curentCount = productCount[index];
		let countValue = curentCount.textContent;

		let curentPrice = priceValue[index];

		if(countValue > 0) {
			curentCount.textContent = +countValue - 1
			curentPrice.textContent = +curentCount.textContent * 250+' '
			setResultPrice()
		}
	});
})


productEnlargeBtn.forEach((button, index) => {
	button.addEventListener('click', function(e) {
		let curentCount = productCount[index];
		let countValue = curentCount.textContent;

		let curentPrice = priceValue[index];

		curentCount.textContent = +countValue + 1
		curentPrice.textContent = +curentCount.textContent * 250+' '
		setResultPrice()
	});
})