import { MouseEventHandler, useState } from "react";
import { NavLink } from "react-router-dom";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo256 from "@/assets/logos/logo-256.png";

import { AUTH } from "@/constants/routes";

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) => {
  let linkClassName =
    "block w-full rounded px-3 py-1 text-lg transition hover:bg-primary-700 hover:text-white";

  if (isActive)
    linkClassName += `${linkClassName} bg-primary-900 text-white hover:bg-primary-900`;

  return linkClassName;
};

const NavbarMenu = ({ className }: { className: string }) => (
  <div className={className}>
    <NavLink to={AUTH.LOGIN} className={getNavLinkClassName}>
      Login
    </NavLink>

    <NavLink to={AUTH.SIGN_UP} className={getNavLinkClassName}>
      Sign Up
    </NavLink>
  </div>
);

const NavbarIcon = ({
  isNavbarMenuOpen,
  onNavbarMenuStateChange,
}: {
  isNavbarMenuOpen: boolean;
  onNavbarMenuStateChange: MouseEventHandler<SVGSVGElement>;
}) => {
  const className = `${isNavbarMenuOpen ? "" : "hidden xs:block"} cursor-pointer text-3xl text-gray-800`;
  const icon = isNavbarMenuOpen ? faXmark : faBars;

  return (
    <FontAwesomeIcon
      className={className}
      icon={icon}
      onClick={onNavbarMenuStateChange}
      role="button"
      focusable
    />
  );
};

const Navbar = () => {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);

  const handleNavbarMenuStateChange = () =>
    setIsNavbarMenuOpen(!isNavbarMenuOpen);

  return (
    <nav className="bg-primary-50 px-6 py-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo256} alt="Company Logo" className="h-16 w-16" />
          <h1 className="text-2xl font-medium text-gray-800 xs:hidden">
            ParadiseCamp
          </h1>
        </div>

        <NavbarIcon
          isNavbarMenuOpen={isNavbarMenuOpen}
          onNavbarMenuStateChange={handleNavbarMenuStateChange}
        />

        <NavbarMenu className="grid grid-cols-2 gap-2 text-center xs:hidden" />
      </div>

      <NavbarMenu
        className={`flex flex-col gap-2 overflow-hidden transition-all duration-200 ease-in-out ${isNavbarMenuOpen ? "overflow-y-auth max-h-96 pt-5" : "max-h-0"}`}
      />
    </nav>
  );
};

export default Navbar;
