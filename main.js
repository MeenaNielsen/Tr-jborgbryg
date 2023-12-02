//function to open nav menu or dropdown//
const nav = document.querySelector(`.nav_links`);
const openNavBtn = document.querySelector(`#nav_toggle-open`);
const closeNavBtn = document.querySelector(`#nav_toggle-close`);
/* blog-------- */
const blogBtn= document.querySelector(`.blog.html`);

const openNav = ()=> {
    nav.style.display =`flex`;
    openNavBtn.style.display = `none`;
    closeNavBtn.style.display =`inline-block`;    
}
openNavBtn.addEventListener(`click`, openNav)


// function to close nav menu or dropdown//

const closeNav = () =>{
    nav.style.display ='none';
    openNavBtn.style.display = `inline-block`;
    closeNavBtn.style.display = `none`; 
   
}
closeNavBtn.addEventListener(`click`, closeNav);
/* -----blog btn----- */
blogBtn.addEventListener(`click`).innerHtml=`blog.html`;