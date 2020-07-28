import view  from '../views/posts.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.classList=' col-md mx auto';
    divElement.innerHTML = view;
    return divElement;
    
};