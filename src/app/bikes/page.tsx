"use client";
import React, { useState } from 'react'
import CarList from '../components/car/carList'
import { Car } from '../../../lib/types';




const cars: Car[] = [
    {
        name: "KTM",
        type: "Mountainbike ",
        color: "black/orange",

        motor: {
            serialNumber: 1239,
            hp: 0.1,
        },
        image: "bike.jpg"

    },
    {
        name: "mercedes",
        type: " Luxury Bike ",
        color: "silver",
        motor: {
            serialNumber: 1111,
            hp: 10326,
        },
        image: "mercedesbike.jpg"
    },
    {
        name: "Lambo",
        type: "E-Bike",
        color: "Black/Yellow",
        motor: {
            serialNumber: 2222,
            hp: 0,
        },
        image: "ebikelambo.jpg"
    }
];

export default function Cars() {
    const [showOnlyFirst, setShowOnlyFirst] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.color.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayCars = showOnlyFirst ? [cars[0]] : filteredCars;

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex justify-end items-center gap-4">
                <input
                    type="text"
                    placeholder="Suche nach Autos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={() => setShowOnlyFirst(!showOnlyFirst)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {showOnlyFirst ? 'Alle anzeigen' : 'Nur erstes Auto'}
                </button>
            </div>
            <CarList cars={displayCars} />
        </div>
    )
}
//hahaah