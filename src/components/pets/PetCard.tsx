"use client";

import Image from "next/image";
import { Pet } from "@/lib/db";

export default function PetCard({ pet }: { pet: Pet }) {
  /* 🧑‍💻 DEMO ❶:
     Place cursor below, type “/**” and let Copilot autocomplete
     a JSDoc + the component JSX with tailwind classes.
  */

  return (
    <div className="border rounded p-4 shadow">
      <Image
        src={pet.img}
        alt={`${pet.name} the dog`}
        width={300}
        height={300}
        className="rounded"
      />
      <p className="mt-2 text-center font-semibold">{pet.name}</p>
    </div>
  );
}
