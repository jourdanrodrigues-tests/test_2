import '../../js/docReady'

docReady(() => {
  let elementsToToggle = []
  let editBox = document.querySelector('.editor__edit_box')

  elementsToToggle.push(editBox)
  elementsToToggle.push(document.querySelector('.editor__business_label'))

  let saveButton = document.querySelector('.editor__form__button[data-for=save]')
  let cancelButton = document.querySelector('.editor__form__button[data-for=cancel]')
  let form = document.querySelector('.editor__form')

  document.querySelectorAll('.editor__field').forEach((item) => {
    elementsToToggle.push(item)
  })

  editBox.addEventListener('click', () => {
    form.style.display = 'block'
    if (!saveButton.attached) {
      saveButton.addEventListener('click', displayElements)
      cancelButton.addEventListener('click', displayElements)
      saveButton.attached = true
    }

    function displayElements () {
      elementsToToggle.forEach((el) => { el.style.display = el.oldDisplay })
      form.style.display = 'none'
    }

    elementsToToggle.forEach((el) => {
      el.oldDisplay = el.style.display
      el.style.display = 'none'
    })
  })
})
