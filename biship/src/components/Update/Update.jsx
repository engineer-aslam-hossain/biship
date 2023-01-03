import { Container } from "@mui/material";
import React from "react";
import "./Update.scss";
import { useTranslation } from "react-i18next";

import updateIcon from "../../assets/icons/update-icon.svg";
import updateIcon1 from "../../assets/icons/update-icon1.svg";
import updateIcon2 from "../../assets/icons/update-icon2.svg";
import updateIcon3 from "../../assets/icons/update-icon3.svg";
import updateImg1 from "../../assets/images/updateImg1.png";
import updateImg2 from "../../assets/images/updateImg2.png";
import updateImg3 from "../../assets/images/updateImg3.png";

const Update = () => {
  const updateOptions = [
    {
      icon: updateIcon,
      title: "Monitor",
      details:
        "Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.",
    },
    {
      icon: updateIcon1,
      title: "Maintenance",
      details:
        "Siphome helps you maintain your home. The HomeHealth Record ensures you have the right information at the right time, and if you aren’t able to do the maintenance yourself, we can connect you to a service pro to help.",
    },
    {
      icon: updateIcon2,
      title: "Repair",
      details:
        "Siphome empowers you with smart notifications so you can make repairs before they become problems. Notifications provide diagnostics and recommended next actions so you know what to do and have the same information as your service pro.",
    },
    {
      icon: updateIcon3,
      title: "Replace",
      details:
        "Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.",
    },
  ];

  const { t, i18n } = useTranslation();
  return (
    <section className="sectionUpdate">
      <div className={`updateContainer ${i18n.language == "he" && "hebrew"}`}>
        <div className={`updateGrid ${i18n.language == "he" && "hebrew"}`}>
          <div className="gridContentLeft">
            <h6>{t("update_top")}</h6>
            <h2>{t("update_title")}</h2>

            <div className="imgContainer">
              <img src={updateImg1} alt="img" className="updateImg1" />
              <img src={updateImg2} alt="img" className="updateImg2" />
              <img src={updateImg3} alt="img" className="updateImg3" />
            </div>
          </div>
          <div
            className={`gridContentRight ${i18n.language == "he" && "hebrew"}`}
          >
            {t("updateItemsList", { returnObjects: true }).map((item) => (
              <div key={item.title} className="content">
                <div>
                  <img src={item.icon} alt="icon" />
                </div>
                <div>
                  <h5>{item.title} </h5>
                  <p>{item.details} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
