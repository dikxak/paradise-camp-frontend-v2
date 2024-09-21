import { MouseEventHandler, useState } from "react";
import { NavLink } from "react-router-dom";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import {
  selectIsLoggedIn,
  selectUserName,
} from "@/features/auth/authSelectors";

import { useAppSelector } from "@/hooks/reduxHooks";

import logo256 from "@/assets/logos/logo-256.png";

import { AUTH, LOCATION, BLOG } from "@/constants/routes";

import CollapsibleMenu from "../ui/CollapsibleButton/CollapsibleButton";

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) => {
  let linkClassName =
    "flex justify-center items-center xs:justify-start block w-full rounded px-3 py-1 text-base transition hover:bg-primary-700 hover:text-white";

  if (isActive)
    linkClassName += `${linkClassName} bg-primary-900 text-white hover:bg-primary-900`;

  return linkClassName;
};

const NavbarMenu = ({
  userName,
  className,
  isLoggedIn,
}: {
  userName: string;
  className: string;
  isLoggedIn: boolean;
}) => {
  if (!isLoggedIn) {
    return (
      <div className={className}>
        <NavLink to={AUTH.LOGIN} className={getNavLinkClassName} end>
          Login
        </NavLink>

        <NavLink to={AUTH.SIGN_UP} className={getNavLinkClassName} end>
          Sign Up
        </NavLink>
      </div>
    );
  }

  return (
    <div className={className}>
      <NavLink to={LOCATION.INDEX} className={getNavLinkClassName} end>
        All Locations
      </NavLink>

      <NavLink to={BLOG.INDEX} className={getNavLinkClassName} end>
        All Blogs
      </NavLink>

      <NavLink to={LOCATION.CREATE} className={getNavLinkClassName} end>
        Add Location
      </NavLink>

      <NavLink to={BLOG.CREATE} className={getNavLinkClassName} end>
        Add Blog
      </NavLink>

      <CollapsibleMenu label={userName}>
        <NavLink to={LOCATION.SHOW_MY} className={getNavLinkClassName} end>
          My Locations
        </NavLink>

        <NavLink to={BLOG.INDEX} className={getNavLinkClassName} end>
          My Blogs
        </NavLink>
      </CollapsibleMenu>
    </div>
  );
};

const NavbarIcon = ({
  isNavbarMenuOpen,
  onNavbarMenuStateChange,
}: {
  isNavbarMenuOpen: boolean;
  onNavbarMenuStateChange: MouseEventHandler<SVGSVGElement>;
}) => {
  const className = `${isNavbarMenuOpen ? "" : "hidden xs:block sm:block"} cursor-pointer text-3xl text-gray-800`;
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
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const userName = useAppSelector(selectUserName);

  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);

  const handleNavbarMenuStateChange = () =>
    setIsNavbarMenuOpen(!isNavbarMenuOpen);

  const navbarMenuClassName =
    isLoggedIn && !isNavbarMenuOpen ? "grid-cols-5" : "grid-cols-2";

  const mobileNavbarMenuClassName = clsx(
    "flex flex-col gap-2 transition-all duration-200 ease-in-out",
    {
      "overflow-y-auth max-h-96 pt-5": isNavbarMenuOpen,
      "max-h-0 overflow-hidden": !isNavbarMenuOpen,
    },
  );

  return (
    <nav className="bg-primary-50 px-6 py-4">
      <div className="flex w-full items-center justify-between">
        <NavLink to="/">
          <div className="flex items-center gap-3">
            <img src={logo256} alt="Company Logo" className="h-16 w-16" />
            <h1 className="text-2xl font-medium text-gray-800 sm:hidden md:hidden xs:hidden">
              ParadiseCamp
            </h1>
          </div>
        </NavLink>

        <NavbarIcon
          isNavbarMenuOpen={isNavbarMenuOpen}
          onNavbarMenuStateChange={handleNavbarMenuStateChange}
        />

        <NavbarMenu
          userName={userName}
          isLoggedIn={isLoggedIn}
          className={`grid ${navbarMenuClassName} gap-1 text-center sm:hidden xs:hidden`}
        />
      </div>

      <NavbarMenu
        userName={userName}
        isLoggedIn={isLoggedIn}
        className={mobileNavbarMenuClassName}
      />
    </nav>
  );
};

export default Navbar;
