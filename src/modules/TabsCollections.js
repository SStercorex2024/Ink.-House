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
    this.buttonElements.forEach(button =>
      button.classList.toggle(this.stateClasses.isActive, this.buttonElements.indexOf(button) === indexButton)
    );

    this.contentElements.forEach((content, index) => {
      if (index === indexButton) {
        content.style.display = 'grid';
        void content.offsetWidth;
        content.classList.add(this.stateClasses.isActive);
      } else {
        const handleTransitionEnd = (e) => {
          if (e.propertyName !== 'opacity') return;
          if (!content.classList.contains(this.stateClasses.isActive)) {
            content.style.display = 'none';
          }
          content.removeEventListener('transitionend', handleTransitionEnd);
        };

        content.addEventListener('transitionend', handleTransitionEnd);
        content.classList.remove(this.stateClasses.isActive);
      }
    });
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