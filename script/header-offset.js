const Header = document.querySelector("header");
const Paper = document.querySelector(".paper");

const updatePaper = () => {
	Paper.style.marginTop = Header.offsetHeight + 6 + "px";
};

document.addEventListener("resize", updatePaper);

updatePaper();
