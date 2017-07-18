import '../../js/docReady'

docReady(() => {
  document.querySelector('.editor__popover__button[data-for=cancel]').addEventListener('click', () => {
    document.querySelector('.editor__popover').style.display = 'none'
  })
  document.querySelectorAll('.editor__field__edit_box').forEach((item) => {
    item.addEventListener('click', (event) => {
      let content = event.target.parentElement.querySelector('.editor__field__content')
        .innerHTML.replace(/(<i.+i>|^\s+|\s+$)/g, '')

      let popover = document.querySelector('.editor__popover')
      // As @sergio_caelum correctly pointed out, none of this will be "draw" on the screen till the end of the code
      popover.style.transform = `translate(${event.target.offsetLeft + 10}px, ${event.target.offsetTop - 218}px)`
      popover.style.display = 'block'

      let field = popover.querySelector('.editor__popover__field')
      field.className += ' is-dirty' // MDL handler

      let input = popover.querySelector('.editor__popover__field__input')
      input.focus()
      input.setAttribute('value', content)
    })
  })
})
