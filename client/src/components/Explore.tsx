import React from 'react'
import { IoIosAirplane} from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineSportsCricket } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Explore = () => {
  const roles = [
    {
      id: 1,
      title: "bloggers",
      icon: <IoIosAirplane size={30}/>,
    },
    {
      id: 2,
      title: "brand ambassadors",
      icon: <FaRegLightbulb size={30}/>,
    },
    {
      id: 3,
      title: "copywriters",
      icon: <AiOutlineCheckCircle size={30}/>,
    },
    {
      id: 4,
      title: "graphic designers",
      icon: <HiOutlineLightBulb size={30}/>,
    },
    {
      id: 5,
      title: "influencers",
      icon: <MdOutlineSportsCricket size={30}/>,
    },
    {
      id: 6,
      title: "photographers",
      icon: <HiOutlineLightBulb size={30}/>,
    },
    {
      id: 7,
      title: "podcasters",
      icon: <IoIosCheckmarkCircle size={30}/>,
    },
    {
      id: 8,
      title: "social media managers",
      icon: <IoIosCheckmarkCircle size={30}/>,
    },
    {
      id: 9,
      title: "streamers",
      icon: <IoIosCheckmarkCircle size={30}/>,
    },
    {
      id: 10,
      title: "videographers",
      icon: <IoIosCheckmarkCircle size={30}/>,
    },
    {
      id: 11,
      title: "vloggers",
      icon: <IoIosCheckmarkCircle size={30}/>,
    },
  ];

  return (
    <>
          <div className="flex justify-center items-center flex-col border">
        <div className="relative my-4 flex h-full flex-col w-[85%] overflow-hidden rounded-2xl bg-white text-gray-600 ring-1 ring-gray-200">
          <div className="border-b p-6">
            <h6 className="mb-2 text-base font-semibold">How Platform Works</h6>
          </div>
          <div className="flex-auto p-6">
            <div className="relative flex flex-col justify-center">
              <div className="absolute left-4 h-full border-r-2"></div>
              <div className="relative mb-4">
                <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                  A
                </span>
                <div className="ml-12 w-auto pt-1">
                  <h6 className="text-sm font-semibold text-blue-900">
                    $2400, Design changes
                  </h6>
                  <p className="mt-1 text-xs text-gray-500">22 DEC 7:20 PM</p>
                </div>
              </div>
              <div className="relative mb-4">
                <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                  B
                </span>
                <div className="ml-12 w-auto pt-1">
                  <h6 className="text-sm font-semibold text-blue-900">
                    New order #1832412
                  </h6>
                  <p className="mt-1 text-xs text-gray-500">21 DEC 11 PM</p>
                </div>
              </div>
              <div className="relative mb-4">
                <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                  C
                </span>
                <div className="ml-12 w-auto pt-1">
                  <h6 className="text-sm font-semibold text-blue-900">
                    Server payments for April
                  </h6>
                  <p className="mt-1 text-xs text-gray-500">21 DEC 9:34 PM</p>
                </div>
              </div>
              <div className="relative mb-4">
                <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                  D
                </span>
                <div className="ml-12 w-auto pt-1">
                  <h6 className="text-sm font-semibold text-blue-900">
                    Server payments for April
                  </h6>
                  <p className="mt-1 text-xs text-gray-500">21 DEC 9:34 PM</p>
                </div>
              </div>
              <div className="relative mb-4">
                <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                  E
                </span>
                <div className="ml-12 w-auto pt-1">
                  <h6 className="text-sm font-semibold text-blue-900">
                    Server payments for April
                  </h6>
                  <p className="mt-1 text-xs text-gray-500">21 DEC 9:34 PM</p>
                </div>
              </div>
              <div className="relative mb-4">
                <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                  F
                </span>
                <div className="ml-12 w-auto pt-1">
                  <h6 className="text-sm font-semibold text-blue-900">
                    Server payments for April
                  </h6>
                  <p className="mt-1 text-xs text-gray-500">21 DEC 9:34 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[85%] mx-auto">
          <div className="rounded-lg border border-gray-200 bg-white py-2 px-3">
            <nav className="flex flex-wrap gap-2">
              {roles.map((role, index) => (
                <li
                  key={index}
                  
                  className="whitespace-nowrap flex items-center rounded-lg py-2 px-3 text-sm uppercase font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
                >
                 <span className="mx-4 text-blue-500">{role.icon}</span> {role.title}
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div></>
  )
}

export default Explore