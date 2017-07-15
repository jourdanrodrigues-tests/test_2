import './index.css'
import 'material-design-lite/dist/material.min.css'

import 'material-design-lite'
import '../js/docReady'

docReady(() => {
  document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
    debugger
    window.location.href = '/profile/'
  })
})
