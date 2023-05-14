const onContactClick = () => {
    const component = document.createElement('div');
    component.classList.add('contact-component');

    component.textContent = "contact info here";

    return component;
}

export {
    onContactClick
}