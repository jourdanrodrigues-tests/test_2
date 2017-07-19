import '../../js/docReady'
import browsers from '../../js/browserFlags'

// For IE
if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach
}

docReady(() => {
  if (browsers.firefox) {
    document.querySelectorAll('[data-browser-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-browser-class')}--firefox`
    })
  } else if (browsers.ie) {
    document.querySelectorAll('[data-browser-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-browser-class')}--ie`
    })
  } else if (browsers.safari) {
    document.querySelectorAll('[data-browser-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-browser-class')}--safari`
    })
  }
})
