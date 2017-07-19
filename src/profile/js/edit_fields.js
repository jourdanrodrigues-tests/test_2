import '../../js/docReady'

docReady(() => {
  let elementsToToggle = []

  const formButtonClass = '.editor__form__button'
  const fieldInputClass = '.editor__form__field__input'
  const fieldClass = '.editor__field'
  const fieldContentClass = '.editor__field__content'

  let editBox = document.querySelector('.editor__edit_box')

  elementsToToggle.push(editBox)
  elementsToToggle.push(document.querySelector('.editor__business_label'))

  let saveButton = document.querySelector(`${formButtonClass}[data-for=save]`)
  let cancelButton = document.querySelector(`${formButtonClass}[data-for=cancel]`)
  let form = document.querySelector('.editor__form')

  document.querySelectorAll('.editor__field').forEach((item) => {
    elementsToToggle.push(item)
  })

  editBox.addEventListener('click', () => {
    form.style.display = 'block'

    if (!saveButton.attached) {
      saveButton.addEventListener('click', saveData)
      cancelButton.addEventListener('click', displayElements)
      saveButton.attached = true
    }

    let name = getFieldValue('name').split(' ')
    setInputValue('first-name', name[0])
    setInputValue('last-name', name.slice(1).join(' '))
    setInputValue('website', getFieldValue('website'))
    setInputValue('location', getFieldValue('location'))
    setInputValue('phone-number', getFieldValue('phone-number'))

    elementsToToggle.forEach((el) => {
      el.oldDisplay = el.style.display
      el.style.display = 'none'
    })

    function saveData () {
      setFieldValue('name', `${getInputValue('first-name')} ${getInputValue('last-name')}`)
      setFieldValue('website', getInputValue('website'))
      setFieldValue('location', getInputValue('location'))
      setFieldValue('phone-number', getInputValue('phone-number'))

      displayElements()
    }

    function displayElements () {
      elementsToToggle.forEach((el) => { el.style.display = el.oldDisplay })
      form.style.display = 'none'
    }

    function setFieldValue (fieldName, value) {
      let field = document.querySelector(`${fieldClass}[data-field=${fieldName}] ${fieldContentClass}`)
      let fieldValue = field.innerHTML.replace(/(<i.+i>|^\s+|\s+$)/g, '')
      field.innerHTML = field.innerHTML.replace(fieldValue, value)
    }

    function getFieldValue (fieldName) {
      let field = document.querySelector(`${fieldClass}[data-field=${fieldName}] ${fieldContentClass}`)
      return field.innerHTML.replace(/(<i.+i>|^\s+|\s+$)/g, '')
    }

    function getInputValue (inputName) {
      return document.querySelector(`${fieldInputClass}#${inputName}`).value
    }

    function setInputValue (inputName, value) {
      if (value) {
        let input = document.querySelector(`${fieldInputClass}#${inputName}`)
        input.value = value
        input.parentElement.className += ' is-dirty'
      }
    }
  })
})
