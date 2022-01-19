const Header = document.querySelector("header");
const Paper = document.querySelector(".paper");

const updatePaper = () => {
	Paper.style.marginTop = Header.offsetHeight + "px";
};

document.addEventListener("scroll", updatePaper);

updateMain();
