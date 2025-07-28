import './Banner.scss'
import classNames from "classnames";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const Banner = (props) => {
  const {
    className
  } = props

  const bannerItems = {
    title: 'A New Collection of French Authors',
    description1: 'It\'s hard to say why shareholders of the largest companies urge us toward new achievements that, in turn, must be constrained within their own rational limits.',
    description2: 'Taking into account performance indicators, the boundaries of personnel training predetermine the high demand for progressive development paths.',
    labelButton: 'Learn more',
  }

  return (
    <section
      className={classNames(className, 'banner')}
      aria-labelledby="banner-title"
    >
      <div className="container">
        <div className="banner__content">
          <div className="banner__header">
            <Icon
              className="banner__star"
              name="star"
            />
            <h1
              id="banner-title"
              className="banner__title h2"
            >{bannerItems.title}</h1>
          </div>
          <div className="banner__description">
            <p>{bannerItems.description1}</p>
          </div>
          <div className="banner__description">
            <p>{bannerItems.description2}</p>
          </div>
          <Button
            className="banner__button"
            mode="yellow"
            label={bannerItems.labelButton}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner