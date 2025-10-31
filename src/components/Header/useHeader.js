import React, { useState } from "react";
import Logo from "../Logo";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navMenu, secondaryMenu } from "./HeaderLinkData";
import { headerIconData, headerIconAuthenticatedData } from "./HeaderLinkData";
import { setSelectedNavMenu } from '../../Stores/NavMenu/selectedNavMenuAction'
import { COLORS } from "../../constants";

const useHeader = () => {

  const dispatch = useDispatch();
  const selectedNavMenu = useSelector(state => state.selectedNavMenuReducer.selectedNavMenu)
  const [hoverableIconData, setHoverableIconData] = useState(headerIconData);


  const [pageOffset, setPageOffset] = useState(0);
  const [width, setWidth] = useState(0);

  function renderMenu() {
    return (
      <ul className="menu" id="menuContainer">
        {width < 767 ? <Logo /> : null}
        {selectedNavMenu.map((link) => {
          return(
            <li
              key={link.id}
              className="links"
              onClick={() => handleNavClick(link.id)}
              style={{color: COLORS.green}}
            >
              <NavLink
                to={link.link}
                id={`headerNavMenuLink-${link.id}`}
                className={link.active ? 'header-link nav-link is-active' : 'header-link nav-link'}
              >
                {link.label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    );
  }

  const toggleMenu = () => {
    const toggler = document.getElementById("hamburgerIcon");
    const toggler2 = document.getElementById("menuContainer");
    toggler.classList.toggle("active");
    toggler2.classList.toggle("active");
  };

  const handleNavClick = (id) => {
    dispatch(setSelectedNavMenu(selectedNavMenu.map(link => link.id === id ? { ...link, active: !link.active }: { ...link, active: false } ) ) );
  };


  const styles = {
    header: {
      backgroundColor: pageOffset < 80 ? "transparent" : "white",
      transition: "all ease-in-out 700ms",
      width: "100%",
      height: "100px",
    },
  };

  return {
    toggleMenu,
    renderMenu,
    setWidth,
    setPageOffset,
    setHoverableIconData,
    setSelectedNavMenu,
    dispatch,
    selectedNavMenu,
    styles,
    width,
    hoverableIconData,
    headerIconData,
    headerIconAuthenticatedData,
    navMenu, secondaryMenu,
  };
};

export default useHeader;
