import Banner from "./Components/Layouts/Banner"
import BestSeller from "./Components/Layouts/BestSeller"
import Footer from "./Components/Layouts/Footer"
import Header from "./Components/Layouts/Header"
import Phone from "./Components/Layouts/Phone"
import Products from "./Components/Layouts/Products"
import Sale from "./Components/Layouts/Sale"
import Special from "./Components/Layouts/Special"
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
<div onClick={add}>
<Header/>
<Subheader hoverMenu={hoverMenu} hover={hover} clickMenu={clickMenu}/>
<Banner/>
<Sale/>
<Products/>
<BestSeller/>
<Phone/>
<Special/>
<Footer/>
</div>
    </>
  );
}

export default App
