const modalShadow = document.querySelector('.modal-shadow')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function(){
        const courseId = card.getAttribute('id')
        modalShadow.classList.add('active')
        // modalShadow.querySelector('iframe').src = `https://github.com/ecanali/${courseId}`
        modalShadow.querySelector('iframe').src = `https://ecanali.github.io/projects/${courseId}`
    })  
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalShadow.classList.remove('active')
    modalShadow.querySelector('iframe').src = ""
    modal.classList.remove('maximized')
})

document.querySelector('.maximize-modal').addEventListener('click', function(){
    if (modal.classList.contains('maximized')) {
        modal.classList.remove('maximized')
    
    } else {
        modal.classList.add('maximized')
    }
})