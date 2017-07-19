import '../../js/docReady'

// For IE
if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach
}

docReady(() => {
  if (navigator.userAgent.indexOf('Firefox') > 0) {
    document.querySelectorAll('[data-browser-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-browser-class')}--firefox`
    })
  } else if (navigator.userAgent.indexOf('Safari') > 0) {
    document.querySelectorAll('[data-browser-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-browser-class')}--safari`
    })
  }
})
