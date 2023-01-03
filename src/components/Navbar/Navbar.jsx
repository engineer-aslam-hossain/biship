import React, { Fragment, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import "./Navbar.scss";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const pages = [
  {
    label: "Home",
    link: "home",
  },
  {
    label: "Features",
    link: "features",
  },
  {
    label: "Services",
    link: "services",
  },
  {
    label: "Get in touch",
    link: "get-in-touch",
  },
];

import Logo from "../../assets/images/logo_blue.png";
import Logo2 from "../../assets/images/logo_black.png";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [stickyClass, setStickyClass] = useState(false);
  const [moibleMenuOpen, setMobileMenuOpen] = useState(false);

  const setIndexFnc = (indx) => {
    sessionStorage.setItem("activeIndex", indx);
    setActiveIndex(indx);
  };

  useEffect(() => {
    let activeIndex = sessionStorage.getItem("activeIndex");
    if (activeIndex) {
      setActiveIndex(activeIndex);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > 50 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  let links =
    i18n.language == "he" ? t("pages", { returnObjects: true }) : pages;

  return (
    <Fragment>
      <Container className={`mobileMenu ${moibleMenuOpen && "menuOpen"}`}>
        <div className="mobileMenuTop">
          <h3>Siphome Menu</h3>
          <button onClick={() => setMobileMenuOpen(false)}>close</button>
        </div>
        <div className="linksDiv">
          {pages.map((page, indx) => (
            <Link
              key={page.label}
              activeClass="active"
              className={`mobileMenuLink ${
                indx == activeIndex && "activeLink"
              }`}
              onClick={() => setIndexFnc(indx)}
              to={page.link}
              spy={true}
              smooth={true}
              offset={
                page.link === "services"
                  ? -200
                  : page.link == "get-in-touch"
                  ? -80
                  : page.link == "features"
                  ? 150
                  : 0
              }
              duration={500}
            >
              {page.label}
            </Link>
          ))}

          <Link
            activeClass="active"
            className="contact headerLink"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
      </Container>

      <AppBar
        position="fixed"
        className={`appbar ${stickyClass ? "stickyNavbar" : ""}`}
        sx={{ padding: "5px 0", boxShadow: "none" }}
      >
        <Container>
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: i18n.language == "he" ? 1 : 0,
                display: {
                  xs: i18n.language == "en" ? "flex" : "none",
                  md: "flex",
                },
              }}
            >
              {i18n.language != "he" ? (
                <Link
                  activeClass="active"
                  className="logo"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <img src={stickyClass ? Logo2 : Logo} alt="logo" />
                </Link>
              ) : (
                <Link
                  activeClass="active"
                  className="contact headerLink"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  צור קשר
                </Link>
              )}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
              className={`${i18n.language == "he" && "hebrewFlexBoxNone"}`}
            ></Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginLeft: { md: "6rem" },
              }}
            >
              {links.map((page, indx) => (
                <Link
                  key={page.label}
                  activeClass="active"
                  className={`headerLink ${
                    indx == activeIndex && "activeLink"
                  }`}
                  onClick={() => setIndexFnc(indx)}
                  to={page.link}
                  spy={true}
                  smooth={true}
                  offset={
                    page.link === "services"
                      ? -200
                      : page.link == "get-in-touch"
                      ? -80
                      : page.link == "features"
                      ? 150
                      : 0
                  }
                  duration={500}
                >
                  {page.label}
                </Link>

                // <a
                //   href={`#${page.link}`}
                //   key={page.label}
                //   className={`headerLink ${indx == activeIndex && "activeLink"}`}
                //   onClick={() => setIndexFnc(indx)}
                // >
                //   {page.label}
                // </a>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <button
                className="MenuBtn"
                onClick={() => setMobileMenuOpen(true)}
              >
                Menu
              </button>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "none" },
              }}
              className={`${i18n.language == "he" && "hebrewFlexBox"}`}
            ></Box>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
              }}
              className={`${i18n.language == "he" && "hebrewLogoBox"}`}
            >
              {i18n.language == "he" ? (
                <Link
                  activeClass="active"
                  className="logo"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <img src={stickyClass ? Logo2 : Logo} alt="logo" />
                </Link>
              ) : (
                <Link
                  activeClass="active"
                  className="contact headerLink"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact Us
                </Link>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
}
export default Navbar;
