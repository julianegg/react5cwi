import Link from "next/link";
import React from "react";
import Cars from "@/cars/page";

type Props = {};

export default function Menu({}: Props){
  return(
    <div>
      <ul>
        <li>
          <Link href="/" > Home</Link>
        </li>
        <li>
          <Link href="/Cars" > Cars</Link>
        </li>
        <li>
          <Link href="/Trucks" > Trucks</Link>
        </li>
      </ul>
    </div>
  )
}