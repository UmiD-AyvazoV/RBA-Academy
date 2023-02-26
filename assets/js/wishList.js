document.querySelector('.wish').addEventListener('click', () => {
    document.querySelector('.wishList').classList.add('on');
});

document.querySelector('#icon').addEventListener('click', () => {
    document.querySelector('.wishList').classList.remove('on');
});