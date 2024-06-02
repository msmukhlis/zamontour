import React from 'react'
import styles from "../countries/Countries.module.css"
import dubai from "../../../public/images/dubai3.jpg"
import antalya from "../../../public/images/antalya3.jpg"
import sharm from "../../../public/images/sharm2.jpg"
import istanbul from "../../../public/images/istanbul3.jpg"
import { Button } from '../common/button/Button'
import { FaUserAlt, FaGlobe, FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next'


export const Countries = () => {
    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };
    handleChange

  return (
    <div className={styles.main}>
        <div className={styles.texts}>
            <h2 className={styles.title}>{t("Visit One Of Our Countries Now")}</h2>
            <p className={styles.text}>{t("Discover2")}</p>
        </div>
        <div className={styles.box}>
            <div className={styles.imgBox}>
                <img src={dubai} alt="dubai" className={styles.img} />
            </div>
            <div className={styles.textBox}>
                <div className={styles.top}>
                    <div className={styles.right}>
                        <h3>{t("Dubai")}</h3>
                        <p>{t("United Arab Emirated")}</p>
                    </div>
                    <div className={styles.left}>
                        <Button>{t("Explore More")}</Button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>{t("Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.")}</p>
                    <div className={styles.line}></div>
                    <ul>
                        <li> <FaUserAlt /> 8.66 {t("Mil People")}</li>
                        <li> <FaGlobe /> 41.290 {t("km2")}</li>
                        <li> <FaHome />  $1.100.200</li>
                    </ul>
                    <div className={styles.line}></div>
                    <a href="#contacts" className={styles.link}>{t("Need Directions ?")} <FaArrowRight className={styles.icon} /></a>
                </div>
            </div>
        </div>
        <div className={styles.line2}></div>
        <div className={styles.box}>
            <div className={styles.imgBox}>
                <img src={antalya} alt="antalya" className={styles.img} />
            </div>
            <div className={styles.textBox}>
                <div className={styles.top}>
                    <div className={styles.right}>
                        <h3>{t("Antalya")}</h3>
                        <p>{t("Turkey")}</p>
                    </div>
                    <div className={styles.left}>
                        <Button>{t("Explore More")}</Button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>{t("Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches and traditional Turkish culture. Kids will love the Beach Park, which features Aqua Land (a waterslide-fanatic's dream) and Dolphin Land (home to dolphins, sea lions and white whales). Make sure to explore the old town center and to see Hadrian's Gate.")}</p>
                    <div className={styles.line}></div>
                    <ul>
                        <li> <FaUserAlt /> 44.48  {t("Mil People")}</li>
                        <li> <FaGlobe /> 275.400 {t("km2")}</li>
                        <li> <FaHome />  $946.000</li>
                    </ul>
                    <div className={styles.line}></div>
                    <a href="#contacts" className={styles.link}>{t("Need Directions ?")} <FaArrowRight className={styles.icon} /></a>
                </div>
            </div>
        </div>
        <div className={styles.line2}></div>
        <div className={styles.box}>
            <div className={styles.imgBox}>
                <img src={sharm} alt="sharm" className={styles.img} />
            </div>
            <div className={styles.textBox}>
                <div className={styles.top}>
                    <div className={styles.right}>
                        <h3>{t("Sharm El-Sheikh")}</h3>
                        <p>{t("Egypt")}</p>
                    </div>
                    <div className={styles.left}>
                        <Button>{t("Explore More")}</Button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>{t("Sharm El Sheikh is the center of tourism action in Sinai Peninsula and it has the world top diving sites. Specially the underwater wonders of Ras Mohammed national park that took Sharm city to whole different level. The city has diving and shipwreck sites that attract both advanced and recreational divers from around the world to discover the un parallel marine life deep down the red sea.")}</p>
                    <div className={styles.line}></div>
                    <ul>
                        <li> <FaUserAlt /> 67.41 {t("Mil People")}</li>
                        <li> <FaGlobe /> 551.500 {t("km2")}</li>
                        <li> <FaHome />  $425.600</li>
                    </ul>
                    <div className={styles.line}></div>
                    <a href="#contacts" className={styles.link}>{t("Need Directions ?")} <FaArrowRight className={styles.icon} /></a>
                </div>
            </div>
        </div>
        <div className={styles.line2}></div>
        <div className={styles.box}>
            <div className={styles.imgBox}>
                <img src={istanbul} alt="istanbul" className={styles.img} />
            </div>
            <div className={styles.textBox}>
                <div className={styles.top}>
                    <div className={styles.right}>
                        <h3>{t("Istanbul")}</h3>
                        <p>{t("Turkey")}</p>
                    </div>
                    <div className={styles.left}>
                        <Button>{t("Explore More")}</Button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>{t("Istanbul is the most populous city in Turkey and its cultural, economic and historic center. It is located in north-western part of Turkey, divided into European and Asian side by Bosphorus, which connects the Sea of Marmara and Black Sea. It is the only city in the world that sits on two continents.")}</p>
                    <div className={styles.line}></div>
                    <ul>
                        <li> <FaUserAlt /> 67.41 {t("Mil People")}</li>
                        <li> <FaGlobe /> 551.500 {t("km2")}</li>
                        <li> <FaHome />  $425.600</li>
                    </ul>
                    <div className={styles.line}></div>
                    <a href="#contacts" className={styles.link}>{t("Need Directions ?")} <FaArrowRight className={styles.icon} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}
