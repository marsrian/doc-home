"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { uid, displayName, photoURL } = user || {};
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const { replace } = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = async () => {
    const toastId = toast.loading("Loading...");
    try {
      await logOut();
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });
      await res.json();
      if (pathname.includes("/about") || pathname.includes("/dashboard")) {
        replace("/");
      }
      toast.dismiss(toastId);
      toast.success("successfully logout");
    } catch (error) {
      toast.error("Not logout");
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 flex justify-between items-center max-w-full px-20 pt-12 text-white">
      <div className="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
        >
          <path
            d="M59.9292 19.1854C58.7225 17.9788 57.0333 17.2146 55.1831 17.2146C52.2872 17.2146 49.6326 16.0481 47.7422 14.1175C45.8518 12.2272 44.6452 9.57258 44.6452 6.67667C44.6452 2.97635 41.6689 0 37.9685 0H23.8912C22.0411 0 20.3518 0.764198 19.1452 1.97083C17.9385 3.17745 17.1743 4.86673 17.1743 6.71689C17.1743 12.5489 12.4685 17.2548 6.63645 17.2548C3.01657 17.2146 0 20.1909 0 23.8912V37.9685C0 41.6689 3.01657 44.6452 6.67667 44.6452C9.57258 44.6452 12.2272 45.8116 14.1175 47.7422C16.0079 49.6326 17.2146 52.2872 17.2146 55.1831C17.2146 58.8834 20.1909 61.8598 23.8912 61.8598H37.9685C39.8187 61.8598 41.508 61.0956 42.7146 59.8889C43.9212 58.6823 44.6854 56.993 44.6854 55.1429C44.6854 52.247 45.8518 49.5924 47.7825 47.702C49.6728 45.8116 52.3274 44.605 55.2233 44.605C58.9236 44.605 61.9 41.5884 61.9 37.9283V23.851C61.9 22.0411 61.1358 20.392 59.9292 19.1854ZM30.9299 46.8172C22.1617 46.8172 15.0828 39.698 15.0828 30.9701C15.0828 22.2019 22.2019 15.1231 30.9299 15.1231C39.6578 15.1231 46.7769 22.2422 46.7769 30.9701C46.8172 39.698 39.698 46.8172 30.9299 46.8172Z"
            fill="white"
          />
          <path
            d="M31.0506 44.4836C38.4694 44.4836 44.4836 38.4694 44.4836 31.0506C44.4836 23.6317 38.4694 17.6176 31.0506 17.6176C23.6317 17.6176 17.6176 23.6317 17.6176 31.0506C17.6176 38.4694 23.6317 44.4836 31.0506 44.4836Z"
            fill="#F7A582"
          />
          <path
            d="M38.4519 29.4285V32.7129C38.4519 33.508 37.795 34.1649 36.9998 34.1649H34.1649V36.9999C34.1649 37.795 33.508 38.4519 32.7128 38.4519H29.4284C28.6333 38.4519 27.9764 37.795 27.9764 36.9999V34.1649H25.1414C24.3463 34.1649 23.6894 33.508 23.6894 32.7129V29.4285C23.6894 28.6333 24.3463 27.9764 25.1414 27.9764H27.9764V25.1415C27.9764 24.3463 28.6333 23.6895 29.4284 23.6895H32.7128C33.508 23.6895 34.1649 24.3463 34.1649 25.1415V27.9764H36.9998C37.795 27.9764 38.4519 28.6333 38.4519 29.4285Z"
            fill="white"
          />
        </svg>
        <h3 className="text-[35px] font-bold ">
          <span className="text-[#F7A582]">DOC</span> Home
        </h3>
      </div>
      <ul className="flex flex-col md:flex-row gap-6 font-semibold text-lg">
        <li>
          <Link
            href="/"
            className={pathname == "/" ? "bg-[#F7A582] px-3 py-2" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname == "/about" ? "bg-[#F7A582] px-3 py-2" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/appointment"
            className={
              pathname == "/appointment" ? "bg-[#F7A582] px-3 py-2" : ""
            }
          >
            Appointment
          </Link>
        </li>
        {user ? (
          <li className="relative flex gap-2">
            <button onClick={toggleDropdown}>
              <Image
                src={photoURL}
                width={40}
                height={40}
                className="rounded-full"
                alt="user profile"
              ></Image>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-12 w-48 bg-gray-600 border rounded shadow-md z-50">
                <h3 className="py-2 px-4 hover:bg-gray-900 cursor-pointer border-b overflow-x-hidden rounded-t">
                  {displayName}
                </h3>
                <button
                  onClick={handleLogOut}
                  className="py-2 px-4 hover:bg-gray-900 cursor-pointer w-full text-start rounded-b"
                >
                  LogOut
                </button>
              </div>
            )}
          </li>
        ) : (
          <li>
            <Link
              href="/login"
              className={pathname == "/login" ? "bg-[#F7A582] px-3 py-2" : ""}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
