import React,  { useRef } from 'react'
import styles from "../visa/Visa.module.css"
import china from "../../../public/images/china.jpg"
import hongkong from "../../../public/images/hongkong.jpg"
import europe from "../../../public/images/europe.jpeg"
import india from "../../../public/images/india.jpg"
import japan from "../../../public/images/japan.jpg"
import saudi from "../../../public/images/saudi.jpg"
import oman from "../../../public/images/oman.jpg"
import { FaUsers, FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { Button } from '../common/button/Button'
import Slider from "react-slick";
import { useTranslation } from 'react-i18next'

export const Visa = () => {
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
    <div className={styles.main}>
      <div className={styles.texts}>
        <h2 className={styles.title}>{t("Visa Support")}</h2>
        <p className={styles.text}>{t("Experience")}</p>
      </div>
      <div className="slider-container">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
      
  
        <div className={styles.box}>
          <img src={china} alt="china" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("China")}</h2>
                <p><FaUsers /> 234 {t("Check Ins")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Benefits of our Visa Support service:")}</h3>
              <p><IoIosPricetags /> {t("Best Prices")}</p>
              <p><GoClockFill /> {t("Short Processing Time")}</p>
              <p><FaCheck /> {t("Trustworthy Assistance")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={hongkong} alt="hongkong" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("Hongkong")}</h2>
                <p><FaUsers /> 300 {t("Check Ins")}</p>
              </div>
            </div>
            <div className={styles.line}> </div>
            <div className={styles.bottom}>
              <h3>{t("Benefits of our Visa Support service:")}</h3>
              <p><IoIosPricetags /> {t("Best Prices")}</p>
              <p><GoClockFill />  {t("Short Processing Time")}</p>
              <p><FaCheck /> {t("Trustworthy Assistance")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={europe} alt="europe" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("European(Schengen)")}</h2>
                <p><FaUsers /> 500 {t("Check Ins")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Benefits of our Visa Support service:")}</h3>
              <p><IoIosPricetags /> {t("Best Prices")}</p>
              <p><GoClockFill /> {t("Short Processing Time")}</p>
              <p><FaCheck />{t("Trustworthy Assistance")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={india} alt="india" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("India")}</h2>
                <p><FaUsers /> 200 {t("Check Ins")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Benefits of our Visa Support service:")}</h3>
              <p><IoIosPricetags /> {t("Best Prices")}</p>
              <p><GoClockFill /> {t("Short Processing Time")}</p>
              <p><FaCheck />{t("Trustworthy Assistance")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={japan} alt="japan" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("Japan")}</h2>
                <p><FaUsers /> 234 {t("Check Ins")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Benefits of our Visa Support service:")}</h3>
              <p><IoIosPricetags /> {t("Best Prices")}</p>
              <p><GoClockFill /> {t("Short Processing Time")}</p>
              <p><FaCheck /> {t("Trustworthy Assistance")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={saudi} alt="saudi" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("Saudi Arabia")}</h2>
                <p><FaUsers /> 345 {t("Check Ins")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Benefits of our Visa Support service:")}</h3>
              <p><IoIosPricetags /> {t("Best Prices")}</p>
              <p><GoClockFill /> {t("Short Processing Time")}</p>
              <p><FaCheck />{t("Trustworthy Assistance")}</p>
              <Button>{t("Make a Reservation")}</Button>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img src={oman} alt="oman" className={styles.img} />
          <div className={styles.whiteBox}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h2>{t("Oman")}</h2>
                <p><FaUsers /> 345 {t("Check Ins")}</p>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
              <h3>{t("Benefits of our Visa Support service:")}</h3>
              <p><IoIosPricetags /> {t("Best Prices")}</p>
              <p><GoClockFill /> {t("Short Processing Time")}</p>
              <p><FaCheck /> {t("Trustworthy Assistance")}</p>
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
    </>
  )
}
