import { headerElement, navElement, mainElement} from './page-load';

const content = document.querySelector("#content");

const header = headerElement();
const nav = navElement();
const main = mainElement();


content.appendChild(header);
content.appendChild(nav);
content.appendChild(main);