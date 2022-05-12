function changeImageCarrousel() {
	const MAX = 1;

	var carrossel_image = document.querySelector(".carrossel img");
	var indice_imagem = carrossel_image.getAttribute("data-indice");

	if (indice_imagem == MAX) {
		carrossel_image.setAttribute("data-indice", 0);
		carrossel_image.src = "./assets/images/carrossel0.webp";
	} else {
		carrossel_image.setAttribute("data-indice", parseInt(indice_imagem) + 1);
		carrossel_image.src = "./assets/images/carrossel" + (parseInt(indice_imagem) + 1) + ".webp";
	}
}

const imageTransitionTime = 3000;

setInterval(changeImageCarrousel, imageTransitionTime);

function navigateTo(url) {
	window.open(url, '_blank');
}

function talkByWhatsapp() {
	const URL = "https://wa.me";
	const PHONE = "51995253515";

	navigateTo(`${URL}/${PHONE}`);
}

const whatsappButton = document.querySelector("#whatsapp-button");
whatsappButton.addEventListener("click", talkByWhatsapp, { passive: true });

function tansformTermToQuery(term) {
	let words = term.split("%");

	return words.toString().replace(/ /g, "%")
}


const searchInput = document.querySelector("#searchInput");

function search() {
	let searchedTerm = searchInput.value;
	let queryValue = searchedTerm;
	if (searchedTerm.split() > 1) {
		queryValue = tansformTermToQuery(searchedTerm);
	}

	navigateTo(`https://www2.faccat.br/portal/?q=search/node/${queryValue}`)
}

searchInput.addEventListener('keydown', (e) => {
	const code = e.keyCode;
	if (code === 13) {
		search();
	}
}, { passive: true });

const btnPesquisar = document.querySelector(".lupa");
btnPesquisar.addEventListener("click", search, { passive: true });

const btnsGrade = document.querySelectorAll('.grade-curso')
for (const btnGrade of btnsGrade) {
	btnGrade.addEventListener("click", function (e) {
		navigateTo('https://www2.faccat.br/portal/sites/default/files/matrizCurricular_40_Sistemas%20de%20Informa%C3%A7%C3%A3o.pdf');
	}, { passive: true });
}