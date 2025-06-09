let navItems = document.querySelectorAll(`.nav-item`);
let menu = document.querySelector(`.navbar-collapse`);

for(let item of navItems){
    item.addEventListener(`click`, function(){
        menu.classList.remove(`show`);      
    })
}