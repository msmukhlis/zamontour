import React, { useRef } from 'react'
import styles from "../weeklyOffers/WeeklyOffers.module.css"
import istanbul from "../../../public/images/istanbul2.jpg"
import dubai from "../../../public/images/dubai2.jpg"
import antalya from "../../../public/images/antalya2.jpg"
import sharm from "../../../public/images/sharm-el.jpg"
import usa from "../../../public/images/usa.jpg"
import england from "../../../public/images/england.jpg"
import canada from "../../../public/images/canada.jpg"
import europe from "../../../public/images/europe.jpg"
import { FaUsers, FaBuilding, FaTaxi, FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { Button } from '../common/button/Button'
import Slider from "react-slick";
import { useTranslation } from 'react-i18next'



export const WeeklyOffers = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
  };
  handleChange
  
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
};

  return (
    <>
    <section id='tours'>
    <div className={styles.main}>
      <div className={styles.texts}>
        <h2 className={styles.title}>{t("Best Weekly Offers In Each City")}</h2>
        <p className={styles.text}>{t("Discover")}</p>
      </div>
      <div className="slider-container">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
      
  
        <div className={styles.box}>
          <img src={istanbul} alt="istanbul" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("Istanbul")}</h2>
                <p><FaUsers /> 234 {t("Check Ins")}</p>
              </div>
              <div className={styles.right}>
                <h2>$420</h2>
                <p>{t("/person")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Deal Includes:")}</h3>
              <p><FaTaxi /> {t("5 Days Trip Hotel Included")}</p>
              <p><IoIosAirplane />{t("Airplane Bill Included")}</p>
              <p><FaBuilding /> {t("Daily Places Visit")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={dubai} alt="dubai" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("Dubai")}</h2>
                <p><FaUsers /> 300 {t("Check Ins")}</p>
              </div>
              <div className={styles.right}>
                <h2>$700</h2>
                <p>{t("/person")}</p>
              </div>
            </div>
            <div className={styles.line}> </div>
            <div className={styles.bottom}>
              <h3>{t("Deal Includes:")}</h3>
              <p><FaTaxi /> {t("5 Days Trip Hotel Included")}</p>
              <p><IoIosAirplane /> {t("Airplane Bill Included")}</p>
              <p><FaBuilding />{t(" Daily Places Visit")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={antalya} alt="antalya" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("Antalya")}</h2>
                <p><FaUsers /> 500 {t("Check Ins")}</p>
              </div>
              <div className={styles.right}>
                <h2>$999</h2>
                <p>{t("/person")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Deal Includes:")}</h3>
              <p><FaTaxi /> {t("5 Days Trip Hotel Included")}</p>
              <p><IoIosAirplane />{t("Airplane Bill Included")}</p>
              <p><FaBuilding />{t("Daily Places Visit")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={sharm} alt="sharm" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("Sharm El-Sheikh")}</h2>
                <p><FaUsers /> 200 {t("Check Ins")}</p>
              </div>
              <div className={styles.right}>
                <h2>$800</h2>
                <p>{t("/person")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Deal Includes:")}</h3>
              <p><FaTaxi />{t("5 Days Trip Hotel Included")}</p>
              <p><IoIosAirplane />{t("Airplane Bill Included")}</p>
              <p><FaBuilding />{t("Daily Places Visit")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={usa} alt="usa" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("USA")}</h2>
                <p><FaUsers /> 400 {t("Check Ins")}</p>
              </div>
              <div className={styles.right}>
                <p>{t("/person")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Deal Includes:")}</h3>
              <p><FaTaxi /> {t("5 Days Trip Hotel Included")}</p>
              <p><IoIosAirplane /> {t("Airplane Bill Included")}</p>
              <p><FaBuilding /> {t("Daily Places Visit")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={england} alt="england" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("England")}</h2>
                <p><FaUsers /> 234 {t("Check Ins")}</p>
              </div>
              <div className={styles.right}>
                <p>{t("/person")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Deal Includes:")}</h3>
              <p><FaTaxi /> {t("5 Days Trip Hotel Included")}</p>
              <p><IoIosAirplane /> {t("Airplane Bill Included")}</p>
              <p><FaBuilding /> {t("Daily Places Visit")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={canada} alt="canada" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("Canada")}</h2>
                <p><FaUsers /> 345 {t("Check Ins")}</p>
              </div>
              <div className={styles.right}>
                <p>{t("/person")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Deal Includes:")}</h3>
              <p><FaTaxi /> {t("5 Days Trip Hotel Included")}</p>
              <p><IoIosAirplane /> {t("Airplane Bill Included")}</p>
              <p><FaBuilding /> {t("Daily Places Visit")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={europe} alt="europe" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("European Union")}</h2>
                <p><FaUsers /> 345 {t("Check Ins")}</p>
              </div>
              <div className={styles.right}>
                <p>{t("/person")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Deal Includes:")}</h3>
              <p><FaTaxi />{t("5 Days Trip Hotel Included")}</p>
              <p><IoIosAirplane /> {t("Airplane Bill Included")}</p>
              <p><FaBuilding /> {t("Daily Places Visit")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
      </Slider>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={previous}>
          <FaArrowLeft />
        </button>
        <button className={styles.btn} onClick={next}>
          <FaArrowRight />
        </button>
      </div>
    </div>
    </div>
    <div className={styles.line}></div>
    </section>
    </>
  )
}

