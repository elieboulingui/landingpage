

export default function Home() {
  return (
    <main className="flex flex-col">
    <nav className="flex justify-between items-center p-4">
      <a href="" className="link-styled">Eivent</a>
      <ul className="flex space-x-6">
        <li className="text-lg font-medium">about</li>
        <li className="text-lg font-medium">space</li>
        <li className="text-lg font-medium">about</li>
        <button className="bg-white text-purple-700 py-1 px-4 rounded hover:bg-purple-100">
        BYU Tickets
      </button>
      </ul>
    </nav>
    </main>
  );
}
