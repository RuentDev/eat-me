import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faEye,
  faLink,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const productOption = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        icon={faCartPlus}
        className="foodcard-icon"
        color="white"
      />
    ),
    title: "Add to cart",
    link: "addtocart",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon icon={faEye} className="foodcard-icon" color="white" />
    ),
    title: "View",
    link: "view",
  },
  {
    id: 3,
    icon: (
      <FontAwesomeIcon icon={faLink} className="foodcard-icon" color="white" />
    ),
    title: "Link",
    link: "link",
  },
  {
    id: 4,
    icon: (
      <FontAwesomeIcon icon={faHeart} className="foodcard-icon" color="white" />
    ),
    title: "Add to wishlist",
    link: "addtowishlist",
  },
];

export { productOption };
