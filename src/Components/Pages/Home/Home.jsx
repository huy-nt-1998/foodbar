import React from "react"
import { OurFavouriteMenu, AboutOurEmployee, OurTopRatedDishes, MakeReservation, Banner } from "../../Layout"
export default function Home() {
  return <div>
    <Banner/>
    <OurTopRatedDishes/>
    <OurFavouriteMenu />
    <AboutOurEmployee />
    <MakeReservation/>
  </div>
}
