import { getPets } from "@/lib/db";
import PetCard from "./PetCard";

/** Renders all pets currently “checked‑in” */
export default async function PetList() {
  const pets = await getPets(); // awaits mocked latency
  if (!pets.length) return <p>No pets yet 😿</p>;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {pets.map((p) => (
        <li key={p.id}>
          {/* PetCard is a client component */}
          <PetCard pet={p} />
        </li>
      ))}
    </ul>
  );
}
