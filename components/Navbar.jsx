import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="container py-4">
        <Link href={"/"}>
          <div className="flex items-center cursor-pointer">
            <Image alt=" " src={"/icon.png"} width={40} height={40} />
            <h3 className="sm:text-xl text-lg ml-2 font-bold">Google Tones</h3>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
