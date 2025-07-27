import './TabsCards.scss'
import classNames from "classnames";
import cardsItems from "@/components/TabsCards/cardsItems";
import {Image} from "minista";
import Button from "@/components/Button";

const TabsCards = (props) => {
  const {
    className
  } = props

  return (
    <div className={classNames(className, 'cards')}>
      {cardsItems.map(({tabName, isActive, cardItems}, index) => (
        <ul
          className={classNames("cards__list", {
            [`cards__list--${tabName.toLocaleLowerCase()}`]: tabName
          })}
          {...{[`data-js-tabs-cards-list-${index}`]: ""}}
        >
          {cardItems.map(({author, name, size, price, url}, index) => (
            <li className="cards__item">
              <Image
                className="cards__image"
                src={url}
              />
              <div className="cards__text">
                <div className="cards__author">
                  <p>{author}</p>
                </div>
                <h3 className="cards__name">{name}</h3>
                <div className="cards__size">
                  <p>{size}</p>
                </div>
                <span className="cards__price">{price}</span>
              </div>
              <Button
                className="cards__button"
                mode="green"
                label="Buy"
                {...{[`data-js-tabs-button-${index}`]: ""}}
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}


export default TabsCards