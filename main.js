const hamburgesa = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const header = document.getElementsByTagName("header")[0];
const body = header.parentElement;
const h1 = header.children[2];
const article = document.getElementsByTagName("article");
const footer = document.getElementsByTagName("footer")[0];

h2Black = document.getElementsByTagName("h2");

hamburgesa.addEventListener(`click`, ()=> {
    hamburgesa.classList.toggle('rotate');
    menu.classList.toggle('visible');
    header.classList.toggle('negro');
    footer.classList.toggle('negro');
    footer.classList.toggle('blancoTexto')
    h1.classList.toggle('margen');
    body.classList.toggle('blanco');
    if (h1.style.color != "white") {
        h1.style.color = "white"
        hamburgesa.style.color = "white"
        h2Black[0].style.color = "black";
        h2Black[1].style.color = "black";
        h2Black[2].style.color = "black";
        footer.style.color = "white";
    } else {
        h1.style.color = "black"
        hamburgesa.style.color = "black"
        h2Black[0].style.color = "white";
        h2Black[1].style.color = "white";
        h2Black[2].style.color = "white";
        footer.style.color = "blackz";
    }
})

let a = article[0].children[0].height + 60;
for (i in article) {
    let h2 = article[i].children[1];
    h2.style.marginTop = `${a}px`;
}
