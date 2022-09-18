import React, { useState } from "react";
import useDarkSide from "hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [checked, setChecked] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setChecked(checked);
  };

  return (
    <>
      <div className="m-2 flex flex-col items-center">
        <DarkModeSwitch checked={checked} onChange={toggleDarkMode} size={26} />
        {/* <h3 className="text-gray-800 dark:text-gray-300 pt-4">
          {colorTheme === "light" ? "Dark Mode" : "Light Mode"}
        </h3> */}
      </div>
    </>
  );
}
