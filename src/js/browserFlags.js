export default {
  firefox: navigator.userAgent.indexOf('Firefox') > 0,
  ie: navigator.appName === 'Microsoft Internet Explorer' || navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/),
  safari: navigator.userAgent.indexOf('Safari') > 0 && navigator.userAgent.indexOf('Chrome') === -1
}
