import './Icon.scss'
import {Icon as MinistaICon} from 'minista'
import classNames from "classnames"

const Icon = (props) => {
  const {
    className,
    name,
    ariaLabel,
    hasFill = false,
  } = props

  return (
    <span
      className={classNames(className, 'icon')}
      aria-label={ariaLabel}
    >
      <MinistaICon
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
        iconId={name}
      />
    </span>
  )
}

export default Icon