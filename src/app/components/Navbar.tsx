import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <h1 className="text-white font-bold text-lg">Edouard David</h1>
      <div className="flex gap-6">
        <Link href="/" className="text-gray-200 hover:text-blue-400">
          Home
        </Link>

        <Link href="/contact" className="text-gray-200 hover:text-blue-400">
          Contact
        </Link>
      </div>
    </nav>
  );
}
