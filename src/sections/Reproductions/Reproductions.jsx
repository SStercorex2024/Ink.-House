import './Reproductions.scss'
import cardsItems from "@/components/TabsCards/cardsItems";
import TabsNavigation from "@/components/TabsNavigation";
import TabsCards from "@/components/TabsCards";

const Reproductions = () => {

  return (
    <section className="reproductions">
      <div className="container">
        <div className="reproductions__content">
          <header className="reproductions__header">
            <h2 className="reproductions__title">
              Reproductions
            </h2>
            <div className="tabs-navigation">
              {cardsItems.map(({tabName, isActive}, index) => (
                <TabsNavigation
                  tabName={tabName}
                  isActive={index === 0}
                  id={index}
                  key={index}
                />
              ))}
            </div>
          </header>
          <div className="reproductions__cards-wrapper">
            <TabsCards
              className="reproductions__cards"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reproductions