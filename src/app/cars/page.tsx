import React from 'react'
import CarList from '../components/car/carList'
import { Car } from '../../../lib/types';

type Props = {}

const cars: Car[] = [
    {
        name: "Lambo",
        type: "STO",
        color: "green",
        motor: {
            serialNumber: 1234,
            hp: 680,
        }
    },
    {
        name: "Ferrari",
        type: "488",
        color: "red",
        motor: {
            serialNumber: 1234,
            hp: 780,
        }
    },
    {
        name: "McLaren",
        type: "F1",
        color: "yellow",
        motor: {
            serialNumber: 1234,
            hp: 650,
        }
    }
];

export default function Cars({ }: Props) {
    return (
        <div>
            <CarList cars={cars} />
        </div>
    )
}