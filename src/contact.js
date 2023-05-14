import './contact.css';

const onContactClick = () => {
    const component = document.createElement('div');
    component.classList.add('contact-component');

    const call = document.createElement('div');
    call.classList.add('call');
    call.textContent = 'Call: 4888-4888'

    const address = document.createElement('div');
    address.classList.add('address');
    address.textContent = 'Address: The pizzas are so good here you can only find this place in your dreams.';

    component.appendChild(call);
    component.appendChild(address);

    return component;
}

export {
    onContactClick
}