import { proxy, useSnapshot } from "valtio";

interface Colors {
  bg400: string;
  border400: string;
  text400: string;
  placeholder400: string;
  themePicker: string;
  bodyBg: string;
  hoverText: string;
  hoverBg: string;
  outline400: string;
}

interface Theme {
  light: {
    colors: Colors;
  };
  dark: {
    colors: Colors;
  };
  mode: "light" | "dark";
}

export const themeStore = proxy<Theme>({
  light: {
    colors: {
      bg400: "bg-blue-400",
      border400: "border-blue-400",
      outline400: "outline-blue-400",
      text400: "text-black",
      placeholder400: "placeholder-gray-300",
      themePicker: "bg-gray-700",
      bodyBg: "bg-gray-50",
      hoverText: "hover:text-blue-200",
      hoverBg: "hover:bg-blue-300",
    },
  },
  dark: {
    colors: {
      bg400: "bg-gray-700",
      border400: "border-blue-400",
      outline400: "outline400-indigo-400",
      text400: "text-gray-100",
      placeholder400: "placeholder-gray-300",
      themePicker: "bg-gray-100",
      bodyBg: "bg-gray-700",
      hoverText: "hover:text-blue-400",
      hoverBg: "hover:bg-blue-300",
    },
  },
  mode: "light",
});

export const useTheme = () => useSnapshot(themeStore);

export const changeTheme = (mode: "light" | "dark") => {
  themeStore.mode = mode;
};

export const toRed = () => {
  themeStore[themeStore.mode].colors.bg400 = "bg-red-200";
  themeStore[themeStore.mode].colors.text400 = "text-red-400";
};

export const toYellow = () => {
  themeStore[themeStore.mode].colors.bg400 = "bg-yellow-200";
  themeStore[themeStore.mode].colors.text400 = "text-yellow-400";
};
