import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  const {isOpen} = useContext(SidebarContext);

  return (
    <>
      <Header/>
      {isOpen && <Sidebar/>}
    </>
  )
}

export default Home;