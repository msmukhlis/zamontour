import React from 'react'
import { Button } from '../common/button/Button'
import styles from "../reservation/Reservation.module.css"
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLocationPin } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';



export const Reservation = () => {
    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };
    handleChange

  return (
    <>
    
        <div className={styles.background}>
            <h3>{t("Book Prefered Deal Here")}</h3>
            <div className={styles.line}></div>
            <h2>{t("Make Your Reservation")}</h2>
            <Button>{t("Discover More")}</Button>
            <section id='contacts'>
            <div className={styles.boxes}>
            <div className={styles.box}>
                <div className={styles.icon}>
                    <IoCall />
                </div>
                <h3>{t("Make a Phone Call")}</h3>
                <a href="tel:+998 99 299 99 96">+998 99 299 99 96</a>
            </div>
            <div className={styles.box}>
                <div className={styles.icon}>
                    <IoIosMail />
                </div>
                <h3>{t("Contact Us via Email")}</h3>
                <a href="mailto:zamonbiznestour@mail.ru">zamonbiznestour@mail.ru</a>
            </div>
            <div className={styles.box}>
                <div className={styles.icon}>
                    <FaLocationPin />
                </div>
                <h3>{t("Visit Our Offices")}</h3>
                <a href="#">{t("15/25, Chilanzar - 9, Tashkent city")}</a>
            </div>
        </div>
        </section>
        </div>
        <div className={styles.mapBox}>
            <iframe className={styles.map} width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=Chilanzar-25%20100152,%20Tashkent,%20Tashkent%20Region%20+(Zamontour)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
        </div>
    </>
  )
}
