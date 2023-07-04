import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import Sidebar from "../../components/Sidebar/Sidebar";

function Products() {
  const {isOpen} = useContext(SidebarContext);

  return (
    <>
      {isOpen && <Sidebar/>}
    </>
  )
}

export default Products;