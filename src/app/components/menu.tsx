"use client";

import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 shadow-lg rounded-xl">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link
            className="px-5 py-2 text-white font-semibold rounded-lg transition duration-300 
                        bg-gray-800 bg-opacity-40 hover:bg-white hover:text-gray-900 shadow-md"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="px-5 py-2 text-white font-semibold rounded-lg transition duration-300 
                        bg-gray-800 bg-opacity-40 hover:bg-white hover:text-gray-900 shadow-md"
            href="/cars"
          >
            Cars
          </Link>
        </li>
        <li>
          <Link
            className="px-5 py-2 text-white font-semibold rounded-lg transition duration-300 
                        bg-gray-800 bg-opacity-40 hover:bg-white hover:text-gray-900 shadow-md"
            href="/trucks"
          >
            Trucks
          </Link>
        </li>
        <li>
          <Link
            className="px-5 py-2 text-white font-semibold rounded-lg transition duration-300 
                        bg-gray-800 bg-opacity-40 hover:bg-white hover:text-gray-900 shadow-md"
            href="/motorcycles"
          >
            Motorcycles
          </Link>
        </li>
      </ul>
    </nav>
  );
}
