const modalShadow = document.querySelector('.modal-shadow')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

// Project card click listener and open modal
for (let card of cards) {
  card.addEventListener('click', function(event) {
    // Prevent modal opening when clicking on projects link
    if (!event.target.classList.contains('card-link')) {
      const projectId = card.getAttribute('id')
      modalShadow.classList.add('active')
      modalShadow.querySelector('iframe').src = `https://ecanali.github.io/assets/${projectId}`
    }    
  })  
}

// Close modal click listener
document.querySelector('.close-modal').addEventListener('click', function() {
  modalShadow.classList.remove('active')
  modalShadow.querySelector('iframe').src = ""
  modal.classList.remove('maximized')
})

// Close modal with esc key
document.addEventListener('keydown', function(event) {
	if (event.key === "Escape") {
		if (modalShadow.classList.contains('active')) {
      modalShadow.classList.remove('active')
      modalShadow.querySelector('iframe').src = ""
      modal.classList.remove('maximized')
    }
  }
})

// Add or remove maximize to the modal
document.querySelector('.maximize-modal').addEventListener('click', function() {
  if (modal.classList.contains('maximized')) {
    modal.classList.remove('maximized')
  } else {
    modal.classList.add('maximized')
  }
})