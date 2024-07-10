import { useState, useEffect } from "react";
import "./header.css";
export default function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);
  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    // 1 Send Value to Local Storage
    localStorage.setItem("currentMode", newTheme);
    // Update theme
    setTheme(newTheme);
  };
  return (
    <header className="flex-b">
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowModel(true);
        }}
        style={{ fontSize: "22px" }}
      />

      <div />
      <nav className="Header">
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Articles</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Speaking</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleThemeToggle}
        // 1 Send Value to Local Storage
        //   localStorage.setItem(
        //     "currentMode",
        //     theme === "dark" ? "light" : "dark"
        //   );
        //   // 2 Get Value From Local Storage
        //   setTheme(localStorage.getItem("currentMode"));
        // }}
        className="mode"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}{" "}
      </button>
      {showModel && (
        <div className=" fixed menumodel">
          <div className="model ">
            <ul>
              <li>
                <button
                  className=" icon-cross"
                  onClick={() => {
                    setShowModel(false);
                  }}
                />
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Articles</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Speaking</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
