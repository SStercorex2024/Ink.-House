import './AboutUs.scss'
import {Image} from "minista";

const AboutUs = () => {

  const title = 'Our Team'
  const description = 'The significance of these problems is so obvious that the basic vector of development allows us to assess the significance of experiments that are striking in their scale and grandiosity. We have to start from the fact that consultation with a broad asset.'
  const imgUrl = '/src/assets/images/about-us/1.png'

  return (
    <section
      className="about-us"
      aria-labelledby='about-us-title'
    >
      <div className="container">
        <div className="about-us__wrapper">
          <Image
            className="about-us__image"
            src={imgUrl}
          />
          <div className="about-us__content">
            <h1
              className="about-us__title h2"
              id='about-us-title'
            >
              {title}
            </h1>
            <div className="about-us__description">
              <p>{description}</p>
            </div>
            <div className="about-us__people">
              <Image
                className="about-us__icon"
                src="/people/2.svg"
              />
              <Image
                className="about-us__icon"
                src="/people/3.svg"
              />
              <Image
                className="about-us__icon"
                src="/people/1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default AboutUs