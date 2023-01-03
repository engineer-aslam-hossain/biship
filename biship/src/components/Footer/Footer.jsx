import { Container } from "@mui/material";
import React from "react";
import "./Footer.scss";

import logo from "../../assets/images/logo_white.png";
import fb from "../../assets/icons/ico-facebook.svg";
import insta from "../../assets/icons/ico-instagram.svg";
import twitter from "../../assets/icons/ico-twitter.svg";
import { useTranslation } from "react-i18next";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Footer = () => {
  const navigationLinks = [
    { label: "Home", link: "home" },
    { label: "Features", link: "features" },
    { label: "Services", link: "services" },
    { label: "Testimonials", link: "testimonials" },
    { label: "We Care", link: "we-care" },
    { label: "Idea Exchange", link: "idea-exchange" },
  ];

  const aboutLinks = [
    { label: "Contact Us", link: "" },
    { label: "Privacy & Policy", link: "" },
    { label: "Terms & Conditions", link: "" },
  ];

  const socialLinks = [
    { icon: fb, label: "Facebook", link: "home" },
    { icon: twitter, label: "Twtiter", link: "home" },
    { icon: insta, label: "Instagram", link: "home" },
  ];
  const { t, i18n } = useTranslation();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <section name="contact">
      <Container>
        <div className={`footerGrid ${i18n.language == "he" && "hebrew"}`}>
          <div className="gridContent">
            <img src={logo} alt="logo" />
            <h6>Siphome, LLC</h6>
            <p className="address">
              The New Building 2320 Lang Avenue, Park Valley, Utah, United
              States. 84329
            </p>
            <p>
              <span>P:</span> +1 176 909 2900
            </p>
            <p>
              <span>E:</span> siphome@gmail.com
            </p>
          </div>
          <div className="gridContent">
            <h6>Navigation</h6>
            <div className="linkGrid">
              {navigationLinks.map((item) => (
                <a href={`#${item.link}`} key={item.label}>
                  {item.label}{" "}
                </a>
              ))}
            </div>
          </div>
          <div className="gridContent">
            <h6>About</h6>
            <div className="linkGrid">
              {aboutLinks.map((item) => (
                <a href={`#${item.link}`} key={item.label}>
                  {item.label}{" "}
                </a>
              ))}
            </div>
          </div>
          <div className="gridContent">
            <h6>Stay Connected</h6>
            <div className="linkGrid">
              {socialLinks.map((item) => (
                <a href={`#${item.link}`} key={item.label}>
                  <div className="social" key={item.label}>
                    <img src={item.icon} alt="icon" />
                    <p>{item.label} </p>
                  </div>
                </a>
              ))}
              <FormGroup>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography>EN</Typography>
                  <AntSwitch
                    defaultChecked
                    inputProps={{ "aria-label": "ant design" }}
                    onChange={() => {
                      i18n.changeLanguage(i18n.language == "he" ? "en" : "he");
                    }}
                  />
                  <Typography>HE</Typography>
                </Stack>
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <p>
            Copyright &copy; {new Date().getFullYear()}. Siphome Smart home LLC.{" "}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
