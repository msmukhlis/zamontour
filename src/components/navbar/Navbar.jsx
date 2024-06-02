import React, { useState } from 'react';
import styles from "../navbar/Navbar.module.css";
import logo from "../../../public/images/logo.png";
import { FaTelegram, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav>
                <a href="https://zamontour.uz" target="_blank" className={styles.logo}>
                    <img src={logo} alt="logo" />
                </a>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>
                <div className={`${styles.nav__link} ${menuOpen ? styles.show : styles.hide}`}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#tours">Tours</a>
                    <a href="#contacts">Contacts</a>
                        <li>
                            <a href="#" onClick={() => handleChange('uz')} className={`${styles.link} ${styles.lang}`}>UZ</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleChange('en')} className={`${styles.link} ${styles.lang}`}>ENG</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleChange('ru')} className={`${styles.link} ${styles.lang}`}>RU</a>
                        </li>
                        <li>
                            <a href="#" className={styles.icon}><FaTelegram /></a>
                        </li>
                        <li>
                            <a href="#" className={styles.icon}><FaInstagram /></a>
                        </li>
                    
                </div>
                <div className={styles.navbar}>
                    <ul className={styles.links}>
                        <li><a href="#home" className={styles.link}>{t("home")}</a></li>
                        <li><a href="#about" className={styles.link}>{t("about")}</a></li>
                        <li><a href="#tours" className={styles.link}>{t("tours")}</a></li>
                        <li><a href="#contacts" className={styles.link}>{t("contacts")}</a></li>
                    </ul>

                    <ul className={styles.links}>
                        <li>
                            <a href="#" onClick={() => handleChange('uz')} className={`${styles.link} ${styles.lang}`}>UZ</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleChange('en')} className={`${styles.link} ${styles.lang}`}>ENG</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleChange('ru')} className={`${styles.link} ${styles.lang}`}>RU</a>
                        </li>
                        <li>
                            <a href="#" className={styles.icon}><FaTelegram /></a>
                        </li>
                        <li>
                            <a href="#" className={styles.icon}><FaInstagram /></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.empty}></div>
        </>
    );
};
