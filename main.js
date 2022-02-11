
let pagrindinis = document.querySelector("img");
document.querySelector(".papildomos").addEventListener("click", function (e) {
    let imgSrc = e.target;
    let src = imgSrc.getAttribute("src");
    pagrindinis.setAttribute("src", src);
    let alt = imgSrc.getAttribute("alt");


})