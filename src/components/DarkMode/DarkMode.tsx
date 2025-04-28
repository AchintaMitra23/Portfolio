/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DarkMode.css";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { setTheme } from "../../state/slices/themeSlice";

const DarkMode = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    dispatch(setTheme("dark"));
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    dispatch(setTheme("light"));
  };

  const toggle = () => {
    if (theme === "dark") setLightMode();
    else setDarkMode();
  };

  return (
    <div className="dark_mode">
      {theme === "dark" ? (
        <FontAwesomeIcon icon={faToggleOff} onClick={toggle} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faToggleOn} onClick={toggle} size="lg" />
      )}
    </div>
  );
};

export default DarkMode;
