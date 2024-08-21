import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
// assets
import logo from "../assets/images/logo512.png";
// variables
import { sectionIds } from "./variables";

const NavbarComponent = () => {
  const [navbarClass, setNavbarClass] = useState("navbar-trans");
  const [isActive, setIsActive] = useState("home");
  const [isExpanded, setIsExpanded] = useState(false);

  // smoothly scroll to the section via user click
  function handleClick(sect) {
    const element = document.getElementById(sect);
    // adjust the margin top value as needed
    const marginTop = 0;
    const scrollToY =
      element.getBoundingClientRect().top + window.scrollY - marginTop;
    window.scrollTo({ top: scrollToY, behavior: "smooth" });

    // collapse the navbar in mobile view when clicking a link
    setIsExpanded(false);
  }

  // determine the active section while scrolling
  function getActiveSection() {
    for (let i = 0; i < sectionIds.length; i++) {
      const section = document.getElementById(sectionIds[i]);
      const curr = section.getBoundingClientRect();
      if (curr.top <= 120 && curr.bottom >= 120) {
        // set the active link based on the current section
        setIsActive(sectionIds[i]);
        break;
      }
    }
  }

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 50) {
        setNavbarClass("navbar-reduce");
      } else {
        setNavbarClass("navbar-trans");
      }
      // get the active section while scrolling
      getActiveSection();
    }

    window.addEventListener("scroll", handleScroll);

    // remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`navbar-b ${navbarClass}`}
      id="mainNav"
      expanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    >
      <div className="container">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo"
            style={{ maxWidth: "100px", maxHeight: "80px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarDefault">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarDefault" className="justify-content-end">
          <Nav>
            {sectionIds.map((sect, idx) => {
              return (
                <Nav.Item key={idx}>
                  <Nav.Link
                    href=""
                    className={isActive === sect ? "active" : ""}
                    onClick={() => handleClick(sect)}
                  >
                    {sect}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
