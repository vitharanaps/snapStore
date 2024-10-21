"use client";
import React, { useState } from "react";
import sidebar_menu from "@/data/sidebar-menus";
import { DownArrow } from "@/svg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "@/redux/auth/authSlice";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

// prop type
type IProps = {
  sideMenu: boolean;
  setSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ sideMenu, setSideMenu }: IProps) {
  const [isDropdown, setIsDropDown] = useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();

  // handle active menu
  const handleMenuActive = (title: string) => {
    if (title === isDropdown) {
      setIsDropDown("");
    } else {
      setIsDropDown(title);
    }
  };

  // handle logout
  const handleLogOut = () => {
    dispatch(userLoggedOut());
    router.push(`/login`);
  };

  //get first path
  const path = usePathname();

  return (
    <>
      <aside
        className={`w-[300px] lg:w-[250px] xl:w-[300px] border-r border-gray overflow-y-auto sidebar-scrollbar fixed left-0 top-0 h-full bg-white z-50 transition-transform duration-300 ${
          sideMenu
            ? "translate-x-[0px]"
            : " -translate-x-[300px] lg:translate-x-[0]"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="py-4 pb-8 px-8 border-b border-gray h-[78px]">
              <Link
                href="/dashboard"
                className="flex justify-center text-2xl mt-3 gap-3"
              >
             <Image src="/assets/img/images/logo.svg"  width={25} height={25} alt="logo" />  SnapStore
              </Link>
            </div>
            <div className="px-4 py-5">
              <ul>
                {sidebar_menu.map((menu) => (
                  <div className="flex flex-col gap-2" key={menu.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">
                      {menu.title}
                    </span>
                    {menu.items.map((item) => (
                      <Link
                        href={item.link}
                        key={item.id}
                        className={`${
                          path === item.link && "bg-themeLight"
                        } flex items-center justify-start lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-themeLight`}
                      >
                        {item.icon && <item.icon className="text-lg" />}
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </ul>
              <div className="mb-6 ml-2 mt-4">
                <button onClick={handleLogOut} className="tp-btn px-7 py-2">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div
        onClick={() => setSideMenu(!sideMenu)}
        className={`fixed top-0 left-0 w-full h-full z-40 bg-black/70 transition-all duration-300 ${
          sideMenu ? "visible opacity-1" : "  invisible opacity-0 "
        }`}
      >
        {" "}
      </div>
    </>
  );
}
