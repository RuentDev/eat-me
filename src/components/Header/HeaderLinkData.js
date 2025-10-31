import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faChartLine,
  faArrowRightFromBracket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const navMenu = [
  {
    id: 1,
    label: "Home",
    link: "/home",
    active: false,
  },
  {
    id: 3,
    label: "Restaurant",
    link: "/restaurant",
    active: false,
  },
  {
    id: 5,
    label: "Services",
    link: "/services",
    active: false,
  },
  {
    id: 2,
    label: "About",
    link: "/about",
    active: false,
  },
  {
    id: 4,
    label: "Contact Us",
    link: "/contact",
    active: false,
  },
];

const secondaryMenu = [
  {
    id: 1,
    label: "Home",
    link: "/home",
    active: false,
  },
  {
    id: 2,
    label: "Shop",
    link: "/shop",
    active: false,
  },
  {
    id: 3,
    label: "Cart",
    link: "/cart ",
    active: false,
  },
  {
    id: 4,
    label: "Wallet",
    link: "/wallet",
    active: false,
  },
  {
    id: 5,
    label: "My Purchase",
    link: "/mypurchase",
    active: false,
  },
  {
    id: 6,
    label: "My Account",
    link: "/myaccount",
    active: false,
  },
];

const authButtons = [
  {
    id: 1,
    label: "Login",
    link: "/signin",
  },
  {
    id: 2,
    label: "Create account",
    link: "/signup",
  },
];

const headerIconData = [
  {
    id: 1,
    title: "User",
    icon: <FontAwesomeIcon icon={faUser} />,
    list: [
      {
        id: 1,
        label: "Login",
        icon: <FontAwesomeIcon icon={faRightToBracket} className="icon" />,
        link: "/signin",
      },
      {
        id: 2,
        label: "Create Account",
        icon: <FontAwesomeIcon icon={faUser} className="icon" />,
        link: "/signup",
      },
      {
        id: 3,
        label: "Wishlist",
        icon: <FontAwesomeIcon icon={faHeart} className="icon" />,
        link: "/",
      },
    ],
  },
];

const headerIconAuthenticatedData = [
  {
    id: 1,
    title: "User",
    icon: <FontAwesomeIcon icon={faUser} className="icon" />,
    list: [
      {
        id: 2,
        label: "Dashboard",
        icon: <FontAwesomeIcon icon={faChartLine} className="icon" />,
        link: "/dashboard",
      },
      {
        id: 1,
        label: "My Account",
        icon: <FontAwesomeIcon icon={faUser} className="icon" />,
        link: "/myaccount",
      },
      {
        id: 3,
        label: "Logout",
        icon: (
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
        ),
        link: "/",
      },
      {
        id: 4,
        label: "Wishlist",
        icon: <FontAwesomeIcon icon={faHeart} className="icon" />,
        link: "/",
      },
    ],
  },
];

export {
  navMenu,
  secondaryMenu,
  authButtons,
  headerIconData,
  headerIconAuthenticatedData,
};
