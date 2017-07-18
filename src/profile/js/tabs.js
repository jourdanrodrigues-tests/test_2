import '../../js/docReady'

docReady(() => {
  // Tab handlers
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
