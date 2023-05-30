import { Link } from "react-router-dom";
import { SidebarLogo } from "./components/Logo";
import Logo from "../../assets/logo.png";
import { NavItem } from "./components/NavItem";

const TITLE = "Dashboard Cuidate";

export const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <SidebarLogo brand="Cuidate!" logo={Logo} />        
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>{TITLE}</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Administrar</div>

        {/* <!-- Nav Items --> */}
       
<<<<<<< HEAD
        <NavItem href="/" icon="fa-box" name="ABM - Productos"/>
        <NavItem href="/usuarios" icon="fa-box" name="ABM - Usuarios"/>
        <NavItem href="/" icon="fa-box" name="ABM - Productos"/>
=======
        <NavItem href="/" icon="fa-box" name="Productos"/>
        <NavItem href="/usuarios" icon="fa-user" name="Usuarios"/>
        <NavItem href="/configuracion" icon="fa-gear" name="Configuracion"/>
        <NavItem href="/" icon="fa-percent" name="Estadisticas"/>
>>>>>>> c199b06f4d50e60f872cbda376a918eecb053762

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* <!-- End of Sidebar --> */}
    </>
  );
};
