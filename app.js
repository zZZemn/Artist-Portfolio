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

const topFunction = () => {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE and Opera
}

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"];

for (let x = 0; x < images.length; x++) {            
    const element = '<img src="/Images/"' + images[x] + '">'
    document.querySelector('.projects-container').innerHTML += element;
}

const functionCall = () => {
navBGshow();
navSlide();
}

functionCall();

