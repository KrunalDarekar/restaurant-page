import { headerElement, navElement, mainElement} from './page-load';
import { onMenuClick } from './menu';
import { onHomeClick } from './home';
import { onContactClick } from './contact';
import './style.css';

const content = document.querySelector("#content");

const header = headerElement();
const nav = navElement();
const main = mainElement();

content.appendChild(header);
content.appendChild(nav);
content.appendChild(main);

const menuBtn = document.querySelector('.menu');
const homeBtn = document.querySelector('.home');
const contactBtn = document.querySelector('.contact');

homeBtn.onclick = () => {
    main.textContent = "";

    menuBtn.classList.remove('active');
    homeBtn.classList.add('active');
    contactBtn.classList.remove('active');

    main.appendChild(onHomeClick());
}

menuBtn.onclick = () => {
    main.textContent = "";

    menuBtn.classList.add('active');
    homeBtn.classList.remove('active');
    contactBtn.classList.remove('active');

    main.appendChild(onMenuClick());

    const name1 = document.querySelector('.name1');
    name1.textContent = 'Margherita';
    const name2 = document.querySelector('.name2');
    name2.textContent = 'Corn & Cheese';
    const name3 = document.querySelector('.name3');
    name3.textContent = 'Farmhouse';
    const name4 = document.querySelector('.name4');
    name4.textContent = 'Peppy Paneer';
    const name5 = document.querySelector('.name5');
    name5.textContent = 'BBQ Chicken';
    const name6 = document.querySelector('.name6');
    name6.textContent = 'Chicken Sausage';
}

contactBtn.onclick = () => {
    main.textContent = "";
    menuBtn.classList.remove('active');
    homeBtn.classList.remove('active');
    contactBtn.classList.add('active');
    
    main.appendChild(onContactClick());
}