/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "../DarkMode/DarkMode";
import {
  faCog,
  faGraduationCap,
  faPenClip,
} from "@fortawesome/free-solid-svg-icons";
import ToolTip from "../ToolTip/ToolTip";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul>
      <li>
        <ToolTip text="Skills">
          <FontAwesomeIcon icon={faCog} size="lg" />
        </ToolTip>
      </li>
      <li>
        <ToolTip text="Experience">
          <FontAwesomeIcon icon={faGraduationCap} size="lg" />
        </ToolTip>
      </li>
      <li>
        <ToolTip text="Works">
          <FontAwesomeIcon icon={faPenClip} size="lg" />
        </ToolTip>
      </li>
      <li
        style={{
          display: "inline-flex",
          borderRadius: "5px",
          background: "var(--tooltip_color)",
        }}
      >
        <DarkMode />
      </li>
    </ul>
  );
};

export default NavBar;
