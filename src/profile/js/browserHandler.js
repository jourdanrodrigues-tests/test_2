import '../../js/docReady'
import browsers from '../../js/browserFlags'

// For IE
if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach
}

docReady(() => {
  if (browsers.firefox || browsers.ie) { // Same rules apply
    document.querySelectorAll('[data-browser-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-browser-class')}--firefox`
    })
  } else if (browsers.safari) {
    document.querySelectorAll('[data-browser-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-browser-class')}--safari`
    })
  }
})
