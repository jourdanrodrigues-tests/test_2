import '../../js/docReady'

// For IE
if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach
}

const firefox = navigator.userAgent.indexOf('Firefox') > 0
const ie = navigator.appName === 'Microsoft Internet Explorer' || navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)
const safari = navigator.userAgent.indexOf('Safari') > 0

docReady(() => {
  if (firefox || ie) { // Same rules apply
    document.querySelectorAll('[data-browser-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-browser-class')}--firefox`
    })
  } else if (safari) {
    document.querySelectorAll('[data-browser-class]').forEach((item) => {
      item.className += ` ${item.getAttribute('data-browser-class')}--safari`
    })
  }
})
