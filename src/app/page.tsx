import { Suspense } from "react";
import PetList from "@/components/pets/PetList";
import AddPetForm from "@/components/pets/AddPetsForm";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <>
      <AddPetForm />
      <ErrorBoundary>
        {/* Suspense shows fallback while PetList awaits getPets() */}
        <Suspense fallback={<p>Loading pets…</p>}>
          <PetList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
