import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import Header from "./Header";

export default function MainLayout(props: { children: any }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="grid-cols-12">
        <div
          className={`${
            open
              ? " z-40  ease-in-out duration-300"
              : " z-40  ease-in-out duration-300"
          }`}
        >
          <Header setOpen={setOpen} open={open} />
          <div className={`${open ? "grid grid-cols-12" : ""}`}>
            <div className={`${open ? "col-start-1 col-span-1" : ""}`}>
              <Sidebar setOpen={setOpen} open={open} />
            </div>
            <div
              className={`${
                open
                  ? "col-start-3 col-span-10 z-40 p-5 ease-in-out duration-300"
                  : "col-span-3 z-40 ease-in-out duration-300 p-5"
              }`}
            >
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
