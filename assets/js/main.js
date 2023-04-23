
//grab elements

const selectElement = selector =>{

    const element = document.querySelector(selector)

    if(element) return element;

    throw new Error(`Somenthing went. make sure that ${selector} exists or is typed correctly.`);

};


//nav styles on scroll

const scrollHeader = () => {
    
    const headerElement = selectElement('#header');

    if(this.scrollY >= 15){
            headerElement.classList.add('activated');
    }else{
            headerElement.classList.remove('activated');
    }
};

//add the event

window.addEventListener('scroll', scrollHeader)


//Open menu & Search pop-up


const menuToggleIcon = selectElement('#menu-toggle-icon');

// function calla menuToggleIcon

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

//add event

menuToggleIcon.addEventListener('click',toggleMenu);

//open /close search form popup

const formOpenBtn = selectElement('#search-icon');

const formCloseBtn = selectElement('#form-close-btn');

const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () =>

searchFormContainer.classList.add('activated'));

formCloseBtn.addEventListener('click', () =>

searchFormContainer.classList.remove('activated'));

window.addEventListener('keyup', event => {
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
});


//switch theme/add to local storage

const bodyElement = document.body;

const themeToggleBtn = selectElement('#theme-toggle-btn');

const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('light-theme');
}


themeToggleBtn.addEventListener('click', () => {
   
    bodyElement.classList.toggle('light-theme');

    //add to the localStore

    if(bodyElement.classList.contains('light-theme')){
            
        localStorage.setItem('currentTheme','themeActive');
    
    } else {

        localStorage.removeItem('currentTheme');

    }



});



// the Swiper


const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700:{
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }

})





















