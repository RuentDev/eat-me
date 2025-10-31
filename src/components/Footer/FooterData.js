import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";

// import } from "@fortawesome/free-regular-svg-icons";

const socialIcons = [
  {
    id: 1,
    link: "/instagram.com",
    icon: <FontAwesomeIcon icon={faInstagram} className="icon" />,
    title: "Instagram",
  },
  {
    id: 2,
    link: "/facebook.com",
    icon: <FontAwesomeIcon icon={faFacebook} className="icon" />,
    title: "Facebook",
  },
  {
    id: 3,
    link: "/googleplus.com",
    icon: <FontAwesomeIcon icon={faGoogle} className="icon" />,
    title: "Google Plus",
  },
  {
    id: 4,
    link: "/Twitter.com",
    icon: <FontAwesomeIcon icon={faTwitter} className="icon" />,
    title: "Twitter",
  },
];

const footerMenu = [
  {
    id: 1,
    label: "Search",
    link: "/search",
  },
  {
    id: 2,
    label: "Help",
    link: "/help",
  },
  {
    id: 3,
    label: "Information",
    link: "/information",
  },
  {
    id: 4,
    label: "Privacy Policy",
    link: "/privacy",
  },
  {
    id: 5,
    label: "Shipping Details",
    link: "/shipping",
  },
];

export { socialIcons, footerMenu };
