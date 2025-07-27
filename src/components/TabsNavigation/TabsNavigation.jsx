import './TabsNavigation.scss'
import Button from "@/components/Button";

const TabsNavigation = (props) => {
  const {
    tabName,
    isActive,
    id
  } = props

  return (
    <Button
      className="tabs-navigation__button"
      label={tabName}
      isActive={isActive}
      mode="tabs"
      id={id}
    />
  )
}

export default TabsNavigation