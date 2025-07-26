import './Header.scss'
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";

const Header = () => {
  const menuItems = [
    {
      label: 'Reproductions',
      href: '#reproductions',
    },
    {
      label: 'New items',
      href: '#new-items',
    },
    {
      label: 'About us',
      href: '#about-us',
    },
  ]

  return (
    <header
      className="header"
      data-js-overlay-menu=''
    >
      <div className="header__content">
        <Logo className="header__logo"/>
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({label, href}, index) => (
              <li className="header__menu-item" key={index}>
                <a className="header__menu-link" href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <Button
            className="header__button"
            href="#"
            mode="transparent"
            iconName="bag"
            label="shopping bag"
            isLabelHidden={true}
          />
          <BurgerButton
            className="header__burger-button"
            extraAttrs={{
              'data-js-overlay-menu-burger-button': ''
            }}
          />
        </nav>
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=''
        >
          <nav className="header__overlay-menu">
            <ul className="header__overlay-menu-list">
              {menuItems.map(({label, href}, index) => (
                <li className="header__overlay-menu-item" key={index}>
                  <a
                    className="header__overlay-menu-link"
                    href={href}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
      </div>
    </header>
  )
}

export default Header