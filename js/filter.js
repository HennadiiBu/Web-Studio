const filterBox = document.querySelectorAll('.box');
const buttonActive = document.querySelectorAll('.button')

document.querySelector('.projects__nav').addEventListener('click', event => {
    
    if (event.target.tagName !== 'BUTTON') return false;
    let filterClass = event.target.dataset['f'];


    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});