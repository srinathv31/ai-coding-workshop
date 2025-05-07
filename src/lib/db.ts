/* Mock DB — no external setup needed */
export type Pet = { id: string; name: string; img: string };

const pets: Pet[] = [];

export async function getPets(): Promise<Pet[]> {
  await new Promise((r) => setTimeout(r, 400)); // mimic network
  return pets;
}

export async function insertPet(pet: Pet): Promise<void> {
  await new Promise((r) => setTimeout(r, 600)); // mimic network
  pets.push(pet);
}
