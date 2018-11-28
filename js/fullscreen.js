document.addEventListener('DOMContentLoaded', function() {
  let html_all = document.querySelector('html')
  let nav = document.querySelector('nav')

  nav.addEventListener('click', () => {
    if(html_all.requestFullscreen) {
      html_all.requestFullscreen()
    }
    else if(html_all.msRequestFullscreen) {
      html_all.msRequestFullscreen()
    }
    else if(html_all.mozRequestFullScreen) {
      html_all.mozRequestFullScreen()
    }
    else if(html_all.webkitRequestFullscreen) {
      html_all.webkitRequestFullscreen()
    }
  })
})
