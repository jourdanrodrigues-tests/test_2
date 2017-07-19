import '../../js/docReady'

docReady(() => {
  document.querySelectorAll('.editor__field__edit_box').forEach((item) => {
    item.addEventListener('click', (event) => {
      let parent = event.target.parentElement
      let content = parent.querySelector('.editor__field__content')
      let contentValue = content.innerHTML.replace(/(<i.+i>|^\s+|\s+$)/g, '')

      let popover = document.querySelector('.editor__popover')
      // As @sergio_caelum correctly pointed out, none of this will be "draw" on the screen till the end of the code
      let left = 10
      let top = 218
      if (navigator.userAgent.indexOf('Safari') > 0) {
        left -= 110
        top += 361
      }
      if (navigator.userAgent.indexOf('Firefox') > 0) {
        top += 7
      }
      popover.style.transform = `translate(${event.target.offsetLeft + left}px, ${event.target.offsetTop - top}px)`
      popover.style.display = 'block'

      let field = popover.querySelector('.editor__popover__field')
      field.className += ' is-dirty' // MDL handler

      let input = field.querySelector('.editor__popover__field__input')
      input.focus()
      input.value = contentValue

      let label = field.querySelector('.editor__popover__field__label')
      let fieldName = parent.getAttribute('data-field')
      if (fieldName === 'name') {
        label.innerHTML = 'Name'
      } else {
        label.innerHTML = document.querySelector(`.editor__form__field__label[for=${fieldName}]`).innerHTML
      }

      let saveButton = popover.querySelector('.editor__popover__button[data-for=save]')
      let cancelButton = popover.querySelector('.editor__popover__button[data-for=cancel]')
      clearButtonListeners() // For the case the user clicks in other field without closing
      saveButton.addEventListener('click', saveFunction)
      cancelButton.addEventListener('click', closePopover)

      function closePopover () {
        clearButtonListeners()
        input.value = ''
        popover.style.display = 'none'
      }

      function clearButtonListeners () {
        let empty = () => {}
        saveButton.removeEventListener('click', empty)
        cancelButton.removeEventListener('click', empty)
      }

      function saveFunction () {
        content.innerHTML = content.innerHTML.replace(contentValue, input.value)
        closePopover()
      }
    })
  })
})
