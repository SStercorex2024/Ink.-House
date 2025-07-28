import './Footer.scss'
import Logo from "@/components/Logo";
import Button from "@/components/Button";

const Footer = () => {
  const menuItems = [{
    name: 'Reproductions', items: ['France', 'Germany', 'England']
  }, {
    name: 'New Releases', items: ['2022', '2021', '2020']
  }, {
    name: 'About Us', items: ['Artists', 'Managers']
  },]

  return (<footer className="footer">
    <div className="container">
      <div className="footer__content">
        <div className="footer__workshop-logo">
          <Logo className="footer__logo"/>
          <div
            className="footer__workshop"
            aria-label="Workshop phone number"
          >
            <a
              className="footer__workshop-link"
              href="tel:+449995435454"
            >
              +44 (999) 543-54-54
            </a>
            <span className="footer__workshop-name">
                Workshop
              </span>
          </div>
        </div>
        <nav className="footer__navigation">
          <ul className="footer__navigation-list">
            {menuItems.map(({name, items}, index) => (
              <li
                className="footer__navigation-item"
                key={index}
              >
                <a
                  className="footer__navigation-label"
                  href={`#${name.toLocaleLowerCase().replaceAll(' ', '-')}`}
                >
                  {name}
                </a>
                <ul className="footer__sublist">
                  {items.map((item, index) => (
                    <li
                      className="footer__sublist-item"
                      key={index}
                    >
                      <a href="#" className="footer__sublist-link">
                        {item}
                      </a>
                    </li>))}
                </ul>
              </li>))}
          </ul>
        </nav>
        <div className="footer__socials">
          <ul className="footer__socials-list">
            <li className="footer__socials-item">
              <Button
                className="footer__socials-button"
                iconName="facebook"
                hasFillIcon
                label="facebook"
                isLabelHidden
                href="#"
              />
            </li>
            <li className="footer__socials-item">
              <Button
                className="footer__socials-button"
                iconName="instagram"
                hasFillIcon
                label="instagram"
                isLabelHidden
                href="#"
              />
            </li>
            <li className="footer__socials-item">
              <Button
                className="footer__socials-button"
                iconName="youtube"
                hasFillIcon
                label="youtube"
                isLabelHidden
                href="#"
              />
            </li>
          </ul>
          <div className="footer__socials-extra">
            <span className="footer__socials-company-name">
              Ink. House ®
            </span>
            <a href="#" className="footer__socials-politic">
              All rights reserved
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>)
}

export default Footer