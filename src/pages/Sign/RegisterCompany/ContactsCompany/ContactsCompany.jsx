import React, { useState } from 'react'
import classes from './ContactsCompany.module.scss'
import { useDispatch, useSelector } from 'react-redux';

import telegramIcon from "../../../../assets/images/Resume/telegramIcon.png";
import whatsappIcon from "../../../../assets/images/Resume/whatsUppIcon.png";
import twitterIcon from "../../../../assets/images/Resume/twitterIcon.png";
import facebookIcon from "../../../../assets/images/Resume/faceBookIcon.png";
import instagramIcon from "../../../../assets/images/Resume/instagramIcon.png";
import gitHubIcon from "../../../../assets/images/Resume/githubIcon.png";
import cancel from "../../../../assets/images/Resume/cancel.png";
import { activeDoteAction } from 'reduxToolkit/companyRegister/companyRegister';
import { addCompanyContacts } from 'reduxToolkit/extraReducers';

export const ContactsCompany = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.companyRegister)
    const [data, setData] = useState({
        id: 0,
        webSite: "",
        watsApp: "",
        facebook: "",
        instagram: "",
        telegram: "",
        gitHub: "",
        twitter: ""

    });
    const [icons, setIcons] = useState([]);
    const [socials, setSocials] = useState([
        { icon: whatsappIcon, name: "watsApp" },
        { icon: facebookIcon, name: "facebook" },
        { icon: instagramIcon, name: "instagram" },
        { icon: telegramIcon, name: "telegram" },
        { icon: gitHubIcon, name: "gitHub" },
        { icon: twitterIcon, name: "twitter" }
    ]);

    const addInputContact = (i, n) => {
        setIcons([...icons, { icon: i, name: n }]);
        let filteredSocial = [];
        for (let i = 0; i < socials.length; i++) {
            if (socials[i].name !== n) {
                filteredSocial.push(socials[i]);
            }
        }
        setSocials(filteredSocial);
    };

    const handleSubmitting = event => {
        event.preventDefault();
    };

    const removeInput = (name, icon) => {
        let filteredIcons = [];
        for (let i = 0; i < icons.length; i++) {
            if (icons[i].name !== name) {
                filteredIcons.push(icons[i]);
            }
        }
        setIcons(filteredIcons);
        setSocials([...socials, { icon: icon, name: name }]);
    };

    const handleChangeInput = ({ label, value }) => {
        setData(prev => ({ ...prev, [label]: value }))
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addCompanyContacts(data));
        dispatch(
            activeDoteAction([
                { id: 3, label: "About company" },
                { id: 3, type: "About" }
            ])
        );
    };

    const prevPage = event => {
        event.preventDefault();
        dispatch(
            activeDoteAction([
                { id: 3, label: "About company" },
                { id: 3, type: "About" }
            ])
        );
    };

    return (
        <>
            {loading
                ? <h2>Loading...</h2>
                : <div className={classes.socialMedia}>
                    <h2>Contacts</h2>
                    <form action="submit" className={classes.socialForm} onSubmit={handleSubmit}>
                        <div className={classes.forim_content}>
                            <input
                                className={classes.webSite_input}
                                type="text" placeholder="Provide a link to your webSite "
                                value={data.webSite}
                                onChange={(e) => setData(prev => ({ ...prev, webSite: e.target.value }))}
                            />
                            {icons &&
                                icons.map(item => (
                                    <div key={item.name} className={classes.socialInput}>
                                        <div className={classes.socialInputIn}>
                                            <input
                                                type="url"
                                                placeholder={`Provide a link to your ${item.name} account`}
                                                value={data[item.name]}
                                                onChange={(e) => handleChangeInput({ value: e.target.value, label: item.name })}
                                            />
                                            <img className={classes.insideIconImage} src={item.icon} alt="Whats app icon" />
                                        </div>
                                        <button
                                            className={classes.cancelButton}
                                            onClick={event => {
                                                removeInput(item.name, item.icon);
                                                handleSubmitting(event);
                                            }}>
                                            <img className={classes.cancelButton_img} src={cancel} alt="cancel icon" />
                                        </button>
                                    </div>
                                ))}
                            <p>Choose in which of these social networks you have an account</p>
                            <div className={classes.socialContainers}>
                                {socials.map(item => (
                                    <div key={item.name} style={{ cursor: "pointer" }} className={classes.socialCard} onClick={() => addInputContact(item.icon, item.name)}>
                                        <img style={{ width: "40px" }} src={item.icon} alt={item.name} />
                                        <h4 className={classes.cart_text}>{item.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={classes.button_group}>
                            <button className={classes.backButton} type="button" onClick={prevPage}>
                                Back
                            </button>
                            <button type="submit" className={classes.nextButton}>Next</button>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}
