const header = document.querySelector('.navbar')

window.onscroll = function () {
  var top = window.scrollY
  if (top >= 100) {
    header.classList.add('navbarDark')
  } else {
    header.classList.remove('navbarDark')
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})
