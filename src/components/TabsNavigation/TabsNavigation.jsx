import './TabsNavigation.scss'
import Button from "@/components/Button";

const TabsNavigation = (props) => {
  const {
    tabName,
    isActive,
  } = props

  return (
    <Button
      className="tabs-navigation__button"
      label={tabName}
      isActive={isActive}
      mode="tabs"
      extraAttr={{'data-js-tabs-button': ''}}
    />
  )
}

export default TabsNavigation