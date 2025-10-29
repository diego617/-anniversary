const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const questionPage = document.getElementById('questionPage');
const letterPage = document.getElementById('letterPage');
const btnOpen = document.getElementById('btnOpen');
const envelope = document.getElementById('envelope');
const letterContent = document.getElementById('letterContent');

// Función para mover el botón NO
btnNo.addEventListener('mouseenter', moveButton);
btnNo.addEventListener('touchstart', moveButton);

function moveButton(e) {
	e.preventDefault();
	const container = document.querySelector('.buttons-container');
	const containerRect = container.getBoundingClientRect();
	
	const maxX = containerRect.width - btnNo.offsetWidth;
	const maxY = containerRect.height - btnNo.offsetHeight;
	
	const randomX = Math.random() * maxX;
	const randomY = Math.random() * maxY;
	
	btnNo.style.left = randomX + 'px';
	btnNo.style.top = randomY + 'px';
	btnNo.style.transform = 'none';
}

// Botón SÍ ACEPTO
btnYes.addEventListener('click', () => {
	questionPage.style.display = 'none';
	letterPage.style.display = 'block';
});

// Botón ABRIR carta
btnOpen.addEventListener('click', () => {
	envelope.style.display = 'none';
	letterContent.classList.remove('hidden');
	letterContent.style.display = 'block';
});