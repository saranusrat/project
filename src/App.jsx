import Banner from "./Components/Layouts/Banner"
import Footer from "./Components/Layouts/Footer"
import Header from "./Components/Layouts/Header"
import Home from "./Components/Layouts/Home";
import Subheader from "./Components/Layouts/Subheader"
import React, { useRef, useState } from "react";

function App() {
  let [hover, setHover] = useState(false);
  let clickMenu = useRef(null);
  let hoverMenu = useRef(null);
  let add = (event) => {
    if (clickMenu.current.contains(event.target)) {
      setHover(!hover);
    } else if (hoverMenu.current.contains(event.target)) {
      setHover(hover);
    } else {
      setHover(false);
    }
  };
  return (
    <>

<Header/>
<div onClick={add}>
<Subheader hoverMenu={hoverMenu} hover={hover} clickMenu={clickMenu}/></div>
<Banner/>
<Home/>
<Footer/>

    </>
  );
}

export default App
