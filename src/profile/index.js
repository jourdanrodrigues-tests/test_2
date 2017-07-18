import 'material-design-lite/dist/material.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import './index.css'

import 'material-design-lite'
import '../js/docReady'

window.logout = () => {
  window.location.href = '/login/'
}

docReady(() => {
  // Firefox handler: Some things might be need just for it
  if (navigator.userAgent.indexOf('Firefox') > 0) {
    document.querySelectorAll('[data-firefox-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-firefox-class')}--firefox`
    })
  }
  // Tab handler
  document.querySelectorAll('.profile__menu__tabs__item').forEach((item) => {
    item.addEventListener('click', (event) => {
      const activeClass = 'profile__menu__tabs__item--active'
      if (event.target.classList.contains(activeClass)) { return }
      let activeEl = document.querySelector(`.${activeClass}`)
      activeEl.className = activeEl.className.replace(activeClass, '')
      event.target.className += ` ${activeClass}`
    })
  })
})
