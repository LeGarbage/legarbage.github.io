const navbar = document.getElementById("navbar");

navbar.style.width = `calc(${navbar.children[navbar.children.length - 1].getBoundingClientRect().right}px + ${navbar.children.length - 1}em)`;

for(let i = 0; i < navbar.children.length; i++){
    navbar.children[i].style.transform = `translate(calc(${document.documentElement.clientWidth - navbar.children[i].getBoundingClientRect().right}px - 1em), calc(${navbar.getBoundingClientRect().bottom * i}px - ${i}em))`;
    document.styleSheets[0].insertRule(`@keyframes move-link-${i}{0%,10%{transform: translate(${getTranslateX(navbar.children[i])}px,${getTranslateY(navbar.children[i])}px);}${(70/navbar.children.length) * i + 10}%{transform: translate(${getTranslateX(navbar.children[i])}px ,0px);}80%,100%{transform: translateX(0);}}`)
    navbar.children[i].style.animation = `move-link-${i} linear forwards`;
    navbar.children[i].style.animationTimeline = `scroll(root block)`;
    navbar.children[i].style.animationTimingFunction = `ease-out`
    console.log(navbar.children[i].style, document.styleSheets[0])
}

function getTranslateX(element){
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41;
}

function getTranslateY(element){
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m42;
}