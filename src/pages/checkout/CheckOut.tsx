import Header from "../../components/homeComponent/Header";

const CheckOut = () => {
  return (
    <div>
      <Header />
      CheckOut
    </div>
  );
};

export default CheckOut;

// {
//   mobileDropdownOpen && (
//     <ul
//       tabIndex={0}
//       className="menu menu-sm dropdown-content bg-base-100 rounded-box absolute z-[1] mt-3 w-52 p-2 shadow"
//     >
//       {dropdownData.map((item, index) => (
//         <li key={index}>
//           {item.submenu.length > 0 ? (
//             <>
//               <a onClick={() => toggleDropdown(item.label)}>{item.label}</a>
//               {dropdownOpen === item.label && (
//                 <ul className="p-2 absolute left-full top-0 ml-2">
//                   {item.submenu.map((subItem, subIndex) => (
//                     <li key={subIndex}>
//                       <NavLink to={subItem.to}>{subItem.label}</NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </>
//           ) : (
//             <NavLink to={item.to || "#"}>{item.label}</NavLink>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }
