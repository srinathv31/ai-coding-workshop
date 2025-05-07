"use server";

import { insertPet, Pet } from "@/lib/db";
import { randomUUID } from "crypto";

export async function addPet(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  if (!name) throw new Error("Name is required");

  // Fetch a random dog photo for fun
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const { message: img } = (await res.json()) as { message: string };

  const pet: Pet = { id: randomUUID(), name, img };
  await insertPet(pet);
}
