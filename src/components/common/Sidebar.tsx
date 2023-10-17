import SideNav from "./SideNav";

export function Sidebar() {
  return (
    <div
      className={`w-64 border-r border-gray-300 h-full   text-white fixed  z-0  ease-in-out duration-300  `}
    >
      <SideNav />
    </div>
  );
}
