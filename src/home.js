import homeImg from './home.jpeg';
import './home.css';

const onHomeClick = () => {
    const component = document.createElement('div');
    component.classList.add('home-component');

    const para = document.createElement('p');
    para.textContent = 'We serve the best pizza around you';

    const img = new Image();
    img.src = homeImg

    component.appendChild(para);
    component.appendChild(img);

    return component;
}

export {
    onHomeClick
}