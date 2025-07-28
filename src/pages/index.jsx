import Hero from "@/sections/Hero";
import Reproductions from "@/sections/Reproductions";
import Banner from "@/sections/Banner";
import AboutUs from "@/sections/AboutUs";

export const metadata = {
  title: 'Homepage',
}

export default () => {
  return (
    <>
      <Hero/>
      <Reproductions/>
      <Banner/>
      <AboutUs/>
    </>
  )
}