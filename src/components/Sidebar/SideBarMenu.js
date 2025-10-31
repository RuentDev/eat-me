import { useDispatch } from "react-redux";
import { setSelectedTab } from "../../Stores/DashboardTab/selectedTabAction";
import { setSelectedProduct } from "../../Stores/Products/fetchProductAction";

const SubMenu = ({ items, index }) => {
  const dispatch = useDispatch();

  const onClickSubMenuItem = (event, submenu) => {
    event.stopPropagation();
    dispatch(setSelectedTab(submenu.option));
    dispatch(setSelectedProduct(""));
  };

  return (
    <ul className="sidebar-submenu" id={`sidebarSubMenu${index}`}>
      {items.menu.map((submenu) => (
        <li
          key={submenu.id}
          className="sidebar-submenu-item"
          onClick={(event) => onClickSubMenuItem(event, submenu)}
        >
          <span>{submenu.icon}</span>
          <span>{submenu.title}</span>
        </li>
      ))}
    </ul>
  );
};

const SideBarMenu = ({ data }) => {
  const dispatch = useDispatch();

  const toggleSubMenu = (event, sidebarNav, ind) => {
    event.stopPropagation();
    dispatch(setSelectedTab(sidebarNav.option));
    dispatch(setSelectedProduct(""));
    if (sidebarNav.menu.length > 0) {
      const navbarSubMenu = document.getElementById(`sidebarSubMenu${ind}`);
      navbarSubMenu.classList.toggle("active");
    }
  };

  return (
    <ul className="sidebar-menu-container">
      {data.map((sidebarNav, index) => {
        return (
          <div key={`${sidebarNav.id}`}>
            <li
              className="sidebar-nav-link"
              onClick={(event) => toggleSubMenu(event, sidebarNav, index)}
            >
              <div className="sidebar-nav-link-item">{sidebarNav.icon}</div>
              <div className="sidebar-nav-link-item">{sidebarNav.title}</div>
            </li>
            {sidebarNav.menu.length > 0 ? (
              <SubMenu items={sidebarNav} index={index} />
            ) : null}
          </div>
        );
      })}
    </ul>
  );
};

export default SideBarMenu;
