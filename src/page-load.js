import homeImg from './home.jpeg'

const headerElement = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.textContent = "kay's pizzeria";

    return header;
}

const navElement = () => {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    
    const home = document.createElement('button');
    home.classList.add('home');
    home.textContent = 'Home';

    const menu = document.createElement('button');
    home.classList.add('menu');
    menu.textContent = 'Menu';

    const contact = document.createElement('button');
    home.classList.add('contact');
    contact.textContent = 'Contact';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}

const mainElement = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    const para = document.createElement('p');
    para.textContent = 'We serve the best pizza around you';

    const img = new Image();
    img.src = homeImg
    
    main.appendChild(para);
    main.appendChild(img);

    return main;
}

export {
    headerElement,
    navElement,
    mainElement
}