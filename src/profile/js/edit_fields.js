import '../../js/docReady'

docReady(() => {
  let elementsToToggle = []
  let editBox = document.querySelector('.editor__edit_box')

  elementsToToggle.push(editBox)
  elementsToToggle.push(document.querySelector('.editor__business_label'))

  let saveButton = document.querySelector('.editor__button[data-for=save]')
  let cancelButton = document.querySelector('.editor__button[data-for=cancel]')
  let buttons = [cancelButton, saveButton]

  document.querySelectorAll('.editor__field').forEach((item) => {
    elementsToToggle.push(item)
  })

  editBox.addEventListener('click', () => {
    buttons.forEach((el) => { el.setAttribute('style', 'display:inline-block !important') })
    if (!saveButton.attached) {
      saveButton.addEventListener('click', displayElements)
      cancelButton.addEventListener('click', displayElements)
      saveButton.attached = true
    }

    function displayElements () {
      elementsToToggle.forEach((el) => { el.style.display = el.oldDisplay })
      buttons.forEach((el) => { el.setAttribute('style', 'display: none !important') })
    }

    elementsToToggle.forEach((el) => {
      el.oldDisplay = el.style.display
      el.style.display = 'none'
    })
  })
})
