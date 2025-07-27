import './Hero.scss'
import {Image} from "minista";
import Button from "@/components/Button";

const Hero = () => {
  const description = 'High-quality prints on thick paper or linen canvas. Rare artworks at affordable prices.'
  const urlImg = '/src/assets/images/hero/1.png'
  const label = 'Products'

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content-wrapper">
          <Image
            className="hero__image"
            src={urlImg}
          />
          <div className="hero__content">
            <h1 className="hero__title">Art reproductions
              by <span>Ink. House</span></h1>
            <div className="hero__description">
              <p>{description}</p>
            </div>
            <Button
              mode="green"
              className="hero__button"
              href="#"
              label={label}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero