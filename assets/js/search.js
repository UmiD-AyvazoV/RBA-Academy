document.querySelector('.searchBtn').addEventListener('click', () => {
    document.querySelector('.search').classList.add('on');
    document.querySelector('main').classList.add('searchActive');
    console.log("isleyir")
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.search').classList.remove('on');
    document.querySelector('main').classList.remove('searchActive');
})