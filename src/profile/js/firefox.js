import '../../js/docReady'

docReady(() => {
  // Firefox handler: Some things might be need just for it
  if (navigator.userAgent.indexOf('Firefox') > 0) {
    document.querySelectorAll('[data-firefox-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-firefox-class')}--firefox`
    })
  }
})
