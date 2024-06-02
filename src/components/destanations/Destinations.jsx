import React from 'react'
import styles from "../destanations/Destinations.module.css"
import train from "../../../public/images/train.jpg"
import airplane from "../../../public/images/airplane.jpg"
import { Button } from '../common/button/Button'
import { useTranslation } from 'react-i18next'

export const Destinations = () => {
    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };
    handleChange
  return (
   <>
    <section id='about'>
    <div className={styles.main}>
         <div className={styles.texts}>
            <h2 className={styles.title}>{t("Explore Destinations With Ease")}</h2>
            <p className={styles.text}>{t("Find")}</p>
        </div>
        <div className={styles.box}>
            <div className={styles.imgBox}>
                <img src={train} alt="train" className={styles.img} />
            </div>
            <div className={styles.textBox}>
                <div className={styles.top}>
                    <div className={styles.right}>
                        <h3>{t("Cheap Railway Tickets With Us")}</h3>
                        <p>{t("Whole world")}</p>
                    </div>
                    <div className={styles.left}>
                        <Button>{t("Explore More")}</Button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>{t("Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network. .")}</p>
                </div>
            </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.box}>
            <div className={styles.imgBox}>
                <img src={airplane} alt="airplane" className={styles.img} />
            </div>
            <div className={styles.textBox}>
                <div className={styles.top}>
                    <div className={styles.right}>
                        <h3>{t("Discover Exciting Air Travel Deals")}</h3>
                        <p>{t("Global Destinations")}</p>
                    </div>
                    <div className={styles.left}>
                        <Button>{t("Explore More")}</Button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>{t("Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network. .")}</p>
                </div>
            </div>
        </div>
        <div className={styles.line}></div>
    </div>
    </section>
   </>
  )
}
