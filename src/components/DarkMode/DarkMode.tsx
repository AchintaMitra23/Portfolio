/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DarkMode.css";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

const DarkMode = (props: { theme: string; setTheme: any }) => {
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    props.setTheme("dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    props.setTheme("light");
  };

  const toggle = () => {
    if (props.theme === "dark") setLightMode();
    else setDarkMode();
  };

  return (
    <div className="dark_mode">
      {props.theme === "dark" ? (
        <FontAwesomeIcon icon={faToggleOff} onClick={toggle} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faToggleOn} onClick={toggle} size="lg" />
      )}
    </div>
  );
};

export default DarkMode;
