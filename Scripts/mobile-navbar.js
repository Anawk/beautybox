/*class mobileNavbar{
    constructor(menu,mobileMenu,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.menu = document.querySelector(menu);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.menu.classList.toggle(this.activeClass);
    }

    addClickEvent (){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".menu",
    ".menu li",
);

mobileNavbar.init();
*/
class MobileNavbar {
    constructor(menuToggle, menu) {
        this.menuToggle = document.querySelector(menuToggle);
        this.menu = document.querySelector(menu);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.menu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.menuToggle.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menuToggle && this.menu) {
            this.addClickEvent();
        }
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu"
);

mobileNavbar.init();
