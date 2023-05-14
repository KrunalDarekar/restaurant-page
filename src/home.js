const onHomeClick = () => {
    const component = document.createElement('div');
    component.classList.add('home-component');

    component.textContent = 'here will be home option';

    return component;
}

export {
    onHomeClick
}