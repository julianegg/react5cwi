"use client";

import React, { useState } from "react";
import { Car } from "../../../../lib/types";

type Props = { car: Car };

export default function Card({ car }: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`p-6 shadow-lg rounded-2xl transition-all duration-300 cursor-pointer 
                ${isActive
          ? "bg-amber-400 scale-105 shadow-xl"
          : "bg-gray-100 hover:bg-gray-200"
        }`}
      onClick={() => setIsActive(!isActive)}
    >
      {car.image && (
        <div className="mb-4">
          <img
            src={car.image}
            alt={`${car.name} ${car.type}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
      <h2 className="font-bold text-2xl mb-2 text-gray-800">🚗 {car.name}</h2>
      <h2 className="text-gray-600">Modell: {car.type}</h2>
      <h2 className="text-gray-600">Color: {car.color}</h2>
      <h2 className="text-gray-500 text-sm">
        Motor: {car.motor.serialNumber} | {car.motor.hp} HP
      </h2>
      <h2 className='mt-5 text-2x1 text-gray-700'>Preis: € {car.price}</h2>
      <span
        className={`inline-block mt-2 px-3 py-2 text-sm font-semibold rounded-full 
                ${isActive ? "bg-green-600 text-white" : "bg-red-500 text-white"
          }`}
      >
        {isActive ? "Active" : "Inactive"}
      </span>
    </div>
  );
}
