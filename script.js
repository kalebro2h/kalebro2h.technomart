var left = document.querySelector('.left'); 
var right = document.querySelector('.right'); 
var slides = document.querySelectorAll('.slide'); 
var curSlide = 0; 

left.addEventListener('click', function () { 
	slide('left'); 
}); 

right.addEventListener('click', function () { 
	slide('right'); 
}) 

function slide (direction) { 
	var count = slides.length; 
	var nextSlide = direction === 'left' ? curSlide - 1 : curSlide + 1; 
	nextSlide = nextSlide > count - 1 ? 0 : 
	(nextSlide < 0 ? count - 1 : nextSlide); 

	slides[nextSlide].style.display = 'block'; 
	slides[curSlide].style.display = 'none'; 

	curSlide = nextSlide; 
} 

function openTab (id, obj) {
	var tab = document.getElementById(id);
	var active = document.querySelector('.tab-button_active');
	var activeTab = document.querySelector('.tab-content_active');

	active.classList.remove('tab-button_active');
	obj.classList.add('tab-button_active');

	activeTab.classList.remove('tab-content_active');
	tab.classList.add('tab-content_active');
}

function openModal(id) {
	event.preventDefault();
	var modal = document.getElementById(id);
	modal.style.display = 'block';
}

function closeModal(id) { 
	event.preventDefault();
	var modal = document.getElementById(id); 
	modal.style.display = 'none'; 
}

