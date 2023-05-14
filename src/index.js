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
}

contactBtn.onclick = () => {
    main.textContent = "";
    menuBtn.classList.remove('active');
    homeBtn.classList.remove('active');
    contactBtn.classList.add('active');
    
    main.appendChild(onContactClick());
}