import { CiHeart } from "react-icons/ci";

export default function Header() {
    return(
        <header className="flex items-center justify-between px-6 py-4 ">
            <div className="flex h-10 ">
                <img className="flex pb-4" src="/logo-icone.svg"/>
                <h1 className="text-black font-black">Pet</h1>
                <h1 className="font-black text-orange-400">Care</h1>
            </div>
            

            <div className="inline-flex items-center justify-center rounded-lg border px-5 leading-none  ">
                <p className="flex h-10 pt-3"><CiHeart /></p>
                <a href="">Lista de favoritos</a>
            </div>

        </header>
    )
}