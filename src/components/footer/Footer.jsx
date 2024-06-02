import React from 'react'
import styles from "../footer/Footer.module.css"
import { Button } from '../common/button/Button'
import { FaRegCopyright } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


export const Footer = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
  };
  handleChange

  return (
    <footer className={styles.container}>
        <div className={styles.box}>
        <div>
            <h2 className={styles.title}>{t("ARE YOU LOOKING TO TRAVEL ?")}</h2>
            <p className={styles.text}>{t("Make A Reservation By Clicking The Button")}</p>
        </div>
        <Button className={styles.btn}>{t("Book Yours Now")}</Button>
        </div>
        <div className={styles.copyRight}>
            <p>Copyright <FaRegCopyright /> 2024 Zamon Business Tour. All rights reserved.</p>
        </div>
    </footer>
  )
}
