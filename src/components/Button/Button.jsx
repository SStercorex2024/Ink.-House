import './Button.scss'
import Icon from "@/components/Icon";
import classNames from "classnames";

const Button = (props) => {
  const {
    extraAttr,
    className,
    type = 'button',
    href,
    /**
     * transparent (default) | green  | tabs | yellow
     */
    mode = 'transparent',
    isActive = false,
    iconName,
    hasFillIcon,
    label,
    isLabelHidden = false,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = {href}
  const buttonProps = {type}
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const IconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
      hasFill={hasFillIcon}
    />
  )

  return (
    <Component
      className={classNames(className, {
        'button': true,
        [`button--${mode}`]: mode,
        'is-active': isActive,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttr}
    >
      {isLabelHidden && IconComponent}
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
    </Component>
  )
}

export default Button