import 'material-design-lite/dist/material.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import './index.css'

import 'material-design-lite'

import './js/tabs'
import './js/browserHandler'
import './js/popover'
import './js/edit_fields'

window.logout = () => {
  window.location.href = '/login/'
}
