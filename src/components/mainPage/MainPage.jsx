import React from 'react'
import styles from "../mainPage/MainPage.module.css"
import { Button } from '../common/button/Button'
import { FaUserAlt, FaGlobe, FaHome } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
    

export const MainPage = () => {
    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };
    handleChange
  return (
        <section id='home'>
            <div className={styles.mainPage }>
        <Swiper modules={[Pagination,Autoplay]}
         pagination={{ clickable: true }}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
         >
            <SwiperSlide key="istanbul">
                <div className={styles.mainPage1}>
                <div className={styles.texts}>
                        <p className={styles.text}>{t("Take a Glimpse Into The Beautiful City Of:")}</p>
                        <h2 className={styles.name}>{t("Istanbul")}</h2>
                        <Button>{t("Go There")}</Button>
                    </div>
                    <div className={styles.whiteBox}>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaUserAlt />
                            </div>
                            <div className={styles.right}>
                                <p>{t("Population")}</p>
                                <h2>{t("44.48 M")}</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaGlobe />
                            </div>
                            <div className={styles.right}>
                                <p>{t("Territory")}</p>
                                <h2>{t("275.400 KM2")}</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaHome />
                            </div>
                            <div className={styles.right}>
                                <p>{t("AVG Price")}</p>
                                <h2>{t("$946.000")}</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <Button>{t("Explore More")}</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide key="antalya">
                <div className={`${styles.mainPage1} ${styles.mainPage2}`}>
                <div className={styles.texts}>
                        <p className={styles.text}>{t("Take a Glimpse Into The Beautiful City Of:")}</p>
                        <h2 className={styles.name}>{t("Antalya")}</h2>
                        <Button>{t("Go There")}</Button>
                    </div>
                    <div className={styles.whiteBox}>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaUserAlt />
                            </div>
                            <div className={styles.right}>
                                <p>{t("Population")}</p>
                                <h2>8.66 M</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaGlobe />
                            </div>
                            <div className={styles.right}>
                                <p>{t("Territory")}</p>
                                <h2>41.290 KM2</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaHome />
                            </div>
                            <div className={styles.right}>
                                <p>{t("AVG Price")}</p>
                                <h2>$1.100.200</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <Button>{t("Explore More")}</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide key="dubai">
                <div className={`${styles.mainPage1} ${styles.mainPage3}`}>
                <div className={styles.texts}>
                        <p className={styles.text}>{t("Take a Glimpse Into The Beautiful City Of:")}</p>
                        <h2 className={styles.name}>{t("Dubai")}</h2>
                        <Button>{t("Go There")}</Button>
                    </div>
                    <div className={styles.whiteBox}>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaUserAlt />
                            </div>
                            <div className={styles.right}>
                                <p>{t("Population")}</p>
                                <h2>67.41 M</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaGlobe />
                            </div>
                            <div className={styles.right}>
                                <p>{t("Territory")}</p>
                                <h2>551.500 KM2</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaHome />
                            </div>
                            <div className={styles.right}>
                                <p>{t("AVG Price")}</p>
                                <h2>$425.600</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <Button>{t("Explore More")}</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide key="Sharm">
                <div className={`${styles.mainPage1} ${styles.mainPage4}`}>
                <div className={styles.texts}>
                        <p className={styles.text}>{t("Take a Glimpse Into The Beautiful City Of:")}</p>
                        <h2 className={styles.name}>{t("Sharm El-Sheikh")}</h2>
                        <Button>{t("Go There")}</Button>
                    </div>
                    <div className={styles.whiteBox}>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaUserAlt />
                            </div>
                            <div className={styles.right}>
                                <p>{t("Population")}</p>
                                <h2>69.86 M</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaGlobe />
                            </div>
                            <div className={styles.right}>
                                <p>{t("Territory")}</p>
                                <h2>513.120 KM2</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <FaHome />
                            </div>
                            <div className={styles.right}>
                                <p>{t("AVG Price")}</p>
                                <h2>$165.450</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <Button>{t("Explore More")}</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        </section>
    
        
   
  )
}
