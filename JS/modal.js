
const modal = document.querySelector('.modal')
closeBtn = document.querySelector('.close__btn')
btn = document.querySelectorAll('.btn')

btn.forEach((element) => {
    element.addEventListener('click', () => {
        modal.style.display = 'block'
    });
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

modal.addEventListener('click', (event) => {
    if (!(event.target.closest('.model__wrap'))) {
        modal.style.display = 'none'
    }
})