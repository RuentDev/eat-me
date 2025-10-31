import "./header.css";
import Logo from "../Logo";

import HoverableIcon from "../HoverableIcon/HoverableIcon";
import Cart from "../Cart/Cart";
import useHeader from "./useHeader";

import { useLayoutEffect, useEffect } from "react";
import { navMenu, secondaryMenu } from "./HeaderLinkData";
const Header = () => {
  const {
    toggleMenu,
    renderMenu,
    setWidth,
    setPageOffset,
    dispatch,
    setSelectedNavMenu, 
    setHoverableIconData,
    selectedNavMenu,
    styles,
    hoverableIconData,
    headerIconAuthenticatedData,
    headerIconData,
  } = useHeader();

  useLayoutEffect(() => {
    const handleScrollEvent = () => {
      const onScroll = () => setPageOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    };

    handleScrollEvent();

    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });
  

  useEffect(() => {
    const onPageReload = () => {
      var path = window.location.pathname;
      var page = path.split("/").pop();
      // console.log(selectedNavMenu.map((link) => link.link === `/${page}` ? { ...link, active: !link.active } : { ...link, active: false }))
      dispatch(setSelectedNavMenu( selectedNavMenu.map((link) => link.link === `/${page}` ? { ...link, active: !link.active } : { ...link, active: false } ) ) );
    };
    
    onPageReload();

    if (localStorage.getItem('auth_username')) {
      dispatch(setSelectedNavMenu(secondaryMenu));
      setHoverableIconData(headerIconAuthenticatedData)
    }else{
      dispatch(setSelectedNavMenu(navMenu))
      setHoverableIconData(headerIconData)
    }
  }, [dispatch, setSelectedNavMenu, setHoverableIconData, selectedNavMenu,headerIconData, headerIconAuthenticatedData])


  

  return (
    <header style={styles.header}>
      <div className="container outer-container">
        <Logo />
        {renderMenu()}
        <div className="header-icons-container">
          <Cart prefix="$" />
          <HoverableIcon
            data={hoverableIconData}
          />
        </div>
        <div className="hamburger" id="hamburgerIcon" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
