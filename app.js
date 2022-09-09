const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const navSlide = () => {

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-show');
        burger.classList.toggle('toggle');
    });
}   //click then add

document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () =>{
    burger.classList.remove('toggle');
    nav.classList.remove('nav-show');
}));  //Removing in the classlist whe clicking inside a nav-links

const navBGshow = () => {
    const navBG = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if(window.scrollY >= 50)
        {
            navBG.classList.add('scrolled');
        }
        else 
        {
            navBG.classList.remove('scrolled');
        }
    });
}   //Scroll then add in the classlist




const functionCall = () => {
navBGshow();
navSlide();
}

functionCall();

