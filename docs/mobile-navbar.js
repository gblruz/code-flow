class MobileNavbar{
    constructor(mobileMenu , navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass - "actvie"
        
        this.handleClick = this.handleClick.bind();
    }

    handClick(){
        console.log(this);
        this.navList.classList.toggle(yhis.activeClass)
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handClick )

    }

    Infinity(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    "nav-list li",
);
MobileNavbar.init();