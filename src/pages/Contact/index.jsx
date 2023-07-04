import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import Sidebar from "../../components/Sidebar/Sidebar";

function Contact() {
  const {isOpen} = useContext(SidebarContext);

  return (
    <>
      {isOpen && <Sidebar/>}
    </>
  )
}

export default Contact;