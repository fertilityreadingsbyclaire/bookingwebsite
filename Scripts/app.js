

const indexCont = document.querySelector('.index-page-container')

window.addEventListener('scroll', () => {
  if(window.scrollY > indexCont.offsetTop - 20) {
    document.querySelector('.popup-bar').classList.add('show')
  } else {
    document.querySelector('.popup-bar').classList.remove('show')
  }
})