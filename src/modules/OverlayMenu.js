class OverlayMenu {
  selectors = {
    root: '[data-js-overlay-menu]',
    dialog: '[data-js-overlay-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
  }

  stateClasses = {
    isActive: 'is-active',
    // isLock: 'is-lock'
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
    this.bindElement()
  }

  onBurgerClickButton = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.dialogElement.open = !this.dialogElement.open
    // document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  onChangeWindow = () => {
    if (window.innerWidth >= 690) {
      this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
      this.dialogElement.open = false
      // document.documentElement.classList.remove(this.stateClasses.isLock)
    }
  }

  onScroll = () => {
    if (this.dialogElement.open) {
      this.dialogElement.open = false
      this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
    }
  }

  bindElement = () => {
    this.burgerButtonElement.addEventListener('click', this.onBurgerClickButton)
    window.addEventListener('resize', this.onChangeWindow)
    window.addEventListener('scroll', this.onScroll)
  }
}

export default OverlayMenu