import './menu.css'

const onMenuClick = () => {
    const component = document.createElement('div');
    component.classList.add('menu-component');
    
    for(let i = 1; i < 7; i++) {
        const menuElement = document.createElement('div');
        menuElement.classList.add(`element${i}`);

        const img = document.createElement('div');
        img.classList.add('img');
        const name = document.createElement('div');
        name.classList.add(`name${i}`);

        menuElement.appendChild(img);
        menuElement.appendChild(name);

        component.appendChild(menuElement);
    }

    return component;
}

export {
    onMenuClick,
}