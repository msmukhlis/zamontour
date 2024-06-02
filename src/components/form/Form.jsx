import React, { useState } from 'react'
import styles from "../form/Form.module.css"
import axios from 'axios';
import { useTranslation } from 'react-i18next';
export const Form = () => {
    const [loading,setLoading] = useState(false);

    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };
    handleChange

    const SendMessage = (event) => {
        setLoading(true)
        event.preventDefault();
        const token = "7326578532:AAFl2JZIl8OAdYGOoJMNU5jvhdIkB8XyjfE"
        const chat_id = 5089303527;
        const url = `https://api.telegram.org/bot${token}/sendMessage`
        const name = document.getElementById("name").value;
        const number = document.getElementById("number").value;
        const chooseGuests = document.getElementById("chooseGuests").value;
        const nameDate = document.getElementById("nameDate").value;
        const chooseCategory = document.getElementById("chooseCategory").value;
        const visa = document.getElementById("visa").value;
        const messageContent = `Name: ${name} \nPhone Number: ${number} \nChooseGuests: ${chooseGuests} \nDate: ${nameDate} \nDestination: ${chooseCategory} \nVisa: ${visa} `;

        axios({
            url:url,
            method: "POST",
            data:{
                "chat_id": chat_id,
                "text":messageContent,
            }
        }) .then((res) => {
            document.getElementById("myForm").reset();
            alert("Sent successfully")
        }) .catch((error) => {
            console.log("error", error);
        }) .finally(() => {
            setLoading(false)
        })
    }
  return (
    <div className={styles.main}>
        <h2 className={styles.title}>{t("Make Your Reservation Through This Form")}</h2>
       <form id='myForm' onSubmit={SendMessage}>
       <div className={styles.top}>
            <div>
                <div className={styles.row}>
                    <fieldset>
                        <label htmlFor="Name" className={styles.label}>{t("Your Name")}</label>
                        <input id="name" name="name" className={styles.input} type="text" placeholder="Ex. John Smithee" />
                    </fieldset>
                </div>
                <div className={styles.row}>
                    <fieldset>
                        <label htmlFor="Number" className={styles.label}>{t("Your Phone Number")}</label>
                        <input id="number" name="number" className={styles.input} type="tel" placeholder="Ex. +99899 999 99 99" />
                    </fieldset>
                </div>
            </div>
            <div>
                <div className={styles.row}>
                    <fieldset>
                        <label htmlFor="chooseGuests" className={styles.label}>{t("Number Of Guests")}</label>
                        <select name="guests" id="chooseGuests" className={styles.input}>
                            <option selected>{t("ex. 3 or 4 or 5")}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                        </select>
                    </fieldset>
                </div>
                <div className={styles.row}>
                    <fieldset>
                        <label htmlFor="Number" className={styles.label}>{t("Check In Date")}</label>
                        <input id="nameDate" name="date" className={styles.input} type="date" required />
                    </fieldset>
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <fieldset>
                <label htmlFor="Name" className={styles.label}>{t("Choose Your Destination")}</label>
                <select name="Destination" id="chooseCategory" className={styles.input}>
                    <option selected>{t("Antalya")}</option>
                    <option value="Istanbul">{t("Istanbul")}</option>
                    <option value="Dubai">{t("Dubai")}</option>
                    <option value="Sharm El-Sheikh">{t("Sharm El-Sheikh")}</option>
                    <option value="Kuala Lumpur">{t("Kuala Lumpur")}</option>
                    <option value="Canada">{t("Canada")}</option>
                    <option value="England">{t("England")}</option>
                </select>
            </fieldset>
        </div>
        <div className={styles.row}>
            <fieldset>
                <label htmlFor="Name" className={styles.label}>{t("Choose Your Visa Support")}</label>
                <select name="Destination" id="visa" className={styles.input}>
                    <option selected>{t("Country")}</option>
                    <option value="USA">{t("USA")}</option>
                    <option value="Europe">{t("Europe")}</option>
                    <option value="England">{t("England")}</option>
                    <option value="Japan">{t("Japan")}</option>
                    <option value="Oman">{t("Oman")}</option>
                    <option value="Saudi Arabia">{t("Saudi Arabia")}</option>
                    <option value="India">{t("India")}</option>
                    <option value="China">{t("China")}</option>
                    <option value="HongKong">{t("Hongkong")}</option>
                </select>
            </fieldset>
        </div>
        <button loading={loading} type='submit' className={styles.btn}>{loading? "loading...": "Make Your Reservation Now"}</button>
       </form>
    </div>
  )
}
