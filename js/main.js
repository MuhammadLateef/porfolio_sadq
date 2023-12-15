// ==========Toggle icon navbar ==========

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

// ==========scroll section active link ==========

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onScroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');


		if(top >= offset && top < offset +  height) {
			navLinks.forEach(links => {
				llinks.classList.remove('active');
				document.querySelector('header nav a[ href*=' + id +']').	classList.add('active');

			});
		};
	});

	// ========== Sticky navbar ==========

	let header = document.querySelector('header');


	header.classList.toggle('sticky', window.scrollY > 100);

	// ========== remove Toggle icon and  navbar when click navbar link (scrolls) ==========

	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};


	// ========== Scroll Reveal ==========


ScrollReveal({
 	// reset: true,
 	distance: '80px',
 	duration: 2000,
 	delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



	// ========== typed js ==========

var typed = new Typed('.multiple-text',{
	strings:['Front End Web Developer' , 'UI/UX Designer'],
	typeSpeed:100,
	backSpeed:100,
	backDelay:1000,
	loop:true

});




				// =======    popup =========
 
let popup = document.getElementById("popup");

function openPopup(){
	popup.classList.add("open-popup");
}

function closePopup(){
	popup.classList.remove("open-popup");
}


// ===== cv download event ====

document.getElementById('downloadButton').addEventListener('click', function() {
  // Replace 'path/to/your/cv.pdf' with the actual path to your PDF file
  const pdfPath = 'file:///C:/Users/Dell/Desktop/aly.pdf';
  downloadPDF(pdfPath);
});

function downloadPDF(pdfPath) {
  const link = document.createElement('a');
  link.href = 'file:///C:/Users/Dell/Desktop/aly.pdf';
  link.download = 'Your_CV.pdf';
  link.click();
}




