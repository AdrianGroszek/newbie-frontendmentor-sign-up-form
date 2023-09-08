'use strict';

const inputItems = document.querySelectorAll('input');
const submitBtn = document.querySelector('#submit-btn');

const checkFormFields = function (e) {
	e.preventDefault();

	inputItems.forEach((item) => {
		if (item.value) {
			item.classList.remove('valid-input');
			item.nextElementSibling.classList.add('hidden');
		} else {
			item.classList.add('valid-input');
			item.nextElementSibling.classList.remove('hidden');
		}

		if (item.id === 'email') {
			validation(item);
		}
	});
};

const validation = function (item) {
	const email = item.value;
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (!email.match(pattern)) {
		item.value = '';
		item.placeholder = 'example: name@host.tld';
		item.classList.add('valid-input');
		item.nextElementSibling.classList.remove('hidden');
	}
};

submitBtn.addEventListener('click', checkFormFields);
