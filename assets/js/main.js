/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on any nav__link we remove showmenu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/
const modalView = document.querySelectorAll('.services__modal'),
        modalBtn = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')


        let modal = function(modalclick){
            modalView[modalclick].classList.add('active-modal')
        }

        modalBtn.forEach((modalBtn,i) =>{
            modalBtn.addEventListener('click',()=>{
                modal(i)
            })
        })

        modalCloses.forEach((modalClose)=>{
            modalClose.addEventListener('click', ()=>{
                modalView.forEach((modalView) =>{
                    modalView.classList.remove('active-modal')
                })
            })
        })

/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 