import React from "react"
import headerDefaultConfig from "~data/headerDefaultConfig";

export const headerDefault = headerDefaultConfig;
const GlobalHeaderContext = React.createContext();

const GlobalHeaderProvider = ({ children }) => {
  const [header, setHeader] = React.useState(headerDefault);
  const [language, setLanguage] = React.useState('ar-KW');

  const changeHeader = (headerConfig = headerDefault) => {
    setHeader({
      ...header,
      ...headerConfig,
    });
  };

  const getLanguagePrefix = (location) => {
    if (location.pathname.includes('/en/')) {
      setLanguage('en');
    }
    else {
      setLanguage('ar-KW');
    }

    if (language == 'ar-KW') {
      return '';
    }
    else if (language == 'en') {
      return '/en';
    }
    else {
      return '';
    }
  };


  return (<GlobalHeaderContext.Provider value={{ header, changeHeader, getLanguagePrefix }}>
    {children}
  </GlobalHeaderContext.Provider>)
}


export default GlobalHeaderContext;
export { GlobalHeaderProvider };