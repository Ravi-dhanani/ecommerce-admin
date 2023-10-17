import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import Header from "./Header";
import MobileView from "./MobileView";

export default function MainLayout(props: { children: any }) {
  const [open, setOpen] = useState(true);
  const [isMobileView, setMobileView] = useState(false);
  return (
    <div>
      <div className="grid-cols-12">
        <div className={" z-40  ease-in-out duration-300"}>
          <Header setOpen={setMobileView} open={isMobileView} />
          <div className={"md:grid md:grid-cols-12"}>
            <div className={"md:col-start-1 md:col-span-1"}>
              <div className="hidden md:block xl:block">
                <Sidebar />
              </div>
              <div className="">
                <MobileView setOpen={setMobileView} open={isMobileView} />
              </div>
            </div>
            <div
              className={`${"xl:col-start-3 xl:col-span-10 lg:col-start-4  lg:col-span-9 md:col-start-5 md:col-span-7 z-40 p-5 ease-in-out duration-300"}`}
            >
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
