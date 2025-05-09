import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="mb-6">
      <ul className="flex space-x-6 text-lg font-medium">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/manage">Manage Guests</Link>
        </li>
      </ul>
    </nav>
  );
}
