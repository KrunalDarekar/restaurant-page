const onMenuClick = () => {
    const component = document.createElement('div');
    component.classList.add('menu-component');
    
    component.textContent = "here will be the menu";

    return component;
}

export {
    onMenuClick,
}