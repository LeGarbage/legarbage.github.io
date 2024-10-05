const sidebar = document.getElementById("sidebar");
const topbar = document.getElementById("topbar");
const linkPlaceholder = document.createElement("div");
linkPlaceholder.style.width = sidebar.children[0].offsetWidth + "px";
linkPlaceholder.style.height = sidebar.children[0].offsetHeight + "px";

// sidebarPlaceholder.style.top = sidebar.offsetTop + "px";
// sidebarPlaceholder.style.left = sidebar.offsetLeft + "px"
// for (let i = 0; i < sidebar.childElementCount; i++){
//     sidebarPlaceholder.children[i].style.width = sidebar.children[i].offsetWidth + "px";
//     sidebarPlaceholder.children[i].style.height = sidebar.children[i].offsetHeight + "px";
// }

window.addEventListener("scroll", function(e){
    for (let i = 0; i < 1; i++){
        let linkTop = sidebar.children[i].getBoundingClientRect().top;
        if (linkTop <= 0 && sidebar.children[i].classList.contains("bar")){
            topbar.appendChild(sidebar.children[i]);
            sidebar.insertBefore(linkPlaceholder.cloneNode(), sidebar.children[0]);
        } else if (linkTop > 0 && !sidebar.children[i].classList.contains("bar")){
            console.log(sidebar.children, topbar.children)
            sidebar.replaceChild(topbar.children[i], sidebar.children[i]);
        }
    }
});