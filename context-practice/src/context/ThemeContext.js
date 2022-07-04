import { createContext } from "react";

export const ThemeContext = createContext(null);
//App.js에 Provider안에 value값을 안정해주면 null로 print. 그니까 초기값임.