import './Reproductions.scss'
import cardsItems from "@/components/TabsCards/cardsItems";
import TabsNavigation from "@/components/TabsNavigation";
import TabsCards from "@/components/TabsCards";

const Reproductions = () => {

  return (
    <section aria-labelledby="reprodactions-title" className="reproductions">
      <h1 id="reprodactions-title" className="visually-hidden">Reproduction arts
        france, germany, england
      </h1>
      <div className="container">
        <div
          className="reproductions__content"
          data-js-tabs=""
        >
          <header className="reproductions__header">
            <h2 className="reproductions__title">
              Reproductions
            </h2>
            <div
              className="tabs-navigation"
              data-js-tabs-navigation=""
            >
              {cardsItems.map(({tabName, isActive}, index) => (
                <TabsNavigation
                  tabName={tabName}
                  isActive={index === 0}
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