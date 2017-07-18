import './index.css'
import 'material-design-lite/dist/material.min.css'
import 'ionicons/dist/css/ionicons.min.css'

import 'material-design-lite'
import '../js/docReady'

window.logout = () => {
  window.location.href = '/login/'
}

docReady(() => {
  document.querySelectorAll('.profile__menu__tabs__item').forEach((item) => {
    item.addEventListener('click', (event) => {
      let el = event.target
      const activeClass = 'profile__menu__tabs__item--active'
      if (el.classList.contains(activeClass)) {
        return
      }

      let activeEl = document.querySelector(`.${activeClass}`)
      activeEl.className = activeEl.className.replace(activeClass, '')
      el.className += ` ${activeClass}`
    })
  })
})
