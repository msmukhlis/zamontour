import React from 'react'
import styles from "../header/Header.module.css"
import { MainPage } from '../mainPage/MainPage'
import { Navbar } from '../navbar/Navbar'
import { WeeklyOffers } from '../weeklyOffers/WeeklyOffers'
import { Visa } from '../visa/Visa'
import { Destinations } from '../destanations/Destinations'
import { Countries } from '../countries/Countries'
import { Reservation } from '../reservation/Reservation'
import { Form } from '../form/Form'

export const Header = () => {
  return (
    <header className={styles.container}>
        <Navbar/>   
        <MainPage/>
        <WeeklyOffers/>
        <Visa/>
        <Destinations/>
        <Countries/>
        <Reservation/>
        <Form/>
    </header>
  )
}
