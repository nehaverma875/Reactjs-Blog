import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"


export default function App() {

  const{darkMode,setDarkMode} = useContext(AppContext)

 
  return (
    <div className={`h-full w-full relative ${darkMode ? 'bg-black text-white':'bg-white text-black'}`}>
     
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );

}
