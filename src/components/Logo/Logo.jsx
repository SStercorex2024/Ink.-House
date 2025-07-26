import './Logo.scss'
import classNames from "classnames";

const Logo = (props) => {
  const {
    className
  } = props

  const title = 'Home'

  return (
    <a
      className={classNames(className, 'logo')}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        src="/logo.svg"
        alt=""
        className="logo__image"
        width={143}
        height={35}
      />
    </a>
  )
}

export default Logo