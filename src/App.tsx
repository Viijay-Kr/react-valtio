import React from "react";
import "./App.css";
import { ThemedElements } from "./ThemedElements";
import { changeTheme, useTheme } from "./theme.store";
function App() {
  const themeStore = useTheme();
  const theme = themeStore[themeStore.mode];
  return (
    <div className={`App h-screen	${theme.colors.bodyBg}`}>
      <div className="2xl:container md:container sm:container lg:container mx-auto px-10">
        <div className="flex space-x-5">
          <h2
            className={`text-3xl my-5 ${theme.colors.text400} uppercase font-bold`}
          >
            React+Valtio
          </h2>
          <i
            onClick={() =>
              changeTheme(themeStore.mode === "light" ? "dark" : "light")
            }
            className={`${theme.colors.themePicker} ${
              themeStore.mode === "light"
                ? `theme-picker-dark `
                : "theme-picker-light"
            }`}
          />
        </div>
        <ThemedElements />
      </div>
    </div>
  );
}

export default App;
