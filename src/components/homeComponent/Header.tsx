import { useState } from "react";
import { NavLink } from "react-router-dom";
import muscleImg from "../../assets/icons/muscle-icon.png";
import Button from "../Buttton";
import { RxCross1 } from "react-icons/rx";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  type SubmenuItem = {
    label: string;
    to: string;
  };
  type TDropdownData = {
    label: string;
    to?: string;
    submenu: SubmenuItem[];
  };
  const dropdownData: TDropdownData[] = [
    {
      label: "CheckOut",
      to: "/checkout",
      submenu: [],
    },
    {
      label: "Product",
      submenu: [
        { label: "ProductDetails", to: "/productDetails" },
        { label: "ProductPage", to: "/productPage" },
        { label: "ProductManageDashboard", to: "/productManagementDeshboard" },
        { label: "Cart", to: "/cart" },
      ],
    },
    {
      label: "AboutUs",
      to: "/aboutUs",
      submenu: [],
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const toggleDropdown = (label: string) => {
    setDropdownOpen(dropdownOpen === label ? null : label);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <div className="navbar bg-[#b4d6dd]">
      <div className="navbar-start relative">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMobileDropdown}
          >
            {mobileDropdownOpen ? (
              <RxCross1 className="size-7" />
            ) : (
              <HiMenuAlt2 className="size-7" />
            )}
          </div>
          {mobileDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl font-bold text-[#055e71]  "
            >
              {dropdownData.map((item, index) => (
                <li key={index}>
                  {item.submenu.length > 0 ? (
                    <>
                      <a onBlur={() => toggleDropdown(item.label)}>
                        {item.label}
                      </a>
                      {dropdownOpen === item.label && (
                        <ul className="p-2 absolute left-0 top-full mt-6 rounded-box shadow-lg z-[1] active:bg-[#83bbc6]">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavLink to={subItem.to || "#"}>
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink to={item.to || "#"}>{item.label}</NavLink>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <NavLink to="/" className="btn btn-ghost text-2xl">
          <span className="text-[#4c4c4c]/75 font-bold">Core</span>
          <span className="font-bold text-[#06768d]/100">Muscles</span>
          <img src={muscleImg} className="size-16 " />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-bold text-[#055e71]">
          {dropdownData.map((item, index) => (
            <li key={index}>
              {item.submenu.length > 0 ? (
                <>
                  <a onClick={() => toggleDropdown(item.label)}>{item.label}</a>
                  {dropdownOpen === item.label && (
                    <ul className="p-2  absolute left-0 top-full mt-2 rounded-box shadow-lg z-[1] hover:ease-in-out transition-transform bg-[#cde4e8]">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink to={subItem.to || "#"}>
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink to={item.to || "#"}>{item.label}</NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Button buttonName="Login" />
      </div>
    </div>
  );
};

export default Header;
