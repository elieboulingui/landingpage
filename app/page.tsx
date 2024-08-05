export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="h-full  bg-gray-700" >

        <nav className="flex justify-between items-center p-4">
          <a href="#" className="link-styled">Eivent</a>
          <ul className="flex space-x-6">
            <li className="text-lg font-medium">About</li>
            <li className="text-lg font-medium">Space</li>
            <li className="text-lg font-medium">Contact</li>
            <button className="bg-white text-purple-700 py-1 px-4 rounded hover:bg-purple-100">
              BYU Tickets
            </button>
          </ul>
        </nav>
        <div className="w-96 pl-20 pb-11">
          <p className="text-white font-bold">Meetup</p>
          <p className="text-white font-bold">Conference</p>
          <p className="text-white font-bold">Networking</p>
          <div className="pt-3">
            <p className="text-white text-sm">
              le lore, emprunt à l'anglais signifiant « folklore », « tradition orale », « diégèse », est l'histoire d'un univers de fiction ne constituant pas l'intrigue principale d'une œuvre. Ce terme est notamment utilisé dans le domaine des jeux vidéo.
            </p>
          </div>
          <div className="flex flex-row justify-between pt-4">
            <div className="bg-white py-1 px-4 rounded"> <p className="text-2xl">365</p>
              <span>Days</span>
            </div>
            <div className="bg-white py-1 px-4 rounded"> <p className="text-2xl">24</p>
              <span>Days</span></div>
            <div className="bg-white py-1 px-4 rounded"> <p className="text-2xl">59</p>
              <span>Days</span></div>
            <div className="bg-white py-1 px-4 rounded"> <p className="text-2xl">59</p>
              <span>Days</span></div>
          </div>
          <div className="pt-4">
            <button className="bg-white  text-purple-700 py-1 px-4 rounded hover:bg-purple-100">
              I kNOW MORE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
