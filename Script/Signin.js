window.addEventListener('load', () => {
	const email = sessionStorage.getItem('EMAIL');
	document.getElementById("result-email").innerHTML = email;
})