"use client";

import { useTransition } from "react";
import { addPet } from "@/actions/pets";

export default function AddPetForm() {
  const [isPending, start] = useTransition();

  async function clientAction(formData: FormData) {
    start(async () => {
      await addPet(formData); // invoke Server Action
    });
  }

  return (
    <form action={clientAction} className="mb-6 flex gap-2">
      <input
        name="name"
        placeholder="Pet name"
        className="border p-2 rounded grow"
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {isPending ? "Adding…" : "Add Pet"}
      </button>
    </form>
  );
}
