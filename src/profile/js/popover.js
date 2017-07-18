import '../../js/docReady'

docReady(() => {
  document.querySelectorAll('.editor__field__edit_box').forEach((item) => {
    item.addEventListener('click', (event) => {
      let content = event.target.parentElement.querySelector('.editor__field__content')
      let contentValue = content.innerHTML.replace(/(<i.+i>|^\s+|\s+$)/g, '')

      let popover = document.querySelector('.editor__popover')
      // As @sergio_caelum correctly pointed out, none of this will be "draw" on the screen till the end of the code
      popover.style.transform = `translate(${event.target.offsetLeft + 10}px, ${event.target.offsetTop - 218}px)`
      popover.style.display = 'block'

      let field = popover.querySelector('.editor__popover__field')
      field.className += ' is-dirty' // MDL handler

      let input = popover.querySelector('.editor__popover__field__input')
      input.focus()
      input.value = contentValue

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
