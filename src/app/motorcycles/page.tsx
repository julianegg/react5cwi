"use client";
import React, { useState } from 'react'
import CarList from '../components/car/carList'
import { Car } from '../../../lib/types';




const cars: Car[] = [
    {
        name: "S1000RR",
        type: "Superbike ",
        color: "black/blue/red",

        motor: {
            serialNumber: 4444,
            hp: 212,
        },
        image: "s1000rr.jpg"

    },
    {
        name: "h2r",
        type: " Hypersport ",
        color: "black/green",
        motor: {
            serialNumber: 1111,
            hp: 326,
        },
        image: "kawah2r.jpg"
    },
    {
        name: "R1M",
        type: "Superbike",
        color: "Black/Blue",
        motor: {
            serialNumber: 2222,
            hp: 200,
        },
        image: "r1m.jpg"
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