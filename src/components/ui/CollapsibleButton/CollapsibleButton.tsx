import React, { useState } from "react";

import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CollapsibleButtonProps = {
  children: React.ReactNode;
  label: string;
};

const CollapsibleMenu = ({ children, label }: CollapsibleButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleMenu}
        className="hover:bg-blue-700 flex items-center gap-2 rounded-lg p-2 text-base text-primary-800 focus:outline-none"
      >
        <FontAwesomeIcon icon={faUser} />
        <span>{label}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 w-44 translate-x-[-50%] rounded-lg bg-primary-100 py-4 text-gray-900 shadow-md xs:left-1/4">
          <ul className="space-y-4 px-4">{children}</ul>
        </div>
      )}
    </div>
  );
};

export default CollapsibleMenu;
