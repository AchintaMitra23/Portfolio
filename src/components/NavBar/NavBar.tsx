/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "../DarkMode/DarkMode";
import {
  faCog,
  faContactBook,
  faGraduationCap,
  faPenClip,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ToolTip from "../ToolTip/ToolTip";
import "./NavBar.css";

const NavBar = (props: { theme: string; setTheme: any }) => {
  return (
    <ul>
      <li>
        <ToolTip text="About">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </ToolTip>
      </li>
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
      <li>
        <ToolTip text="Lets Connect">
          <FontAwesomeIcon icon={faContactBook} size="lg" />
        </ToolTip>
      </li>
      <li
        style={{
          display: "inline-flex",
          borderRadius: "5px",
          background: "var(--tooltip_color)",
        }}
      >
        <DarkMode theme={props.theme} setTheme={props.setTheme} />
      </li>
    </ul>
  );
};

export default NavBar;
