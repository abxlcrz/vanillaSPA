import view  from '../views/home.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.classList='row';
    divElement.innerHTML = view;
    return divElement;
};