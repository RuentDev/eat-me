import { Link, useNavigate } from "react-router-dom";
import "./hoverableicon.css";
import useHeader from "../Header/useHeader";

const Modal = ({ modalData }) => {

  const {dispatch, setSelectedNavMenu, setHoverableIconData, headerIconData, navMenu } = useHeader();

  const navigate = useNavigate();

  const handleOnClick = (id) => {
    if (id === 3) {
      dispatch(setSelectedNavMenu(navMenu))
      localStorage.removeItem("auth_username");
      localStorage.removeItem("auth_token");
      navigate("/signin");
      setHoverableIconData(headerIconData)
    }

  };

  return (
    <ul className="hoverable-modal">
      <div className="arrow-up"></div>
      {modalData.map((modal) => (
        <li
          key={modal.id}
          className="hoverable-modal-item"
          onClick={() => handleOnClick(modal.id)}
        >
          <Link to={modal.link}>
            <span>{modal.icon}</span>
            {modal.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const HoverableIcon = ({ data }) => {
  return (
    <ul className="hoverable-icons-list ">
      {data.map((button) => (
        <li key={button.id} className="hoverable-icons-container">
          {button.icon}
          <Modal modalData={button.list} />
        </li>
      ))}
    </ul>
  );
};

export default HoverableIcon;
