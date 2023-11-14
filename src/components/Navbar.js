import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className=" px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <Link
                to="/"
                className="text-xl lg:text-3xl cursor-pointer flex items-center"
              >
                DEDE
              </Link>

              <div className="hidden sm:ml-6 sm:flex sm:items-center gap-8">
                <Link
                  to="/skills"
                  className="inline-flex items-center hover:border-b-2 hover:border-black px-1 pt-1 text-sm font-medium text-gray-900 cursor pointer"
                >
                  Skills
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center hover:border-b-2 hover:border-black px-1 pt-1 text-sm font-medium text-gray-900"
                >
                  Projects
                </Link>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-4 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="/skills"
                className="block hover:border-l-4 hover:border-indigo-500  py-2 pl-3 pr-4 text-base font-medium text-gray-900 cursor-pointer"
              >
                Skills
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/projects"
                className="block hover:border-l-4 hover:border-black  py-2 pl-3 pr-4 text-base font-medium text-gray-900 cursor-pointer"
              >
                Projects
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
