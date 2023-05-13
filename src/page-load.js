import homeImg from './home.jpeg'

const headerElement = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.textContent = 'Very Good Pizzeria';

    return header;
}

const navElement = () => {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    
    const home = document.createElement('p');
    home.classList.add('home');
    home.textContent = 'home';

    nav.appendChild(home);

    return nav;
}

const mainElement = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    const para = document.createElement('p');
    para.textContent = 'We serve very good pizza';

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