const rootSelector = 'data-js-tabs'

class Tabs {

  selectors = {
    root: rootSelector,
    buttons: 'data-js-tabs-button',
    content: 'data-js-tabs-cards-list',
    navigation: 'data-js-tabs-navigation',
  }

  stateClasses = {
    isActive: 'is-active'
  }

  constructor(rootElement) {
    this.rootElement = rootElement

    this.buttonElements = Array.from(rootElement.querySelectorAll(`[${this.selectors.buttons}]`))
    this.contentElements = Array.from(rootElement.querySelectorAll(`[${this.selectors.content}]`))
    this.navigationElement = this.rootElement.querySelector(`[${this.selectors.navigation}]`)

    this.init()
  }

  init() {
    if (!this.navigationElement) return

    this.navigationElement.addEventListener('click', (event) => {

      const clickedButton = event.target.closest(`[${this.selectors.buttons}]`)

      if (clickedButton && this.navigationElement.contains(clickedButton)) {

        const indexButton = this.buttonElements.indexOf(clickedButton)

        if (indexButton !== -1) {
          this.onActive(indexButton)
        }
      }
    })
  }

  onActive(indexButton) {
    this.buttonElements.forEach(button => button.classList.remove(this.stateClasses.isActive))

    this.contentElements.forEach(list => list.classList.remove(this.stateClasses.isActive))

    if (this.buttonElements[indexButton]) {
      this.buttonElements[indexButton].classList.add(this.stateClasses.isActive)
    }

    if (this.contentElements[indexButton]) {
      this.contentElements[indexButton].classList.add(this.stateClasses.isActive)
    }
  }
}

class TabsCollections {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(`[${rootSelector}]`).forEach(element => {
      new Tabs(element)
    })
  }
}

export default TabsCollections