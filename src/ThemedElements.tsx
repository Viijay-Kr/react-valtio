import React, { useEffect } from "react";
import { toRed, toYellow, useTheme } from "./theme.store";
export const ThemedElements = () => {
  const themeStore = useTheme();
  const theme = themeStore[themeStore.mode];

  useEffect(() => {
    const interval = setInterval(() => {
      if (themeStore[themeStore.mode].colors.bg400 === "bg-red-200") {
        toYellow();
      } else {
        toRed();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [themeStore]);

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex space-x-5 w-full">
        <button
          className={`${theme.colors.bg400}  ${theme.colors.hoverText} border-2 ${theme.colors.border400} rounded font-bold text-xl ${theme.colors.text400} w-1/4 h-10`}
        >
          Context API
        </button>
        <input
          type="text"
          className={`border-2 px-5 ${theme.colors.placeholder400} ${theme.colors.outline400} rounded  font-bold text-xl text-black w-20 h-10`}
          placeholder="V S"
        />
        <button
          className={`${theme.colors.bg400}  ${theme.colors.hoverText} border-2 ${theme.colors.border400} rounded font-bold text-xl ${theme.colors.text400} w-1/4 h-10`}
        >
          Valtio
        </button>
      </div>
      <table
        className={`${theme.colors.bodyBg} border-collapse table-fixed w-full`}
      >
        <thead>
          <tr className={`${theme.colors.text400} font-bold text-l italic`}>
            <td className="p-2">Framework</td>
            <td className="p-2">State Manager</td>
            <td className="p-2">Router</td>
          </tr>
        </thead>
        <tbody>
          <tr
            className={`${theme.colors.text400} cursor-pointer ${theme.colors.hoverBg} font-bold text-l italic`}
          >
            <td className={`${theme.colors.border400} border-2 p-2`}>React</td>
            <td className={`${theme.colors.border400} border-2 p-2`}>
              Internal State, Redux, Context, Valtio
            </td>
            <td className={`${theme.colors.border400} border-2 p-2`}>
              React Router, React Location, Next JS
            </td>
          </tr>
          <tr
            className={`${theme.colors.text400} cursor-pointer ${theme.colors.hoverBg} font-bold text-l italic`}
          >
            <td className={`${theme.colors.border400} border-2 p-2`}>
              Solid JS
            </td>
            <td className={`${theme.colors.border400} border-2 p-2`}>
              Signals, Store, Resources
            </td>
            <td className={`${theme.colors.border400} border-2 p-2`}>
              Solid JS Router
            </td>
          </tr>
          <tr
            className={`${theme.colors.text400} cursor-pointer ${theme.colors.hoverBg} font-bold text-l italic`}
          >
            <td className={`${theme.colors.border400} border-2 p-2`}>
              Angular JS
            </td>
            <td className={`${theme.colors.border400} border-2 p-2`}>
              Scope, Root Scope
            </td>
            <td className={`${theme.colors.border400} border-2 p-2`}>
              NG Route
            </td>
          </tr>
        </tbody>
      </table>
      <div
        className={`md text-left w-full ${theme.colors.border400} border-2 rounded p-5`}
      >
        <ul className="list-inside md:list-disc">
          <li
            className={`${theme.colors.text400} py-2 text-l font-bold italic`}
          >
            Is your react app using internal state which is growing and you have
            to do a lot of prop drilling ?
          </li>
          <li
            className={`${theme.colors.text400} py-2 text-xl font-bold italic`}
          >
            Are you considering to switch to context and maintain a global state
            to make your life easier ?
          </li>
          <li
            className={`${theme.colors.text400} py-2 text-2xl font-bold italic`}
          >
            Now you have started exploring some global state management
            libraries besides redux?
          </li>
          <li
            className={`${theme.colors.text400} py-2 text-3xl font-bold italic`}
          >
            VALTIO to the rescue!!!!
          </li>
        </ul>
      </div>
    </div>
  );
};
